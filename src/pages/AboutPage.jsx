import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const BASE = 'https://portafoliostefduarte.figma.site'

const collageVideos = [
  `${BASE}/_videos/v1/796d9c67a74c8868dcd7116f8560e3838e3beec0`,
  `${BASE}/_videos/v1/58c9e2c3d0c0a0e94b93ffbb075263144b4840ff`,
  `${BASE}/_videos/v1/eaf8810d0f762d99fbaa457f130435c2acda1926`,
  `${BASE}/_videos/v1/4e190a1c303e6900a7d8a6f0ba2a5595faf2724a`,
]

const fashionFilmVideos = [
  `${BASE}/_videos/v1/dc194276e5043d4b9fff5542fca0547307dedca4`,
  `${BASE}/_videos/v1/fdee800d2505b312591f0dadee7ae135139b1f20`,
  `${BASE}/_videos/v1/cca17f7077a2aa4d9997c5cfbb151bf8e2a704e7`,
  `${BASE}/_videos/v1/ed8587d567a58d9dcbee917a88030e47f3a1c404`,
  `${BASE}/_videos/v1/dc194276e5043d4b9fff5542fca0547307dedca4`,
]

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Navbar />

      {/* Intro text */}
      <section
        className="px-10 py-16 max-w-3xl"
        style={{ margin: '0 auto' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '1.125rem',
            color: '#273026',
            lineHeight: 1.7,
          }}
        >
          Me apasionan todas las disciplinas creativas y la estética visual. En mi día a día
          como artista visual, fusiono el collage y la animación para explorar composiciones,
          texturas y colores sobre mi propia fotografía, dotándola de vida y movimiento.
        </p>
      </section>

      {/* Collage / animation videos grid */}
      <section className="px-10 pb-10">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {collageVideos.map((src, i) => (
            <video
              key={i}
              autoPlay
              loop
              playsInline
              muted
              style={{ width: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src={src} />
            </video>
          ))}
        </div>
      </section>

      {/* Short fashion film divider text */}
      <section
        className="px-10 py-10"
        style={{ borderTop: '0.5px solid #e6e179' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '1.125rem',
            color: '#273026',
            lineHeight: 1.7,
            maxWidth: '720px',
          }}
        >
          Más allá del diseño, utilizo el formato del short fashion film para experimentar
          con el storytelling, fusionando narrativa y estética visual en una sola expresión.
        </p>
      </section>

      {/* Fashion film videos */}
      <section className="px-10 pb-20">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          {fashionFilmVideos.map((src, i) => (
            <video
              key={i}
              autoPlay
              loop
              playsInline
              muted
              style={{ width: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src={src} />
            </video>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
