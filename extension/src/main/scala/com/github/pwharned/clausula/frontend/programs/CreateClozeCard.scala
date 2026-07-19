package com.github.pwharned.clausula.extension.programs
import com.github.pwharned.clausula.extension.algebras.*
import com.github.pwharned.clausula.extension.domain.*
import com.github.pwharned.clausula.extension.interpreters.WordContext
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
    contextResult <- extraction.extractWord(event)
    sentenceResult <- contextResult.fold(
      err => cats.Monad[F].pure(Left(err)),
      ctx => extraction.extractSentence(ctx.word, ctx.node, ctx.offset)
    )
    langResult <- sentenceResult.fold(
      err => cats.Monad[F].pure(Left(err)),
      sentence => extraction.detectLanguage(sentence)
    )
    result <- contextResult.fold(
      err => cats.Monad[F].pure(Left(err)),
      ctx =>
        sentenceResult.fold(
          err => cats.Monad[F].pure(Left(err)),
          sentence =>
            langResult.fold(
              err => cats.Monad[F].pure(Left(err)),
              lang =>
                for
                  translationResult <- translation.translate(sentence, lang, targetLanguage)
                  audioResult <- audio.generate(ctx.word, sentence, lang)
                  noteResult <- translationResult.fold(
                    err => cats.Monad[F].pure(Left(err)),
                    translated =>
                      sentence
                        .toCloze(ctx.word)
                        .fold(
                          err => cats.Monad[F].pure(Left(err)),
                          clozeText =>
                            anki.addNote(
                              ClozeNote(
                                text = clozeText,
                                translation = Some(translated.text),
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
        )
    )
  yield result
