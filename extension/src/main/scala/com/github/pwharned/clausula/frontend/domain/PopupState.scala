package com.github.pwharned.clausula.extension
import com.github.pwharned.clausula.extension.domain.*
enum PopupState:
  case Hidden
  case Loading
  case Preview(
    word: Word,
    sentence: Sentence,
    language: Language,
    position: (Double, Double)
  )
  case Creating
  case Created(noteId: NoteId)
  case Failed(error: AppError)
