"use client"

import { useEffect, useState } from 'react'
import Script from 'next/script'

const ACCOUNT_ID = '596df286b97903'

export default function SenderLoader() {
  const [status, setStatus] = useState({ script: 'idle', senderReady: false, container: false as boolean })

  useEffect(() => {
    function onGlobalError(ev: ErrorEvent) {
      console.error('[SenderLoader] Global error:', ev.message, ev.error || ev)
    }
    window.addEventListener('error', onGlobalError)
    return () => window.removeEventListener('error', onGlobalError)
  }, [])

  useEffect(() => {
    // observe for the embed container and mark container state
    const obs = new MutationObserver(() => {
      const el = document.querySelector('.sender-form-field[data-sender-form-id]')
      if (el) setStatus(s => ({ ...s, container: true }))
    })
    obs.observe(document.body, { childList: true, subtree: true })
    // initial check
    if (document.querySelector('.sender-form-field[data-sender-form-id]')) setStatus(s => ({ ...s, container: true }))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* Define the global callback that Sender will call when using explicit rendering. */}
      <Script
        id="sender-explicit-callback"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `function senderFormsReady(){
  try{
    console.info('[SenderLoader] senderFormsReady called')
    if(typeof window.sender === 'function'){
      try{ window.sender('${ACCOUNT_ID}'); console.info('[SenderLoader] sender(account) called from senderFormsReady') }catch(e){console.warn('[SenderLoader] sender(account) failed in senderFormsReady', e)}
    }
    var sf = window.senderForms || window.SenderForms || (window.Sender && window.Sender.Forms) || null;
    if(sf && typeof sf.render === 'function'){
      try{ sf.render(); console.info('[SenderLoader] senderForms.render() called') }catch(e){ console.error('[SenderLoader] senderForms.render() error', e) }
    } else {
      console.warn('[SenderLoader] senderForms.render() not found')
    }
  }catch(err){ console.error('[SenderLoader] senderFormsReady error', err) }
}`,
        }}
      />

      {/* Load Sender in explicit mode so we control when forms render. The CDN will call senderFormsReady when ready. */}
      <Script
        id="sender-universal"
        src="https://cdn.sender.net/accounts_resources/universal.js?explicit=true&onload=senderFormsReady"
        strategy="afterInteractive"
        onLoad={() => {
          setStatus(s => ({ ...s, script: 'loaded' }))
          console.info('[SenderLoader] Sender CDN loaded (explicit=true)')
        }}
        onError={(e) => {
          setStatus(s => ({ ...s, script: 'error' }))
          console.error('[SenderLoader] Failed to load Sender CDN', e)
        }}
      />

      {/* Small visible debug so you can see status on the page */}
      <div style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 9999, background: 'white', padding: 10, borderRadius: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.12)', fontSize: 12 }}>
        <div style={{ fontWeight: 600, marginBottom: 6 }}>Sender Debug</div>
        <div>Script: <strong>{status.script}</strong></div>
        <div>SenderReady: <strong>{String(status.senderReady)}</strong></div>
        <div>Container: <strong>{String(status.container)}</strong></div>
        <div style={{ marginTop: 6, display: 'flex', gap: 6 }}>
          <button onClick={() => { try{ if(typeof (window as any).sender === 'function'){ (window as any).sender(ACCOUNT_ID); console.info('[SenderLoader] Manual sender(account) called') } else console.warn('sender not available') }catch(e){console.error(e)} }} style={{ padding: '6px 8px' }}>Init</button>
          <button onClick={() => {
            const el = document.querySelector('.sender-form-field[data-sender-form-id]')
            console.log('container outerHTML', el ? el.outerHTML.substring(0,1000) : null)
            const iframes = document.querySelectorAll('.sender-form-field iframe')
            iframes.forEach((i, idx) => console.log('iframe', idx, (i as HTMLIFrameElement).src))
          }} style={{ padding: '6px 8px' }}>Dump</button>
        </div>
      </div>
    </>
  )
}

