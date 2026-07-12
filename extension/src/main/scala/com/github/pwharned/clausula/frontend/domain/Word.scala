package com.github.pwharned.clausula.extension.domain
opaque type Word = String
object Word:
  def apply(s: String): Either[ValidationError, Word] =
    Either.cond(s.trim.nonEmpty, s.trim, EmptyWord)
  def unsafe(s: String): Word = s
  extension (w: Word)
    def value: String = w
    def length: Int = w.length
