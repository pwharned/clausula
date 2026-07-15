package com.github.pwharned.clausula.extension.interpreters
import com.github.pwharned.clausula.extension.algebras.TextExtraction
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js
class DomTextExtraction extends TextExtraction[Future] {

  def extractWord(event: dom.MouseEvent): Future[Either[AppError, Word]] =
    Future {
      val doc = dom.document.asInstanceOf[js.Dynamic]
      val range = doc.caretRangeFromPoint(event.clientX, event.clientY)
      if range == null || range == js.undefined then Left(NoWordFound)
      else
        val node = range.startContainer.asInstanceOf[dom.Node]
        if node.nodeType != dom.Node.TEXT_NODE then Left(NoWordFound)
        else
          // Check if we are inside an rt element and skip it
          var parent = node.parentNode
          while parent != null && parent.nodeName.toLowerCase != "body" do
            if parent.nodeName.toLowerCase == "rt" then return Future.successful(Left(NoWordFound))
            parent = parent.parentNode
          val text = node.textContent
          val offset = range.startOffset.asInstanceOf[Int]
          var start = offset
          while start > 0 && !isWordBoundary(text.charAt(start - 1)) do start -= 1
          var end = offset
          while end < text.length && !isWordBoundary(text.charAt(end)) do end += 1
          val word = text.substring(start, end).trim
          Word(word)
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
    if sentence.length <= 200 then Sentence(sentence)
    else
      val wordIndex = sentence.indexOf(word.value)
      if wordIndex == -1 then Left(EmptySentence)
      else
        // Center the window around the word
        val halfWindow = 100
        val rawStart = (wordIndex - halfWindow).max(0)
        val rawEnd = (wordIndex + word.length + halfWindow).min(sentence.length)
        // Walk right from rawStart to find a complete word boundary
        val start =
          if rawStart == 0 then 0
          else sentence.indexOf(' ', rawStart) + 1
        // Walk left from rawEnd to find a complete word boundary
        val end =
          if rawEnd == sentence.length then sentence.length
          else sentence.lastIndexOf(' ', rawEnd)
        val trimmed = sentence.substring(start, end).trim
        Sentence(trimmed)

  def extractSentence(
    word: Word,
    node: dom.Node
  ): Future[Either[AppError, Sentence]] =
    Future {
      // Use furigana-stripped text instead of raw textContent
      val text = extractTextWithoutFurigana(node)
      if text == null || text.isEmpty then Left(SentenceBoundaryNotFound)
      else
        findSentenceContaining(text, word.value) match
          case Some(sentence) => trimSentence(word, sentence)
          case None =>
            val parentText = node.parentNode match
              case null   => text
              case parent => extractTextWithoutFurigana(parent)
            findSentenceContaining(parentText, word.value) match
              case Some(sentence) => trimSentence(word, sentence)
              case None           => Left(SentenceBoundaryNotFound)
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
