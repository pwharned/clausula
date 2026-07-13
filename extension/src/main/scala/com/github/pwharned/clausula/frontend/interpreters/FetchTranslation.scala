package com.github.pwharned.clausula.extension.interpreters
import com.github.pwharned.clausula.extension.algebras.*
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
  ): Future[Either[AppError, TranslationResult]] =
    val p = scala.scalajs.js.Promise[Either[AppError, TranslationResult]]((resolve, _) =>
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
            val translatedText = response.result.asInstanceOf[String]
            // Parse detected language if present
            val detectedLang = response.detectedLang match
              case lang if lang == null || lang == js.undefined => None
              case lang => Some(Language.fromDetected(lang.asInstanceOf[String]))
            dom.console.log(
              s"Translation result: ${source.code} to ${target.code} $translatedText, detected: $detectedLang"
            )
            resolve(Right(TranslationResult(translatedText, detectedLang)))
          else
            val error = response.error.asInstanceOf[String]
            dom.console.error(s"Translation error: $error")
            resolve(Left(ApiError(0, error)))
      )
    )
    p.toFuture
