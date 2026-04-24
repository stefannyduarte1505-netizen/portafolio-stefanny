import { useRef, useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

const LABEL = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 300,
  fontSize: '0.7rem',
  letterSpacing: '0.04em',
  textTransform: 'none',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '0.25rem',
}

const VALUE = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 300,
  fontSize: '0.85rem',
  color: 'rgba(255,255,255,0.85)',
  lineHeight: 1.5,
}

const FIELD_WRAP = {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '0.5px solid rgba(255,255,255,0.25)',
  paddingBottom: '0.6rem',
  marginBottom: '1.5rem',
}

const INPUT_STYLE = {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 300,
  fontSize: '0.9rem',
  color: '#fff',
  paddingTop: '0.35rem',
  width: '100%',
}

function Field({ label, type = 'text', placeholder, isTextarea }) {
  return (
    <div style={FIELD_WRAP}>
      <span style={LABEL}>{label}</span>
      {isTextarea
        ? <textarea
            placeholder={placeholder}
            rows={3}
            style={{ ...INPUT_STYLE, resize: 'none', lineHeight: 1.6 }}
          />
        : <input type={type} placeholder={placeholder} style={INPUT_STYLE} />
      }
    </div>
  )
}

export default function Footer() {
  const [sent, setSent] = useState(false)
  const isMobile = useIsMobile()

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#9A0809',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Main grid ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          minHeight: isMobile ? 'auto' : '80vh',
          padding: isMobile ? '3rem 1.5rem 0' : '5rem 5vw 0',
          gap: isMobile ? '2.5rem' : '4rem',
        }}
      >
        {/* LEFT — info */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.5rem 2rem', paddingBottom: isMobile ? '0' : '3rem' }}>

            <div>
              <p style={LABEL}>Phone</p>
              <p style={VALUE}>+51 999 999 999</p>
            </div>

            <div>
              <p style={LABEL}>Email</p>
              <a
                href="mailto:stefanny.duarte@gmail.com"
                style={{ ...VALUE, textDecoration: 'none', display: 'block' }}
              >
                stefanny.duarte@gmail.com
              </a>
            </div>

            <div>
              <p style={LABEL}>Address</p>
              <p style={VALUE}>Lima, Perú<br />Barcelona, España</p>
            </div>

            <div>
              <p style={LABEL}>Socials</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <a href="https://www.linkedin.com/in/stefannyduarte/" target="_blank" rel="noopener noreferrer" style={{ ...VALUE, textDecoration: 'none' }}>LinkedIn</a>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ ...VALUE, textDecoration: 'none' }}>Behance</a>
              </div>
            </div>

          </div>

          {/* space where the global "CONTACTO" label sits */}
          <div style={{ paddingBottom: '2.5rem' }} />
        </div>

        {/* RIGHT — form */}
        <div style={{ paddingTop: '0.5rem' }}>
          <p
            style={{
              fontFamily: "'Gilda Display', serif",
              fontWeight: 400,
              fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)',
              color: '#fff',
              lineHeight: 1.45,
              marginBottom: '3rem',
              maxWidth: '480px',
            }}
          >
            Do not hesitate to contact me to discuss a possible project or discover more about my work.
          </p>

          {!sent ? (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
              style={{ maxWidth: '480px' }}
            >
              <Field label="Name" placeholder="John Doe" />
              <Field label="Email" type="email" placeholder="hello@example.com" />
              <Field label="I work at" placeholder="Company name" />
              <Field label="Details about the project" placeholder="My project is about..." isTextarea />

              <button
                type="submit"
                style={{
                  marginTop: '1rem',
                  background: 'transparent',
                  border: '0.5px solid rgba(255,255,255,0.5)',
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'none',
                  padding: '0.75rem 2.5rem',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#fff'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'}
              >
                send message
              </button>
            </form>
          ) : (
            <p style={{ ...VALUE, fontSize: '1rem', marginTop: '2rem' }}>
              Thank you — I'll be in touch soon.
            </p>
          )}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: '0.5px solid rgba(255,255,255,0.12)',
          padding: isMobile ? '1.5rem' : '1.2rem 5vw',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '0.4rem' : 0,
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
        }}
      >
        <p style={{ ...LABEL, margin: 0 }}>© 2025 Stefanny Duarte — all rights reserved</p>
        <p style={{ ...LABEL, margin: 0 }}>Spatial Branding & Experience Design</p>
      </div>
    </footer>
  )
}
