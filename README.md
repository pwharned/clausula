# Clausula

A browser extension for creating Anki cloze deletion cards from text on any webpage. Built for language learners who use sentence mining as part of their study workflow.

## What it does

Hover over any word on a webpage while holding Shift. Clausula extracts the surrounding sentence, generates a cloze deletion card with the word hidden, fetches a translation and audio pronunciation, then sends it directly to Anki.

## Requirements

- [Anki](https://apps.ankiweb.net/)
- [AnkiConnect](https://ankiweb.net/shared/info/2055492159) (Anki add-on code: `2055492159`)
- mpv (for audio playback on Linux)

## Installation

1. Clone the repository
2. Run `sbt frontend/fastLinkJS`
3. Go to `chrome://extensions`
4. Enable Developer Mode
5. Click Load Unpacked and select the `dist` folder

## Usage

- Hold **Shift** and hover over a word to open the popup
- Release **Shift** to freeze the popup
- Click **Create Card** to add it to Anki

Cards are added to your Default deck using the Cloze note type. The sentence forms the front of the card with the target word hidden, and the English translation goes on the back along with audio.

## Building

```bash
sbt frontend/fastLinkJS    # development
sbt frontend/fullLinkJS    # production
```

## Stack

- ScalaJS + Laminar
- AnkiConnect
- Google Translate (unofficial API)
- Google TTS (unofficial API)

## Notes

This extension uses unofficial Google APIs which may break without warning. Cards are deduplicated automatically by AnkiConnect. Currently optimised for learning non-English languages from native content.
