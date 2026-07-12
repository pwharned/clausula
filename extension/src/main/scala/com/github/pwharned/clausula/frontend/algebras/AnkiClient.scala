package com.github.pwharned.clausula.extension.algebras
import com.github.pwharned.clausula.extension.domain.*
trait AnkiClient[F[_]]:
  def addNote(note: ClozeNote): F[Either[AppError, NoteId]]
  def getDecks: F[Either[AppError, List[DeckName]]]
  def checkConnection: F[Either[AppError, Unit]]
