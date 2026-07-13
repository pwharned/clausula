package com.github.pwharned.clausula.extension.domain

case class TranslationResult(
  text: String,
  detectedLanguage: Option[Language]
)
