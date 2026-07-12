package com.github.pwharned.clausula.extension.domain
opaque type Sentence = String
object Sentence:
  def apply(s: String): Either[ValidationError, Sentence] =
    Either.cond(s.trim.nonEmpty, s.trim, EmptySentence)
  def unsafe(s: String): Sentence = s
  extension (s: Sentence)
    def value: String = s
    def contains(w: Word): Boolean = s.contains(w.value)
    def toCloze(w: Word): Either[AppError, ClozeText] =
      if s.contains(w.value)
      then Right(ClozeText.unsafe(s.replace(w.value, s"{{c1::${w.value}}}")))
      else Left(NoWordFound)
