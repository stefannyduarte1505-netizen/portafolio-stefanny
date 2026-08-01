import { useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { t } from '../../translations'

const BASE = 'https://portafoliostefduarte.figma.site'
const V = (hash) => `${BASE}/_videos/v1/${hash}`

const ALL_VIDEOS = [
  V('796d9c67a74c8868dcd7116f8560e3838e3beec0'),
  V('58c9e2c3d0c0a0e94b93ffbb075263144b4840ff'),
  V('eaf8810d0f762d99fbaa457f130435c2acda1926'),
  V('4e190a1c303e6900a7d8a6f0ba2a5595faf2724a'),
  V('dc194276e5043d4b9fff5542fca0547307dedca4'),
  V('fdee800d2505b312591f0dadee7ae135139b1f20'),
  V('cca17f7077a2aa4d9997c5cfbb151bf8e2a704e7'),
  V('ed8587d567a58d9dcbee917a88030e47f3a1c404'),
]

const PAD_H = 'clamp(1.5rem, 5vw, 5rem)'

function Strip({ videos, height = 'clamp(220px, 30vw, 420px)' }) {
  const ref = useRef(null)
  const dragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onDown = (e) => {
    dragging.current = true
    startX.current = e.pageX - ref.current.offsetLeft
    scrollLeft.current = ref.current.scrollLeft
    ref.current.style.cursor = 'grabbing'
  }
  const onUp = () => {
    dragging.current = false
    if (ref.current) ref.current.style.cursor = 'grab'
  }
  const onMove = (e) => {
    if (!dragging.current) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    ref.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.4
  }
  const onWheel = (e) => {
    e.preventDefault()
    ref.current.scrollLeft += e.deltaY + e.deltaX
  }

  return (
    <div
      ref={ref}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onMouseMove={onMove}
      onWheel={onWheel}
      style={{
        display: 'flex', gap: '8px',
        overflowX: 'auto', overflowY: 'hidden',
        scrollbarWidth: 'none', msOverflowStyle: 'none',
        cursor: 'grab', userSelect: 'none',
        WebkitOverflowScrolling: 'touch', height,
      }}
    >
      {videos.map((src, i) => (
        <video key={i} autoPlay loop muted playsInline draggable={false}
          style={{ flexShrink: 0, height: '100%', width: 'auto', objectFit: 'cover', display: 'block', borderRadius: '4px', pointerEvents: 'none' }}
        >
          <source src={src} />
        </video>
      ))}
    </div>
  )
}

export default function CreativeDirection() {
  const { lang } = useLanguage()
  const tr = t[lang].about

  return (
    <section style={{ backgroundColor: '#ffffff', overflow: 'hidden', paddingBottom: 'clamp(3rem, 6vw, 6rem)' }}>
      <Strip videos={ALL_VIDEOS} height="clamp(280px, 38vw, 520px)" />
      <div style={{
        paddingLeft: PAD_H, paddingRight: PAD_H,
        paddingTop: 'clamp(3rem, 5vw, 5rem)',
        display: 'flex', flexDirection: 'column',
        gap: 'clamp(1rem, 1.5vw, 1.5rem)', maxWidth: '560px',
      }}>
        <h2 style={{
          fontFamily: "'Gilda Display', serif", fontWeight: 400,
          fontSize: 'clamp(2rem, 3.5vw, 3.4rem)', lineHeight: 1.25,
          color: '#B9111C', margin: 0, letterSpacing: '-0.01em',
        }}>
          {tr.creativeHeading}
        </h2>
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontWeight: 300,
          fontSize: 'clamp(1.16rem, 1.4vw, 1.4rem)', lineHeight: 1.8,
          color: 'rgba(26,24,21,0.65)', margin: 0,
        }}>
          {tr.creativeBio}
        </p>
      </div>
    </section>
  )
}
