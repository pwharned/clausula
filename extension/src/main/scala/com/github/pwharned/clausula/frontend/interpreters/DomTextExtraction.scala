package com.github.pwharned.clausula.extension.interpreters
import com.github.pwharned.clausula.extension.algebras.TextExtraction
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js
import org.scalajs.dom.NodeFilter
import org.scalajs.dom.Node
case class WordContext(word: Word, node: dom.Node, offset: Int)
class DomTextExtraction extends TextExtraction[Future]:
  def extractWord(event: dom.MouseEvent): Future[Either[AppError, WordContext]] =
    Future {
      val doc = dom.document.asInstanceOf[js.Dynamic]
      val range = doc.caretRangeFromPoint(event.clientX, event.clientY)
      if range == null || range == js.undefined then Left(NoWordFound)
      else
        val node = range.startContainer.asInstanceOf[dom.Node]
        if node.nodeType != dom.Node.TEXT_NODE then Left(NoWordFound)
        else
          // Skip rt/rp elements
          var parent = node.parentNode
          var inRuby = false
          while parent != null && parent.nodeName.toLowerCase != "body" do
            if parent.nodeName.toLowerCase == "rt" then inRuby = true
            parent = parent.parentNode
          if inRuby then Left(NoWordFound)
          else
            val text = node.textContent
            val offset = range.startOffset.asInstanceOf[Int]
            var start = offset
            while start > 0 && !isWordBoundary(text.charAt(start - 1)) do start -= 1
            var end = offset
            while end < text.length && !isWordBoundary(text.charAt(end)) do end += 1
            val wordStr = text.substring(start, end).trim
            Word(wordStr) match
              case Left(err)   => Left(err)
              case Right(word) => Right(WordContext(word, node, offset))
    }
  private def collectSurroundingText(
    startNode: dom.Node,
    startOffset: Int,
    maxChars: Int = 400
  ): String =
    // Pass filter as js.Dynamic function literal instead of extending NodeFilter
    val filter = js.Dynamic
      .literal(
        acceptNode = (n: dom.Node) => {
          val parent = n.parentNode
          if parent == null then dom.NodeFilter.FILTER_ACCEPT
          else
            val tag = parent.nodeName.toLowerCase
            if tag == "rt" || tag == "rp" || tag == "script" ||
              tag == "style" || tag == "noscript"
            then dom.NodeFilter.FILTER_REJECT
            else dom.NodeFilter.FILTER_ACCEPT
        }
      )
      .asInstanceOf[dom.NodeFilter]
    val walker = dom.document.createTreeWalker(
      dom.document.body,
      dom.NodeFilter.SHOW_TEXT,
      filter,
      false
    )

    walker.currentNode = startNode
    var leftParts = List.empty[String]
    var leftLen = 0
    var leftNode = walker.previousNode()
    while leftNode != null && leftLen < maxChars do
      val txt = leftNode.textContent
      leftParts = txt :: leftParts
      leftLen += txt.length
      leftNode = walker.previousNode()
    walker.currentNode = startNode
    var rightParts = List.empty[String]
    var rightLen = 0
    var rightNode = walker.nextNode()
    while rightNode != null && rightLen < maxChars do
      val txt = rightNode.textContent
      rightParts = rightParts :+ txt
      rightLen += txt.length
      rightNode = walker.nextNode()
    val ownText = startNode.textContent
    val leftOwn = ownText.substring(0, startOffset)
    val rightOwn = ownText.substring(startOffset)
    leftParts.mkString + leftOwn + rightOwn + rightParts.mkString
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
    def encodedLength(s: String): Int = URLEncoder.encode(s, "UTF-8").length
    val target = word.value
    if !sentence.contains(target) then Left(EmptySentence)
    else if encodedLength(sentence) <= 200 then Sentence(sentence)
    else
      var start = 0
      var end = sentence.length
      val targetStart = sentence.indexOf(target)
      val targetEnd = targetStart + target.length
      def moveLeft(currentStart: Int): Int =
        if currentStart >= targetStart then targetStart
        else if sentence.contains(' ') then
          val nextSpace = sentence.indexOf(' ', currentStart)
          if nextSpace != -1 && nextSpace < targetStart then nextSpace + 1
          else currentStart + 1
        else currentStart + 1
      def moveRight(currentEnd: Int): Int =
        if currentEnd <= targetEnd then targetEnd
        else if sentence.contains(' ') then
          val prevSpace = sentence.lastIndexOf(' ', currentEnd - 1)
          if prevSpace != -1 && prevSpace > targetEnd then prevSpace
          else currentEnd - 1
        else currentEnd - 1
      while encodedLength(sentence.substring(start, end)) > 200 &&
        (start < targetStart || end > targetEnd)
      do
        val leftLen = targetStart - start
        val rightLen = end - targetEnd
        if leftLen >= rightLen then start = moveLeft(start)
        else end = moveRight(end)
        if start > targetStart then start = targetStart
        if end < targetEnd then end = targetEnd
      val result = sentence.substring(start, end)
      if result.isEmpty then Left(EmptySentence)
      else Sentence(result)
  def extractSentence(
    word: Word,
    node: dom.Node,
    offset: Int
  ): Future[Either[AppError, Sentence]] =
    Future {
      if node.nodeType != dom.Node.TEXT_NODE then Left(NoWordFound)
      else
        val fullText = collectSurroundingText(node, offset)
        if fullText.isEmpty then Left(SentenceBoundaryNotFound)
        else
          findSentenceContaining(fullText, word.value) match
            case Some(sentence) => trimSentence(word, sentence)
            case None           => Left(SentenceBoundaryNotFound)
    }
  def detectLanguage(sentence: Sentence): Future[Either[AppError, Language]] =
    Future {
      Right(detectByScript(sentence.value))
    }
  private def isWordBoundary(c: Char): Boolean =
    c == ' ' || c == '\n' || c == '\t' ||
      c == '.' || c == ',' || c == '!' ||
      c == '?' || c == ';' || c == ':' ||
      c == '"' || c == '\'' || c == '(' ||
      c == ')'
  private def findSentenceContaining(text: String, word: String): Option[String] =
    val wordIndex = text.indexOf(word)
    if wordIndex == -1 then None
    else
      var start = wordIndex
      while start > 0 && !isSentenceBoundary(text.charAt(start - 1)) do start -= 1
      var end = wordIndex + word.length
      while end < text.length && !isSentenceBoundary(text.charAt(end)) do end += 1
      val sentence = text.substring(start, end).trim
      if sentence.isEmpty then None
      else Some(sentence)
  private def isSentenceBoundary(c: Char): Boolean =
    c == '.' || c == '!' || c == '?' ||
      c == '。' || c == '！' || c == '？'
  private def detectByScript(text: String): Language =
    val chars = text.take(200)
    if chars.exists(c => c >= '\u0400' && c <= '\u04FF') then KnownLanguage.Russian
    else if chars.exists(c => c >= '\u3040' && c <= '\u30FF') then KnownLanguage.Japanese
    else if chars.exists(c => c >= '\u4E00' && c <= '\u9FFF') then KnownLanguage.Chinese
    else if chars.exists(c => List('\u06AF', '\u0686', '\u067E', '\u0698', '\u06CC', '\u06A9').contains(c)) then
      KnownLanguage.Farsi
    else if chars.exists(c => c >= '\u0600' && c <= '\u06FF') then KnownLanguage.Arabic
    else KnownLanguage.Auto
