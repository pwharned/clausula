package com.github.pwharned.clausula.extension.domain

trait ToText[A]:
  def value(a: A): String
