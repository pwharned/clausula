package com.github.pwharned.clausula.extension.algebras
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
import com.github.pwharned.clausula.`extension`.interpreters.WordContext
trait TextExtraction[F[_]]:
  def extractWord(event: dom.MouseEvent): F[Either[AppError, WordContext]]
  def extractSentence(word: Word, node: dom.Node, offset: Int): F[Either[AppError, Sentence]]
  def detectLanguage(sentence: Sentence): F[Either[AppError, Language]]
