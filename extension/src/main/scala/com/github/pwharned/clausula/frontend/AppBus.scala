package com.github.pwharned.clausula.extension
import com.raquo.laminar.api.L.*
import com.github.pwharned.clausula.extension.domain.*
enum ExtensionEvent:
  case WordHovered(word: Word, position: (Double, Double))
  case SentenceExtracted(sentence: Sentence)
  case TranslationReceived(text: String)
  case CardCreated(noteId: NoteId)
  case ErrorOccurred(error: AppError)
enum ExtensionStatus:
  case Idle
  case Loading
  case Success(noteId: NoteId)
  case Failed(error: AppError)
object AppBus:
  val events: EventBus[ExtensionEvent] = new EventBus
  val status: Var[ExtensionStatus] = Var(ExtensionStatus.Idle)
  val popupState: Var[PopupState] = Var(PopupState.Hidden)

  val position: Var[(Double, Double)] = Var((0.0, 0.0))

  var lastPreview: Option[PopupState.Preview] = None
