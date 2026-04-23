/* ── About — bio + photo grid, then video strips ───────────────────────── */
import { useRef } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

const BASE = 'https://portafoliostefduarte.figma.site'
const V = (hash) => `${BASE}/_videos/v1/${hash}`

const collageVideos = [
  V('796d9c67a74c8868dcd7116f8560e3838e3beec0'),
  V('58c9e2c3d0c0a0e94b93ffbb075263144b4840ff'),
  V('eaf8810d0f762d99fbaa457f130435c2acda1926'),
  V('4e190a1c303e6900a7d8a6f0ba2a5595faf2724a'),
]

const fashionFilmVideos = [
  V('dc194276e5043d4b9fff5542fca0547307dedca4'),
  V('fdee800d2505b312591f0dadee7ae135139b1f20'),
  V('cca17f7077a2aa4d9997c5cfbb151bf8e2a704e7'),
  V('ed8587d567a58d9dcbee917a88030e47f3a1c404'),
]

/* ── Draggable horizontal strip ── */
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
        display:               'flex',
        gap:                   '8px',
        overflowX:             'auto',
        overflowY:             'hidden',
        scrollbarWidth:        'none',
        msOverflowStyle:       'none',
        cursor:                'grab',
        userSelect:            'none',
        WebkitOverflowScrolling: 'touch',
        height,
      }}
    >
      {videos.map((src, i) => (
        <video
          key={i}
          autoPlay
          loop
          muted
          playsInline
          draggable={false}
          style={{
            flexShrink:  0,
            height:      '100%',
            width:       'auto',
            objectFit:   'cover',
            display:     'block',
            borderRadius: '4px',
            pointerEvents: 'none',
          }}
        >
          <source src={src} />
        </video>
      ))}
    </div>
  )
}

const ALL_VIDEOS = [...collageVideos, ...fashionFilmVideos]

const PAD_H = 'clamp(1.5rem, 5vw, 5rem)'

export default function AboutUs() {
  const isMobile = useIsMobile()
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#F5F4F0',
        overflow: 'hidden',
        paddingTop:    'clamp(3rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
      }}
    >
      {/* ── Label ── */}
      <p
        style={{
          fontFamily:    "'Poppins', sans-serif",
          fontWeight:    300,
          fontSize:      'clamp(0.65rem, 0.85vw, 0.78rem)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color:         'rgba(26,24,21,0.38)',
          margin:        '0 0 clamp(2rem, 4vw, 3.5rem)',
          paddingLeft:   PAD_H,
        }}
      >
        about me
      </p>

      {/* ── Bio grid: text left / photo right ── */}
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap:                 isMobile ? '2rem' : 'clamp(2rem, 4vw, 4rem)',
          paddingLeft:         PAD_H,
          paddingRight:        PAD_H,
          marginBottom:        'clamp(3rem, 5vw, 5rem)',
          alignItems:          'start',
        }}
      >
        {/* Left — headline + body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.25rem, 2vw, 2rem)' }}>
          <h2
            style={{
              fontFamily:    "'Gilda Display', serif",
              fontWeight:    400,
              fontSize:      'clamp(1.2rem, 2vw, 1.9rem)',
              lineHeight:    1.25,
              color:         '#B9111C',
              margin:        0,
              letterSpacing: '-0.01em',
            }}
          >
            Spatial Branding &amp; Experience Design: conectando marcas, espacios y personas.
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize:   'clamp(0.78rem, 0.9vw, 0.9rem)',
              lineHeight: 1.8,
              color:      'rgba(26,24,21,0.65)',
              margin:     0,
              maxWidth:   '480px',
            }}
          >
            Diseñadora Estratégica con más de 6 años de experiencia en proyectos de retail y
            corporativos, trabajando en la intersección entre experiencia, marca y espacio.
            Especializada en Diseño CX, Diseño de Producto, Branding y Branding Espacial, con
            un enfoque en la creación de experiencias basadas en investigación que se traducen
            en soluciones coherentes, funcionales y alineadas con los objetivos de negocio.
          </p>
        </div>

        {/* Right — portrait photo (full, uncropped) */}
        <div style={{ width: '100%' }}>
          <img
            src="/hero-portrait.png"
            alt="Stefanny Duarte"
            style={{
              width:         '100%',
              height:        'auto',
              display:       'block',
              borderRadius:  '4px',
              userSelect:    'none',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* ── Second text block — right-aligned on desktop, left on mobile ── */}
      <div
        style={{
          display:        'flex',
          justifyContent: isMobile ? 'flex-start' : 'flex-end',
          paddingLeft:    PAD_H,
          paddingRight:   PAD_H,
          marginBottom:   'clamp(3rem, 5vw, 5rem)',
        }}
      >
        <div
          style={{
            maxWidth: '520px',
            display:  'flex',
            flexDirection: 'column',
            gap: 'clamp(1rem, 1.5vw, 1.5rem)',
          }}
        >
          <h2
            style={{
              fontFamily:    "'Gilda Display', serif",
              fontWeight:    400,
              fontSize:      'clamp(1.2rem, 2vw, 1.9rem)',
              lineHeight:    1.25,
              color:         '#B9111C',
              margin:        0,
              letterSpacing: '-0.01em',
            }}
          >
            Me apasionan todas las disciplinas creativas y la estética visual.
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize:   'clamp(0.78rem, 0.9vw, 0.9rem)',
              lineHeight: 1.8,
              color:      'rgba(26,24,21,0.65)',
              margin:     0,
            }}
          >
            En mi día a día como artista visual, fusiono el collage y la animación para
            explorar composiciones, texturas y colores sobre mi propia fotografía,
            dotándola de vida y movimiento.
          </p>
        </div>
      </div>

      {/* ── Video strip ── */}
      <Strip videos={ALL_VIDEOS} height="clamp(280px, 38vw, 520px)" />

      {/* ── Text block after videos ── */}
      <div
        style={{
          paddingLeft:  PAD_H,
          paddingRight: PAD_H,
          paddingTop:   'clamp(3rem, 5vw, 5rem)',
          display:      'flex',
          flexDirection: 'column',
          gap:          'clamp(1rem, 1.5vw, 1.5rem)',
          maxWidth:     '560px',
        }}
      >
        <h2
          style={{
            fontFamily:    "'Gilda Display', serif",
            fontWeight:    400,
            fontSize:      'clamp(1.2rem, 2vw, 1.9rem)',
            lineHeight:    1.25,
            color:         '#B9111C',
            margin:        0,
            letterSpacing: '-0.01em',
          }}
        >
          Me apasionan todas las disciplinas creativas y la estética visual.
        </h2>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize:   'clamp(0.78rem, 0.9vw, 0.9rem)',
            lineHeight: 1.8,
            color:      'rgba(26,24,21,0.65)',
            margin:     0,
          }}
        >
          Más allá del diseño, utilizo el formato del short fashion film para experimentar
          con el storytelling, fusionando narrativa y estética visual en una sola expresión.
        </p>
      </div>
    </section>
  )
}
