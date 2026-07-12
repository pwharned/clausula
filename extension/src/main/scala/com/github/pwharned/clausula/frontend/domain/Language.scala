package com.github.pwharned.clausula.extension.domain
sealed trait SentenceStrategy
case object LatinStrategy extends SentenceStrategy
case object CJKStrategy extends SentenceStrategy
case object RTLStrategy extends SentenceStrategy
enum Language(
  val code: String,
  val displayName: String,
  val isRTL: Boolean,
  val sentenceStrategy: SentenceStrategy
):
  case English extends Language("en", "English", false, LatinStrategy)
  case Russian extends Language("ru", "Russian", false, LatinStrategy)
  case French extends Language("fr", "French", false, LatinStrategy)
  case German extends Language("de", "German", false, LatinStrategy)
  case Spanish extends Language("es", "Spanish", false, LatinStrategy)
  case Japanese extends Language("ja", "Japanese", false, CJKStrategy)
  case Chinese extends Language("zh", "Chinese", false, CJKStrategy)
  case Arabic extends Language("ar", "Arabic", true, RTLStrategy)
  case Farsi extends Language("fa", "Farsi", true, RTLStrategy)
  case Auto extends Language("auto", "Auto", false, LatinStrategy)
object Language:
  def fromCode(code: String): Either[AppError, Language] =
    Language.values
      .find(_.code == code)
      .toRight(UnsupportedLanguage)
