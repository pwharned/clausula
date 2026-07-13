package com.github.pwharned.clausula.extension.algebras
import com.github.pwharned.clausula.extension.domain.*

trait Translation[F[_]]:
  def translate[A](
    text: A,
    source: Language,
    target: Language
  )(using t: ToText[A]): F[Either[AppError, TranslationResult]]
