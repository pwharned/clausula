package com.github.pwharned.clausula.extension.domain
sealed trait SentenceStrategy
case object LatinStrategy extends SentenceStrategy
case object CJKStrategy extends SentenceStrategy
case object RTLStrategy extends SentenceStrategy

sealed trait Language:
  val code: String
  val displayName: String
  val isRTL: Boolean
  val sentenceStrategy: SentenceStrategy
enum KnownLanguage(
  val code: String,
  val displayName: String,
  val isRTL: Boolean,
  val sentenceStrategy: SentenceStrategy
) extends Language:
  case English extends KnownLanguage("en", "English", false, LatinStrategy)
  case Russian extends KnownLanguage("ru", "Russian", false, LatinStrategy)
  case French extends KnownLanguage("fr", "French", false, LatinStrategy)
  case German extends KnownLanguage("de", "German", false, LatinStrategy)
  case Spanish extends KnownLanguage("es", "Spanish", false, LatinStrategy)
  case Japanese extends KnownLanguage("ja", "Japanese", false, CJKStrategy)
  case Chinese extends KnownLanguage("zh", "Chinese", false, CJKStrategy)
  case Arabic extends KnownLanguage("ar", "Arabic", true, RTLStrategy)
  case Farsi extends KnownLanguage("fa", "Farsi", true, RTLStrategy)
  case Latin extends KnownLanguage("la", "Latin", false, LatinStrategy)
  case Hebrew extends KnownLanguage("he", "Hebrew", true, RTLStrategy)
  case Auto extends KnownLanguage("auto", "Auto", false, LatinStrategy)
case class DetectedLanguage(code: String) extends Language:
  val displayName = code
  val isRTL = false
  val sentenceStrategy = LatinStrategy
object Language:
  def fromCode(code: String): Either[AppError, Language] =
    KnownLanguage.values
      .find(_.code == code)
      .toRight(UnsupportedLanguage)
  def fromDetected(code: String): Language =
    KnownLanguage.values
      .find(_.code == code)
      .getOrElse(DetectedLanguage(code))
