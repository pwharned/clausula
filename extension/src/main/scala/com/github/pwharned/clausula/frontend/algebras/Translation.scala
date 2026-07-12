package com.github.pwharned.clausula.extension.algebras
import com.github.pwharned.clausula.extension.domain.*
trait Translation[F[_]]:
  def translate(
    text: Sentence,
    source: Language,
    target: Language
  ): F[Either[AppError, String]]
