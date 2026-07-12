package com.github.pwharned.clausula.extension.domain
opaque type ClozeText = String
opaque type NoteId = Long
opaque type DeckName = String
object ClozeText:
  def unsafe(s: String): ClozeText = s
  extension (c: ClozeText) def value: String = c
object NoteId:
  def apply(l: Long): NoteId = l
  extension (n: NoteId) def value: Long = n
object DeckName:
  def apply(s: String): DeckName = s
  def default: DeckName = "Default"
  extension (d: DeckName) def value: String = d
case class ClozeNote(
  text: ClozeText,
  translation: Option[String],
  audio: Option[String],
  deck: DeckName,
  language: Language,
  tags: List[String]
)
