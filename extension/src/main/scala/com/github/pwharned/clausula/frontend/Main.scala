package com.github.pwharned.clausula.extension
import com.github.pwharned.clausula.extension.interpreters.*
import com.github.pwharned.clausula.extension.islands.*
import com.github.pwharned.clausula.extension.domain.*
import com.raquo.laminar.api.L.*
import org.scalajs.dom
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
object Main:

  private def createCard(
    ankiClient: FetchAnkiClient,
    clozeText: ClozeText,
    translation: Option[String],
    audio: Option[String],
    lang: Language
  ): Unit =
    val note = ClozeNote(
      text = clozeText,
      translation = translation,
      audio = audio,
      deck = DeckName.default,
      language = lang,
      tags = List("clausula", lang.code)
    )
    ankiClient
      .addNote(note)
      .foreach:
        case Right(noteId) =>
          dom.console.log(s"Card created: ${noteId.value}")
          AppBus.popupState.set(PopupState.Created(noteId))
        case Left(err) =>
          dom.console.error(s"Failed to create card: $err")
          AppBus.popupState.set(PopupState.Failed(err))
  def main(args: Array[String]): Unit =
    val container = dom.document.createElement("div")
    container.id = "clausula-root"
    dom.document.body.appendChild(container)
    HoverPopupIsland.mount(container)
    val extractor = new DomTextExtraction
    val ankiClient = new FetchAnkiClient
    val translator = new FetchTranslation
    val audio = new FetchAudioGeneration
    // Handle card creation when state changes to Creating
    AppBus.popupState.signal.changes
      .collect { case PopupState.Creating => () }
      .foreach { _ =>
        // Grab the last Preview state to get word/sentence/lang
        AppBus.lastPreview match
          case None =>
            AppBus.popupState.set(PopupState.Failed(NoWordFound))
          case Some(PopupState.Preview(word, sentence, lang, _)) =>
            sentence.toCloze(word) match
              case Left(err) =>
                AppBus.popupState.set(PopupState.Failed(err))
              case Right(clozeText) =>
                // Run translation and audio in parallel
                //
                val result = for {

                  translationSentence <-
                    translator.translate[Sentence](sentence, lang, KnownLanguage.English)
                  detectedLang <- Future(
                    translationSentence.toOption.flatMap(_.detectedLanguage).getOrElse(KnownLanguage.Auto)
                  )
                  translationWord <-
                    translator
                      .translate(
                        word,
                        detectedLang,
                        KnownLanguage.English
                      )
                  finalLang <- Future(
                    detectedLang match
                      case KnownLanguage.Auto =>
                        translationWord.toOption
                          .flatMap(_.detectedLanguage)
                          .getOrElse(KnownLanguage.Auto)
                      case other => other
                  )
                  audioTag <- audio.generate(word, sentence, finalLang)

                } yield for {
                  t <- translationSentence
                  a <- audioTag
                  w <- translationWord
                } yield createCard(
                  ankiClient,
                  clozeText,
                  Some(s"${w.text} : ${t.text}"),
                  Some(a),
                  lang
                )
                result.map {
                  case Left(value)  => AppBus.popupState.set(PopupState.Failed(value))
                  case Right(value) => value
                }

          case null => ()
      }(using unsafeWindowOwner)
    // Mouse hover handler
    dom.document.addEventListener(
      "mouseup",
      (event: dom.MouseEvent) =>
        val target = event.target.asInstanceOf[dom.Element]
        if target.closest("#clausula-root") != null then ()
        else
          AppBus.popupState.now() match
            case PopupState.Creating   => ()
            case PopupState.Created(_) => ()
            case _ =>
              val selection = dom.window.getSelection()
              if selection == null || selection.toString.trim.isEmpty then AppBus.popupState.set(PopupState.Hidden)
              else
                val selectedText = selection.toString.trim
                val node = selection.anchorNode
                Word(selectedText) match
                  case Left(_) => AppBus.popupState.set(PopupState.Hidden)
                  case Right(word) =>
                    extractor
                      .extractSentence(word, node)
                      .foreach:
                        case Left(_) =>
                          AppBus.popupState.set(PopupState.Hidden)
                        case Right(sentence) =>
                          extractor
                            .detectLanguage(sentence)
                            .foreach:
                              case Left(_) =>
                                AppBus.popupState.set(PopupState.Hidden)
                              case Right(lang) =>
                                val preview: PopupState.Preview = PopupState.Preview(
                                  word,
                                  sentence,
                                  lang,
                                  (event.clientX, event.clientY)
                                )
                                AppBus.position.set((event.clientX, event.clientY))
                                AppBus.lastPreview = Some(preview)
                                AppBus.popupState.set(preview)
    )
