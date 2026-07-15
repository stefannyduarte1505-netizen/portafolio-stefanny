import { useLanguage } from '../../contexts/LanguageContext'

const POPPINS = "'Poppins', sans-serif"

const pillStyle = {
  padding: '0.45rem 1rem', borderRadius: '100px',
  backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
  backgroundColor: 'rgba(255,255,255,0.75)',
  boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
  border: '0.5px solid rgba(26,24,21,0.12)', cursor: 'pointer',
  fontFamily: POPPINS, fontWeight: 300,
  fontSize: '0.72rem', letterSpacing: '0.1em',
  color: '#1A1815', transition: 'color 0.2s',
}

export function LangButton() {
  const { lang, toggle } = useLanguage()
  return (
    <button
      onClick={toggle}
      style={{ ...pillStyle, display: 'flex', alignItems: 'center', gap: '0.4rem' }}
      onMouseEnter={e => e.currentTarget.style.color = '#B9111C'}
      onMouseLeave={e => e.currentTarget.style.color = '#1A1815'}
    >
      <span style={{ opacity: lang === 'en' ? 1 : 0.35 }}>EN</span>
      <span style={{ opacity: 0.3, fontSize: '0.6rem' }}>|</span>
      <span style={{ opacity: lang === 'es' ? 1 : 0.35 }}>ES</span>
    </button>
  )
}

export function CloseButton({ label }) {
  return (
    <button
      onClick={() => { sessionStorage.setItem('scrollToGallery', '1'); window.location.href = '/' }}
      style={pillStyle}
      onMouseEnter={e => e.currentTarget.style.color = '#B9111C'}
      onMouseLeave={e => e.currentTarget.style.color = '#1A1815'}
    >
      {label}
    </button>
  )
}
