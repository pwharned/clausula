package com.github.pwharned.clausula.extension.islands
import com.raquo.laminar.api.L.*
import com.github.pwharned.clausula.extension.*
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
import scala.concurrent.ExecutionContext.Implicits.global
object HoverPopupIsland:
  def mount(container: dom.Element): Unit =
    val island = div(
      // Position popup based on state
      position := "fixed",
      zIndex := "999999",
      left <-- AppBus.position.signal.map((x, _) => s"${x}px"),
      top <-- AppBus.position.signal.map((_, y) => s"${y + 20}px"),
      display <-- AppBus.popupState.signal.map:
        case PopupState.Hidden => "none"
        case _                 => "block",
      // Content based on state
      child <-- AppBus.popupState.signal.map:
        case PopupState.Hidden  => emptyNode
        case PopupState.Loading => loadingView
        case PopupState.Preview(word, sentence, lang, _) =>
          previewView(word, sentence, lang)
        case PopupState.Creating        => creatingView
        case PopupState.Created(noteId) => createdView(noteId)
        case PopupState.Failed(error)   => errorView(error)
    )
    render(container, island)
  private def loadingView: HtmlElement =
    div(
      cls := "clausula-popup",
      p("Extracting...")
    )
  private def previewView(
    word: Word,
    sentence: Sentence,
    lang: Language
  ): HtmlElement =
    div(
      cls := "clausula-popup",
      div(cls := "clausula-hint", "Release shift to freeze"),
      div(
        cls := "clausula-word",
        strong(word.value)
      ),
      div(
        cls := "clausula-sentence",
        // Highlight the word within the sentence
        renderHighlightedSentence(sentence, word)
      ),
      div(
        cls := "clausula-lang",
        s"Language: ${lang.displayName}"
      ),
      div(
        cls := "clausula-actions",
        button(
          cls := "clausula-btn-create",
          "Create Card",
          onClick --> (_ => AppBus.popupState.set(PopupState.Creating))
        ),
        button(
          cls := "clausula-btn-dismiss",
          "Dismiss",
          onClick --> (_ => AppBus.popupState.set(PopupState.Hidden))
        )
      )
    )
  private def renderHighlightedSentence(
    sentence: Sentence,
    word: Word
  ): HtmlElement =
    val escapedWord = java.util.regex.Pattern.quote(word.value)
    val parts = sentence.value.split(escapedWord)
    p(
      cls := "clausula-sentence-text",
      parts.zipWithIndex.flatMap: (part, i) =>
        if i < parts.length - 1
        then List(span(part), mark(word.value))
        else List(span(part))
    )
  private def creatingView: HtmlElement =
    div(
      cls := "clausula-popup",
      p("Creating card...")
    )
  private def createdView(noteId: NoteId): HtmlElement =
    div(
      cls := "clausula-popup clausula-success",
      p("✓ Card created!"),
      button(
        cls := "clausula-btn-dismiss",
        "Close",
        onClick --> (_ => AppBus.popupState.set(PopupState.Hidden))
      )
    )
  private def errorView(error: AppError): HtmlElement =
    div(
      cls := "clausula-popup clausula-error",
      p(s"Error: ${errorMessage(error)}"),
      button(
        cls := "clausula-btn-dismiss",
        "Close",
        onClick --> (_ => AppBus.popupState.set(PopupState.Hidden))
      )
    )
  private def errorMessage(error: AppError): String = error match
    case AnkiNotRunning           => "Anki is not running"
    case NoWordFound              => "No word found"
    case SentenceBoundaryNotFound => "Could not extract sentence"
    case UnsupportedLanguage      => "Unsupported language"
    case DuplicateNote            => "Card already exists"
    case ApiError(_, msg)         => msg
    case other                    => other.toString
