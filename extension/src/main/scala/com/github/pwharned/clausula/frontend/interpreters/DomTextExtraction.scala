package com.github.pwharned.clausula.extension.interpreters
import com.github.pwharned.clausula.extension.algebras.TextExtraction
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js
class DomTextExtraction extends TextExtraction[Future] {
// Add this case class (or use a tuple)
case class WordContext(word: Word, node: dom.Node, offset: Int)

// In your extractWord method:
def extractWord(event: dom.MouseEvent): Future[Either[AppError, WordContext]] = {
  Future {
    val doc = dom.document.asInstanceOf[js.Dynamic]
    val range = doc.caretRangeFromPoint(event.clientX, event.clientY)
    if (range == null || range == js.undefined) Left(NoWordFound)
    else {
      val node = range.startContainer.asInstanceOf[dom.Node]
      if (node.nodeType != dom.Node.TEXT_NODE) Left(NoWordFound)
      else {
        // Skip rt/rp as before
        var parent = node.parentNode
        while (parent != null && parent.nodeName.toLowerCase != "body") {
          if (parent.nodeName.toLowerCase == "rt") 
            return Left(NoWordFound)
          parent = parent.parentNode
        }
        val text = node.textContent
        val offset = range.startOffset.asInstanceOf[Int]
        var start = offset
        while (start > 0 && !isWordBoundary(text.charAt(start - 1))) start -= 1
        var end = offset
        while (end < text.length && !isWordBoundary(text.charAt(end))) end += 1
        val word = text.substring(start, end).trim
        Right(WordContext(Word(word), node, offset))
      }
    }
  }
}
  private def collectSurroundingText(
    startNode: dom.Node,
    startOffset: Int,
    maxChars: Int = 400
): String = {
  val walker = dom.document.createTreeWalker(
    dom.document.body,
    dom.NodeFilter.SHOW_TEXT,
    (n: dom.Node) => {
      val parent = n.parentNode
      if (parent == null) dom.NodeFilter.FILTER_ACCEPT
      else {
        val tag = parent.nodeName.toLowerCase
        // Reject furigana (rt, rp), scripts, styles, etc.
        if (tag == "rt" || tag == "rp" || tag == "script" || tag == "style" || tag == "noscript")
          dom.NodeFilter.FILTER_REJECT
        else dom.NodeFilter.FILTER_ACCEPT
      }
    },
    null
  )

  // Start at the clicked text node
  walker.currentNode = startNode

  // 1. Collect backwards (previous nodes in document order)
  var leftParts = List.empty[String]
  var leftLen = 0
  var leftNode = walker.previousNode()
  while (leftNode != null && leftLen < maxChars) {
    val txt = leftNode.textContent
    leftParts = txt :: leftParts   // prepend to keep order
    leftLen += txt.length
    leftNode = walker.previousNode()
  }

  // Reset to the clicked node
  walker.currentNode = startNode

  // 2. Collect forwards (next nodes in document order)
  var rightParts = List.empty[String]
  var rightLen = 0
  var rightNode = walker.nextNode()
  while (rightNode != null && rightLen < maxChars) {
    val txt = rightNode.textContent
    rightParts = rightParts :+ txt   // append
    rightLen += txt.length
    rightNode = walker.nextNode()
  }

  // 3. Split the clicked node’s own text at the offset
  val ownText = startNode.textContent
  val leftOwn = ownText.substring(0, startOffset)
  val rightOwn = ownText.substring(startOffset)

  // Combine in correct order
  leftParts.mkString + leftOwn + rightOwn + rightParts.mkString
}

  private def extractTextWithoutFurigana(node: dom.Node): String =
    if node.nodeName.toLowerCase == "rt" then ""
    else if node.nodeType == dom.Node.TEXT_NODE then node.textContent
    else
      var result = ""
      var child = node.firstChild
      while child != null do
        result += extractTextWithoutFurigana(child)
        child = child.nextSibling
      result
  def trimSentence(word: Word, sentence: String): Either[ValidationError, Sentence] =
    import java.net.URLEncoder
    def encodedLength(s: String): Int =
      URLEncoder.encode(s, "UTF-8").length
    val limit = 200
    if encodedLength(sentence) <= limit then Sentence(sentence)
    else
      val wordIndex = sentence.indexOf(word.value)
      if wordIndex == -1 then Left(EmptySentence)
      else
        var trimmedSentence = sentence
        val wordPos = trimmedSentence.indexOf(word.value)
        if wordPos == -1 then Left(EmptySentence)
        else
          // Drop words from left or right until encoded length fits
          // Always keep the target word
          while encodedLength(trimmedSentence) > limit && trimmedSentence.split(" ").length > 1 do
            val distanceFromLeft = wordPos
            val distanceFromRight = trimmedSentence.length - 1 - wordPos
            if distanceFromLeft >= distanceFromRight then
              trimmedSentence = trimmedSentence.split(" ").tail.mkString(" ")
            else trimmedSentence = trimmedSentence.split(" ").init.mkString(" ")
          Sentence(trimmedSentence)

  def extractSentence(
    word: Word,
    node: dom.Node,
    offset: Int
): Future[Either[AppError, Sentence]] ={
  Future {
    if (node.nodeType != dom.Node.TEXT_NODE) Left(NoWordFound)
    else {
      val fullText = collectSurroundingText(node, offset)
      if (fullText.isEmpty) Left(SentenceBoundaryNotFound)
      else {
        findSentenceContaining(fullText, word.value) match {
          case Some(sentence) => trimSentence(word, sentence)
          case None           => Left(SentenceBoundaryNotFound)
        }
      }
    }
  }
  }
def trimSentence(word: Word, sentence: String): Either[ValidationError, Sentence] = {
  import java.net.URLEncoder

  def encodedLength(s: String): Int = URLEncoder.encode(s, "UTF-8").length

  val target = word.value
  if (!sentence.contains(target)) return Left(EmptySentence)

  var start = 0
  var end = sentence.length
  val targetStart = sentence.indexOf(target)
  val targetEnd = targetStart + target.length

  // Advance the left boundary without cutting a word (if spaces exist)
  def moveLeft(currentStart: Int): Int = {
    if (currentStart >= targetStart) return targetStart
    // If the text contains spaces, jump to the next space
    if (sentence.contains(' ')) {
      val nextSpace = sentence.indexOf(' ', currentStart)
      if (nextSpace != -1 && nextSpace < targetStart) nextSpace + 1
      else currentStart + 1
    } else currentStart + 1
  }

  // Retreat the right boundary without cutting a word (if spaces exist)
  def moveRight(currentEnd: Int): Int = {
    if (currentEnd <= targetEnd) return targetEnd
    if (sentence.contains(' ')) {
      val prevSpace = sentence.lastIndexOf(' ', currentEnd - 1)
      if (prevSpace != -1 && prevSpace > targetEnd) prevSpace
      else currentEnd - 1
    } else currentEnd - 1
  }

  // Trim until the byte length fits, but never remove the target word
  while (encodedLength(sentence.substring(start, end)) > 200 && (start < targetStart || end > targetEnd)) {
    val leftLen = targetStart - start
    val rightLen = end - targetEnd

    if (leftLen >= rightLen) {
      start = moveLeft(start)
    } else {
      end = moveRight(end)
    }

    // Safety guard: if we accidentally trimmed into the target, restore it
    if (start > targetStart) start = targetStart
    if (end < targetEnd) end = targetEnd
  }

  val result = sentence.substring(start, end)
  if (result.isEmpty) Left(EmptySentence)
  else Sentence(result)
}

  def detectLanguage(sentence: Sentence): Future[Either[AppError, Language]] =
    Future {
      // Check page lang attribute first
      val pageLang = dom.document.documentElement
        .asInstanceOf[js.Dynamic]
        .lang
        .asInstanceOf[String]
      // if pageLang != null && pageLang.nonEmpty then Language.fromCode(pageLang.take(2).toLowerCase)
      // else
      // Its better to use detection since the page codec may be in English but the actual content the user is looking at is in another language. Moreover detection will default to auto which will
      // be used by the apis to detect the language in a more sophsiticated manner
      Right(detectByScript(sentence.value))
    }
  // Helpers
  private def isWordBoundary(c: Char): Boolean =
    c == ' ' || c == '\n' || c == '\t' ||
      c == '.' || c == ',' || c == '!' ||
      c == '?' || c == ';' || c == ':' ||
      c == '"' || c == '\'' || c == '(' ||
      c == ')'
  private def findSentenceContaining(
    text: String,
    word: String
  ): Option[String] =
    val wordIndex = text.indexOf(word)
    if wordIndex == -1 then None
    else
      // Walk left to find sentence start
      var start = wordIndex
      while start > 0 && !isSentenceBoundary(text.charAt(start - 1)) do start -= 1
      // Walk right to find sentence end
      var end = wordIndex + word.length
      while end < text.length && !isSentenceBoundary(text.charAt(end)) do end += 1
      val sentence = text.substring(start, end).trim
      if sentence.isEmpty then None
      else Some(sentence)
  private def isSentenceBoundary(c: Char): Boolean =
    c == '.' || c == '!' || c == '?' ||
      c == '。' || c == '！' || c == '？'
  // removed '\n'
  private def detectByScript(text: String): Language =
    val chars = text.take(200)
    if chars.exists(c => c >= '\u0400' && c <= '\u04FF') then KnownLanguage.Russian
    else if chars.exists(c => c >= '\u3040' && c <= '\u30FF') then KnownLanguage.Japanese
    else if chars.exists(c => c >= '\u4E00' && c <= '\u9FFF') then KnownLanguage.Chinese
    else if chars.exists(c => List('\u06AF', '\u0686', '\u067E', '\u0698', '\u06CC', '\u06A9').contains(c)) then
      KnownLanguage.Farsi
    else if chars.exists(c => c >= '\u0600' && c <= '\u06FF') then KnownLanguage.Arabic
    else KnownLanguage.Auto
}
