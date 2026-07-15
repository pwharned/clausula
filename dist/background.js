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

async function getXsrfToken() {
  const response = await fetch("https://translate.google.com", {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36"
    }
  })
  const text = await response.text()
  // Extract XSRF token from page
  const match = text.match(/FdrFJe["']:\s*["']([^"']+)["']/)
  if (match) return match[1]
  // Alternative location
  const match2 = text.match(/SNlM0e["']:\s*["']([^"']+)["']/)
  if (match2) return match2[1]
  console.warn("Could not find XSRF token")
  return null
}

async function translateText(text, langSrc, langTgt) {
  const url  = "https://translate.google.com/_/TranslateWebserverUi/data/batchexecute"
  const body = packageRpc(text, langSrc, langTgt)
  const makeRequest = async (extraBody = "") => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        "User-Agent":   "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36",
        "Referer":      "https://translate.google.com/"
      },
      body: body + extraBody
    })
  }
  // First attempt without token
  let response  = await makeRequest()
  let text2     = await response.text()
  // If 400, extract token from error response and retry
  if (response.status === 400) {
    console.log("Got 400, extracting XSRF token from error response")
    const tokenMatch = text2.match(/"xsrf","([^"]+)"/)
    if (tokenMatch) {
      const xsrfToken = tokenMatch[1]
      console.log("Retrying with XSRF token:", xsrfToken)
      response = await makeRequest(`&at=${encodeURIComponent(xsrfToken)}`)
      text2    = await response.text()
      console.log("Retry response status:", response.status)
      console.log("Retry raw response:", text2.slice(0, 200))
    } else {
      console.error("Could not extract XSRF token from error response")
    }
  }
  return parseTranslation(text2)
}

function parseTranslation(responseText) {
	console.log(responseText)

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


const SEC_MS_GEC_VERSION   = "1-143.0.3650.75"
const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4"
async function generateSecMsGec(clockSkew = 0) {
  const WIN_EPOCH = 11644473600
  let ticks  = (Date.now() / 1000) + clockSkew
  ticks     += WIN_EPOCH
  ticks     -= ticks % 300
  ticks     *= 1e9 / 100
  const strToHash  = `${Math.floor(ticks)}${TRUSTED_CLIENT_TOKEN}`
  const encoder    = new TextEncoder()
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(strToHash))
  const hashArray  = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase()
}
function generateMuid() {
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  return Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()
}
async function setMuidCookie(muid) {
  return new Promise((resolve) => {
    chrome.cookies.set({
      url:    "https://speech.platform.bing.com",
      name:   "muid",
      value:  muid,
      secure: true
    }, resolve)
  })
}
async function fetchAudioMicrosoft(sentence) {
  const voice        = 'fa-IR-DilaraNeural'
  const secMsGec     = await generateSecMsGec()
  const connectionId = crypto.randomUUID().replace(/-/g, '')
  const muid         = generateMuid()
  await setMuidCookie(muid)
  const wsUrl =
    `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1` +
    `?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}` +
    `&Sec-MS-GEC=${secMsGec}` +
    `&Sec-MS-GEC-Version=${SEC_MS_GEC_VERSION}` +
    `&ConnectionId=${connectionId}`
  console.log("Connecting to:", wsUrl)
  console.log("Sec-MS-GEC:", secMsGec)
  console.log("MUID:", muid)
  return new Promise((resolve, reject) => {
    const ws        = new WebSocket(wsUrl)
    let audioChunks = []
    let hasError    = false
    ws.binaryType = "arraybuffer"
    ws.onopen = () => {
      console.log("WebSocket connected")
      const configMessage = {
        context: {
          synthesis: {
            audio: {
              metadataoptions: {
                sentenceBoundaryEnabled: false,
                wordBoundaryEnabled:     true
              },
              outputFormat: "audio-24khz-48kbitrate-mono-mp3"
            }
          }
        }
      }
      ws.send(
        `X-Timestamp:${new Date().toISOString()}\r\n` +
        `Content-Type:application/json; charset=utf-8\r\n` +
        `Path:speech.config\r\n\r\n` +
        JSON.stringify(configMessage)
      )
      const ssml =
        `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='fa'>` +
        `<voice name='${voice}'>` +
        `<prosody pitch='+0Hz' rate='+0%' volume='+0%'>` +
        `${sentence}` +
        `</prosody>` +
        `</voice>` +
        `</speak>`
      ws.send(
        `X-RequestId:${crypto.randomUUID().replace(/-/g, '')}\r\n` +
        `Content-Type:application/ssml+xml\r\n` +
        `X-Timestamp:${new Date().toISOString()}Z\r\n` +
        `Path:ssml\r\n\r\n` +
        ssml
      )
    }
    ws.onmessage = (event) => {
      if (typeof event.data === 'string') {
        console.log("Text message:", event.data.slice(0, 100))
        return
      }
      if (event.data instanceof ArrayBuffer) {
        const data = new Uint8Array(event.data)
        // First 2 bytes are header length per edge-tts source
        const headerLength = (data[0] << 8) | data[1]
        const headerBytes  = data.slice(2, headerLength + 2)
        const audioData    = data.slice(headerLength + 2)
        const headerText   = new TextDecoder('utf-8').decode(headerBytes)
        console.log("Binary header:", headerText.slice(0, 100))
        if (headerText.includes('Path:audio') && audioData.length > 0) {
          audioChunks.push(audioData)
        }
        if (headerText.includes('Path:turn.end')) {
          const totalLength = audioChunks.reduce((acc, chunk) => acc + chunk.length, 0)
          const combined    = new Uint8Array(totalLength)
          let offset        = 0
          for (const chunk of audioChunks) {
            combined.set(chunk, offset)
            offset += chunk.length
          }
          const binary = combined.reduce((acc, b) => acc + String.fromCharCode(b), '')
          resolve(btoa(binary))
          ws.close()
        }
      }
    }
    ws.onerror = (error) => {
      console.error("WebSocket error:", error)
	console.error("WebSocket error event:", JSON.stringify(error))
console.error("WebSocket readyState:", ws.readyState)
    }
    ws.onclose = (event) => {
  console.log("WebSocket closed:")
  console.log("  code:", event.code)
  console.log("  reason:", event.reason)
  console.log("  wasClean:", event.wasClean)
  console.log("  audioChunks received:", audioChunks.length)
      console.log("WebSocket closed:", event.code, event.reason)
      if (!hasError && audioChunks.length === 0) {
        reject(new Error(`WebSocket closed: ${event.code} ${event.reason}`))
      }
    }
  })
}
// Update AUDIO_REQUEST handler
// Keep service worker alive during operations
let keepAliveInterval = null
function startKeepAlive() {
  keepAliveInterval = setInterval(() => {
    chrome.runtime.getPlatformInfo(() => {})
  }, 20000)
}
function stopKeepAlive() {
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval)
    keepAliveInterval = null
  }
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  startKeepAlive()
  if (message.type === "ANKI_REQUEST") {
    fetch("http://localhost:8765", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(message.payload)
    })
    .then(r => r.json())
    .then(data => {
      stopKeepAlive()
      sendResponse({ success: true, data })
    })
    .catch(err => {
      stopKeepAlive()
      sendResponse({ success: false, error: err.toString() })
    })
    return true
  }
  if (message.type === "TRANSLATE_REQUEST") {
    translateText(message.text, message.langSrc, message.langTgt)
      .then(result => {
        stopKeepAlive()
        if (result) sendResponse({
          success:      true,
          result:       result.translation,
          detectedLang: result.detectedLang
        })
        else sendResponse({ success: false, error: "Could not parse translation" })
      })
      .catch(err => {
        stopKeepAlive()
        sendResponse({ success: false, error: err.toString() })
      })
    return true
  }
if (message.type === "AUDIO_REQUEST") {
  if (message.lang === "auto") {
    sendResponse({ success: false, error: "Cannot generate audio for unknown language" })
    return true
  }
  const audioPromise = message.lang === "fa"
    ? fetchAudioMicrosoft(message.sentence)
    : fetchAudio(message.word, message.sentence, message.lang)
  audioPromise
    .then(base64 => storeAudioInAnki(message.word, message.sentence, message.lang, base64))
    .then(filename => sendResponse({ success: true, filename }))
    .catch(err    => sendResponse({ success: false, error: err.toString() }))
  return true
}

})




