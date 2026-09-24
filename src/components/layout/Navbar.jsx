import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useLanguage } from '../../contexts/LanguageContext'

const POPPINS = "'Poppins', sans-serif"
const RED     = '#B9111C'
const DARK    = '#1A1815'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Work',  href: '/work'  },
]

const NAV_HEIGHT_DESKTOP = '4.5rem'
const NAV_HEIGHT_MOBILE  = '4rem'

export default function Navbar() {
  const [open, setOpen]     = useState(false)
  const location            = useLocation()
  const isMobile            = useIsMobile()
  const { lang, setLang }   = useLanguage()

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [open])

  const linkStyle = (href) => ({
    fontFamily:     POPPINS,
    fontWeight:     400,
    fontSize:       '0.7rem',
    letterSpacing:  '0.14em',
    textTransform:  'uppercase',
    color:          isActive(href) ? RED : DARK,
    textDecoration: 'none',
    transition:     'color 0.2s',
  })

  /* ── Desktop bar ── */
  if (!isMobile) {
    return (
      <nav
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          right:           0,
          height:          NAV_HEIGHT_DESKTOP,
          zIndex:          100,
          backgroundColor: '#ffffff',
          borderBottom:    '0.5px solid rgba(26,24,21,0.08)',
        }}
      >
        <div
          style={{
            maxWidth:       '1600px',
            margin:         '0 auto',
            height:         '100%',
            padding:        '0 clamp(1.5rem,5vw,8rem)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontFamily:     POPPINS,
              fontWeight:     400,
              fontSize:       '0.95rem',
              letterSpacing:  '0.04em',
              color:          RED,
              textDecoration: 'none',
              lineHeight:     1.15,
            }}
          >
            stef<br />du<br />art
          </Link>

          {/* Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                style={linkStyle(href)}
                onMouseEnter={e => { if (!isActive(href)) e.currentTarget.style.color = '#820606' }}
                onMouseLeave={e => { if (!isActive(href)) e.currentTarget.style.color = DARK }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Lang toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            style={{
              fontFamily:    POPPINS,
              fontWeight:    300,
              fontSize:      '0.7rem',
              letterSpacing: '0.1em',
              color:         'rgba(26,24,21,0.45)',
              background:    'none',
              border:        'none',
              cursor:        'pointer',
              padding:       0,
            }}
          >
            {lang === 'en' ? 'Español' : 'English'}
          </button>
        </div>
      </nav>
    )
  }

  /* ── Mobile bar ── */
  return (
    <>
      <nav
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          right:           0,
          height:          NAV_HEIGHT_MOBILE,
          zIndex:          200,
          backgroundColor: '#ffffff',
          borderBottom:    '0.5px solid rgba(26,24,21,0.08)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          padding:         '0 1.25rem',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily:     POPPINS,
            fontWeight:     400,
            fontSize:       '0.85rem',
            letterSpacing:  '0.04em',
            color:          RED,
            textDecoration: 'none',
            lineHeight:     1.15,
          }}
        >
          stef<br />du<br />art
        </Link>

        {/* Burger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            width:           '42px',
            height:          '42px',
            borderRadius:    '100px',
            backgroundColor: '#f4f5f4',
            border:          'none',
            cursor:          'pointer',
            display:         'flex',
            flexDirection:   'column',
            alignItems:      'center',
            justifyContent:  'center',
            gap:             '5px',
            padding:         0,
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display:         'block',
              width:           '18px',
              height:          '1.5px',
              backgroundColor: DARK,
              borderRadius:    '2px',
              transition:      'transform 0.3s ease, opacity 0.3s ease',
              transform: open
                ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                : 'scaleX(0)'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Full-screen overlay menu */}
      <div style={{
        position:        'fixed',
        inset:           0,
        zIndex:          150,
        backgroundColor: '#ffffff',
        display:         'flex',
        flexDirection:   'column',
        justifyContent:  'center',
        alignItems:      'flex-start',
        padding:         '0 2.5rem',
        opacity:         open ? 1 : 0,
        pointerEvents:   open ? 'auto' : 'none',
        transition:      'opacity 0.35s ease',
      }}>
        {NAV_LINKS.map(({ label, href }, i) => (
          <Link
            key={label}
            to={href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily:     "'Gilda Display', serif",
              fontWeight:     400,
              fontSize:       'clamp(2.2rem, 10vw, 3rem)',
              letterSpacing:  '-0.02em',
              color:          isActive(href) ? RED : DARK,
              textDecoration: 'none',
              lineHeight:     1.3,
              display:        'block',
              transform:      open ? 'translateY(0)' : 'translateY(20px)',
              opacity:        open ? 1 : 0,
              transition:     `transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s, opacity 0.4s ease ${i * 0.08}s`,
            }}
          >
            {label}
          </Link>
        ))}

        <button
          onClick={() => { setLang(lang === 'en' ? 'es' : 'en'); setOpen(false) }}
          style={{
            fontFamily:    POPPINS,
            fontWeight:    300,
            fontSize:      '0.7rem',
            letterSpacing: '0.12em',
            color:         'rgba(26,24,21,0.45)',
            background:    'none',
            border:        'none',
            cursor:        'pointer',
            padding:       '2rem 0 0',
          }}
        >
          {lang === 'en' ? 'Español' : 'English'}
        </button>

        <p style={{
          position:      'absolute',
          bottom:        '2.5rem',
          left:          '2.5rem',
          fontFamily:    POPPINS,
          fontWeight:    300,
          fontSize:      '0.6rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color:         'rgba(26,24,21,0.35)',
          margin:        0,
        }}>
          Stefanny Duarte © 2025
        </p>
      </div>
    </>
  )
}
