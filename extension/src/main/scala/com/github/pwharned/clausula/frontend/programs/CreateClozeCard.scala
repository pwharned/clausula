package com.github.pwharned.clausula.extension.programs
import com.github.pwharned.clausula.extension.algebras.*
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
def createClozeCard[F[_]: cats.Monad](
  event: dom.MouseEvent,
  targetLanguage: Language,
  deck: DeckName
)(using
  extraction: TextExtraction[F],
  translation: Translation[F],
  anki: AnkiClient[F],
  audio: AudioGeneration[F]
): F[Either[AppError, NoteId]] =
  import cats.syntax.all.*
  for
    wordResult <- extraction.extractWord(event)
    sentenceResult <- wordResult.fold(
      err => cats.Monad[F].pure(Left(err)),
      word => extraction.extractSentence(word, event.target.asInstanceOf[dom.Node])
    )
    langResult <- sentenceResult.fold(
      err => cats.Monad[F].pure(Left(err)),
      sentence => extraction.detectLanguage(sentence)
    )
    result <- (wordResult, sentenceResult, langResult).tupled.fold(
      err => cats.Monad[F].pure(Left(err)),
      (word, sentence, lang) =>
        for
          translationResult <- translation.translate(sentence, lang, targetLanguage)
          audioResult <- audio.generate(word, sentence, lang)
          noteResult <- translationResult.fold(
            err => cats.Monad[F].pure(Left(err)),
            translated =>
              sentence
                .toCloze(word)
                .fold(
                  err => cats.Monad[F].pure(Left(err)),
                  clozeText =>
                    anki.addNote(
                      ClozeNote(
                        text = clozeText,
                        translation = Some(translated),
                        audio = audioResult.toOption,
                        deck = deck,
                        language = lang,
                        tags = List(lang.code)
                      )
                    )
                )
          )
        yield noteResult
    )
  yield result
