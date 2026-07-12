package com.github.pwharned.clausula.extension.interpreters
import com.github.pwharned.clausula.extension.algebras.AnkiClient
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js
import scala.scalajs.js.JSON
class FetchAnkiClient extends AnkiClient[Future]:
  private def post(body: js.Object): Future[Either[AppError, js.Dynamic]] =
    val p = scala.scalajs.js.Promise[Either[AppError, js.Dynamic]]((resolve, _) =>
      val message = js.Dynamic.literal(
        `type` = "ANKI_REQUEST",
        payload = body
      )
      js.Dynamic.global.chrome.runtime.sendMessage(
        message,
        (response: js.Dynamic) =>
          // Check for chrome runtime errors first
          val lastError = js.Dynamic.global.chrome.runtime.lastError
          if lastError != null && lastError != js.undefined then
            dom.console.error(s"Chrome runtime error: ${lastError.message}")
            resolve(Left(AnkiNotRunning))
          else if response == null || response == js.undefined then resolve(Left(AnkiNotRunning))
          else if response.success.asInstanceOf[Boolean] then
            dom.console.log(s"AnkiConnect response: ${JSON.stringify(response.data.asInstanceOf[js.Any])}")
            resolve(Right(response.data))
          else
            dom.console.error(s"AnkiConnect failed: ${response.error}")
            resolve(Left(AnkiNotRunning))
      )
    )
    p.toFuture
  def checkConnection: Future[Either[AppError, Unit]] =
    val body = js.Dynamic.literal(
      action = "version",
      version = 6
    )
    post(body).map(_.map(_ => ()))
  def getDecks: Future[Either[AppError, List[DeckName]]] =
    val body = js.Dynamic.literal(
      action = "deckNames",
      version = 6
    )
    post(body).map:
      case Left(err) => Left(err)
      case Right(response) =>
        val decks = response.result
          .asInstanceOf[js.Array[String]]
          .toList
          .map(DeckName.apply)
        Right(decks)
  def addNote(note: ClozeNote): Future[Either[AppError, NoteId]] =
    val fields = js.Dynamic.literal(
      Text = note.text.value + note.audio.getOrElse(""),
      Translation = note.translation.getOrElse("")
    )
    val noteObj = js.Dynamic.literal(
      deckName = note.deck.value,
      modelName = "Cloze",
      fields = fields,
      tags = js.Array(note.tags*)
    )
    val body = js.Dynamic.literal(
      action = "addNote",
      version = 6,
      params = js.Dynamic.literal(note = noteObj)
    )
    post(body).map:
      case Left(err) => Left(err)
      case Right(response) =>
        val error = response.error
        if error == null || error == js.undefined
        then Right(NoteId(response.result.asInstanceOf[Double].toLong))
        else
          val msg = error.asInstanceOf[String]
          dom.console.error(s"AnkiConnect error: $msg")
          Left(ApiError(0, msg))
