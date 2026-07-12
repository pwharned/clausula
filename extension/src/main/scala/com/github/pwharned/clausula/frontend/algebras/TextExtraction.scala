package com.github.pwharned.clausula.extension.algebras
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
trait TextExtraction[F[_]]:
  def extractWord(event: dom.MouseEvent): F[Either[AppError, Word]]
  def extractSentence(word: Word, node: dom.Node): F[Either[AppError, Sentence]]
  def detectLanguage(sentence: Sentence): F[Either[AppError, Language]]
