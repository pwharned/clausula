package com.github.pwharned.clausula.extension.interpreters
import com.github.pwharned.clausula.extension.algebras.AudioGeneration
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js
class FetchAudioGeneration extends AudioGeneration[Future]:
  def generate(
    word: Word,
    sentence: Sentence,
    language: Language
  ): Future[Either[AppError, String]] =
    val p = scala.scalajs.js.Promise[Either[AppError, String]]((resolve, _) =>
      val message = js.Dynamic.literal(
        `type` = "AUDIO_REQUEST",
        word = word.value,
        sentence = sentence.value,
        lang = language.code
      )
      js.Dynamic.global.chrome.runtime.sendMessage(
        message,
        (response: js.Dynamic) =>
          val lastError = js.Dynamic.global.chrome.runtime.lastError
          if lastError != null && lastError != js.undefined then
            val message =
              s"Audio runtime error: ${lastError.message} for {${word.value}, ${sentence.value} ${language.displayName} "
            dom.console.error(message)
            resolve(Left(ApiError(0, message)))
          else if response == null || response == js.undefined then
            resolve(
              Left(
                ApiError(
                  0,
                  s"No response from background worker  for {${word.value}, ${sentence.value} ${language.displayName} "
                )
              )
            )
          else if response.success.asInstanceOf[Boolean] then
            val filename = response.filename.asInstanceOf[String]
            dom.console.log(s"Audio stored: $filename")
            // Anki sound tag format
            resolve(Right(s"[sound:$filename]"))
          else
            val error = response.error.asInstanceOf[String]
            dom.console.error(
              s"Audio error: for {${word.value}, ${sentence.value}: ${language.displayName} : ${error} "
            )
            resolve(Left(ApiError(0, error)))
      )
    )
    p.toFuture
