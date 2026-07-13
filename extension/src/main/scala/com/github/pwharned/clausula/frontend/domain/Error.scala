package com.github.pwharned.clausula.extension.domain
sealed trait AppError
sealed trait ExtractionError extends AppError
case object NoWordFound extends ExtractionError
case object SentenceBoundaryNotFound extends ExtractionError
case class DomTraversalError(msg: String) extends ExtractionError
sealed trait TranslationError extends AppError
case object RateLimited extends TranslationError

case object UnsupportedLanguage extends TranslationError
case class ApiError(code: Int, msg: String) extends TranslationError
sealed trait AnkiError extends AppError
case object AnkiNotRunning extends AnkiError
case object DuplicateNote extends AnkiError
sealed trait ValidationError extends AppError
case object EmptyWord extends ValidationError
case object EmptySentence extends ValidationError
