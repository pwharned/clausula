function packageRpc(text, langSrc, langTgt) {
  const parameter = [[text.trim(), langSrc, langTgt, true], [1]]
  const escapedParameter = JSON.stringify(parameter)
  const rpc = [[["MkEWBc", escapedParameter, null, "generic"]]]
  const escapedRpc = JSON.stringify(rpc)
  return `f.req=${encodeURIComponent(escapedRpc)}&`
}
async function fetchAudio(word, sentence, lang) {
  const encodedSentence = encodeURIComponent(sentence)
  const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&q=${encodedSentence}&tl=${lang}&client=tw-ob`
  console.log(url)
  const response = await fetch(url, {
    headers: {
      "Referer": "https://translate.google.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36"
    }
  })
  if (!response.ok) {
     const errorBody = await response.text()

    throw new Error(`TTS request failed: ${response.status} - ${url}`)
  }
  // Convert audio to base64
  const buffer     = await response.arrayBuffer()
  const bytes      = new Uint8Array(buffer)
  const binary     = bytes.reduce((acc, b) => acc + String.fromCharCode(b), '')
  const base64     = btoa(binary)
  return base64
}
// Update the TRANSLATE_REQUEST handler
async function hashText(text) {
  const encoder    = new TextEncoder()
  const data       = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray  = Array.from(new Uint8Array(hashBuffer))
  const hashHex    = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  // Take first 16 chars, enough to avoid collisions
  return hashHex.slice(0, 16)
}
async function storeAudioInAnki(word, sentence, lang, base64Audio) {
  const text     = sentence.length <= 200 ? sentence : word
  const hash     = await hashText(text)
  const filename = `clausula_${lang}_${hash}.mp3`
  console.log("Storing audio as:", filename)
  const response = await fetch("http://localhost:8765", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action:  "storeMediaFile",
      version: 6,
      params: {
        filename: filename,
        data:    base64Audio
      }
    })
  })
  const data = await response.json()
  if (data.error) throw new Error(data.error)
  return filename
}
// Add to existing message listener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "ANKI_REQUEST") {
    fetch("http://localhost:8765", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(message.payload)
    })
    .then(r => r.json())
    .then(data => sendResponse({ success: true, data }))
    .catch(err => sendResponse({ success: false, error: err.toString() }))
    return true
  }

if (message.type === "TRANSLATE_REQUEST") {
  translateText(message.text, message.langSrc, message.langTgt)
    .then(result => {
      if (result) sendResponse({ 
        success:      true, 
        result:       result.translation,
        detectedLang: result.detectedLang
      })
      else sendResponse({ success: false, error: "Could not parse translation" })
    })
    .catch(err => sendResponse({ success: false, error: err.toString() }))
  return true
}
  if (message.type === "AUDIO_REQUEST") {
    fetchAudio(message.word, message.sentence, message.lang)
      .then(base64 => storeAudioInAnki(message.word, message.sentence, message.lang, base64))
      .then(filename => sendResponse({ success: true,  filename }))
      .catch(err    => sendResponse({ success: false, error: err.toString() }))
    return true
  }
})
async function translateText(text, langSrc, langTgt) {
  const url  = "https://translate.google.com/_/TranslateWebserverUi/data/batchexecute"
  const body = packageRpc(text, langSrc, langTgt)
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type":  "application/x-www-form-urlencoded;charset=utf-8",
      "User-Agent":    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36",
      "Referer":       "https://translate.google.com/"
    },
    body: body
  })
  const text2 = await response.text()
  return parseTranslation(text2)
}

function parseTranslation(responseText) {
  const lines = responseText.split('\n')
  for (const line of lines) {
    if (line.includes('MkEWBc')) {
      try {
        const parsed       = JSON.parse(line)
        const inner        = JSON.parse(parsed[0][2])
        const response     = inner[1][0]
        const detectedLang = inner[0][2]
        let translatedText = ""
        // Handle any number of sentences
        if (response.length === 1 && response[0].length > 5) {
          const sentences = response[0][5]
          for (const sentence of sentences) {
            translatedText += sentence[0].trim() + " "
          }
          translatedText = translatedText.trim()
        } else {
          // Multiple segments - join them all
          for (const segment of response) {
            if (segment[0]) translatedText += segment[0].trim() + " "
          }
          translatedText = translatedText.trim()
        }
        console.log("Parsed translation:", translatedText)
        console.log("Detected lang:", detectedLang)
        return { translation: translatedText, detectedLang }
      } catch(e) {
        console.error("Parse error:", e)
        return null
      }
    }
  }
  return null
}
