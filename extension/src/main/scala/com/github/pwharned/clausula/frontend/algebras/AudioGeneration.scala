package com.github.pwharned.clausula.extension.algebras
import com.github.pwharned.clausula.extension.domain.*
trait AudioGeneration[F[_]]:
  def generate(word: Word, sentence: Sentence, language: Language): F[Either[AppError, String]]
