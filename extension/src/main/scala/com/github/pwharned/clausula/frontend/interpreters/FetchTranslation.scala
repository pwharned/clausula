package com.github.pwharned.clausula.extension.interpreters
import com.github.pwharned.clausula.extension.algebras.Translation
import com.github.pwharned.clausula.extension.domain.*
import org.scalajs.dom
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js
class FetchTranslation extends Translation[Future]:
  def translate(
    text: Sentence,
    source: Language,
    target: Language
  ): Future[Either[AppError, String]] =
    val p = scala.scalajs.js.Promise[Either[AppError, String]]((resolve, _) =>
      val message = js.Dynamic.literal(
        `type` = "TRANSLATE_REQUEST",
        text = text.value,
        langSrc = source.code,
        langTgt = target.code
      )
      js.Dynamic.global.chrome.runtime.sendMessage(
        message,
        (response: js.Dynamic) =>
          val lastError = js.Dynamic.global.chrome.runtime.lastError
          if lastError != null && lastError != js.undefined then
            dom.console.error(s"Translation runtime error: ${lastError.message}")
            resolve(Left(ApiError(0, lastError.message.asInstanceOf[String])))
          else if response == null || response == js.undefined then
            resolve(Left(ApiError(0, "No response from background worker")))
          else if response.success.asInstanceOf[Boolean] then
            val result = response.result.asInstanceOf[String]
            dom.console.log(s"Translation result: of  ${source.code} to ${target.code}  $result")
            resolve(Right(result))
          else
            val error = response.error.asInstanceOf[String]
            dom.console.error(s"Translation error: $error")
            resolve(Left(ApiError(0, error)))
      )
    )
    p.toFuture
