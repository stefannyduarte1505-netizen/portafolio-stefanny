import { useReveal, revealStyle } from '../../hooks/useScrollReveal'

const BASE = 'https://portafoliostefduarte.figma.site/_assets/v11'

/* ── Service data with real Figma CDN icons ───────────── */
const services = [
  {
    icon: `${BASE}/30abed449a40027304bbb2e2fd8acc702a71301d.svg`,
    title: 'Experience Design',
    subtitle: 'CX & UX Strategy',
    description:
      'Diseño experiencias holísticas de usuario y de cliente que alinean las necesidades del usuario con los objetivos de negocio y el propósito de marca. Mi enfoque integra journey mapping, diseño de puntos de contacto, marcos de decisión basados en datos y planeación estratégica de UX.',
    toolIcons: [
      `${BASE}/a25ada30843bbc6e7e1b17c4f582c1223049a719.svg`,
      `${BASE}/fc50f048743a9d3ce4e16a798f82989aea945b13.svg`,
      `${BASE}/b139f22520b20ef415180852e0a304d3368497bc.svg`,
      `${BASE}/b3e64d44302d5db9e73468642443c3dd8b3f968d.svg`,
      `${BASE}/a168cbe3b19d4000e5a371dfa3947dc370183926.svg`,
    ],
  },
  {
    icon: `${BASE}/d64121befbaf4d347314bf8e8e039f74b7968fd5.svg`,
    title: 'Visual & Art Direction',
    subtitle: 'Branding · Identidad',
    description:
      'Conecto las necesidades del usuario con el propósito de marca para generar impacto en el negocio. Especialista en el diseño de ecosistemas visuales, sistemas de identidad y el desarrollo de hojas de ruta estratégicas para la expresión de marca.',
    toolIcons: [
      `${BASE}/7376543f652433572fdea56b5df6be22ac89ed2c.svg`,
      `${BASE}/c9d672d76d768049aeda872ccd65cca75bcd4338.svg`,
      `${BASE}/e520b124d4dbaab88b412ef1ce9cf17a6093da2e.svg`,
      `${BASE}/589c1c127c0ff15b4ff5fd0bd68a176cd1ce2fa2.svg`,
      `${BASE}/dd4b01ce4a4677e9e45a5a8d4eacb4a6aa40411d.svg`,
    ],
  },
  {
    icon: `${BASE}/2065cfa17b84b529f7d502a6995b7d1e3701cbdd.svg`,
    title: 'Motion & Interaction',
    subtitle: 'Animación · Micro-UX',
    description:
      'Creación de sistemas dinámicos y micro-interacciones que elevan la narrativa de marca, mejorando el engagement y la respuesta emocional del usuario a través de experiencias animadas e interactivas.',
    toolIcons: [
      `${BASE}/c1ecd66a1deafd42faf94f56889f971fff20cb36.svg`,
      `${BASE}/34cf79a3bc553eb4b3f07ddbb19a8689c84bae3c.svg`,
      `${BASE}/ecc36bde608942f57ef70011788f6f787b03bcb2.svg`,
      `${BASE}/c10ad39b0e405dc8e35bb16c593c960812111022.svg`,
      `${BASE}/35f4ea0638581ca7ab4fd13493f8ee696bf509ca.svg`,
    ],
  },
]

/* ── Component ────────────────────────────────────────── */
export default function About() {
  const headerReveal = useReveal()
  const bioReveal = useReveal()
  const gridReveal = useReveal()

  return (
    <section
      id="about"
      className="px-6 md:px-10 py-20"
      style={{ borderTop: '1px solid var(--color-dark)' }}
    >
      {/* Section label */}
      <div ref={headerReveal.ref} style={revealStyle(headerReveal.visible)}>
        <h2
          className="m-0 mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'var(--text-display-md)',
            color: 'var(--color-accent)',
            letterSpacing: '-0.04em',
            lineHeight: 1.2,
          }}
        >
          Services
        </h2>
      </div>

      {/* Bio */}
      <div
        ref={bioReveal.ref}
        style={{ ...revealStyle(bioReveal.visible), maxWidth: '680px', marginBottom: '4rem' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'var(--text-body)',
            color: 'var(--color-ink-secondary)',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Diseñadora Estratégica con más de 6 años de experiencia en proyectos de retail y
          corporativos, trabajando en la intersección entre experiencia, marca y espacio.
          Especializada en Diseño CX, Diseño de Producto, Branding y Branding Espacial, con
          un enfoque en la creación de experiencias basadas en investigación que se traducen
          en soluciones coherentes y alineadas con los objetivos de negocio.
        </p>
      </div>

      {/* 3-col services grid */}
      <div ref={gridReveal.ref} className="grid grid-cols-1 md:grid-cols-3">
        {services.map((svc, i) => (
          <div
            key={svc.title}
            style={{
              ...revealStyle(gridReveal.visible, i, 0.12),
              padding: '2.5rem 0',
              paddingRight: i < services.length - 1 ? 'clamp(16px, 4vw, 3rem)' : 0,
              paddingLeft: i > 0 ? 'clamp(16px, 4vw, 3rem)' : 0,
              borderTop: '0.5px solid var(--color-border)',
              borderRight: i < services.length - 1 ? '0.5px solid var(--color-border)' : 'none',
            }}
          >
            {/* Main icon */}
            <div style={{ marginBottom: '1.5rem' }}>
              <img
                src={svc.icon}
                alt={svc.title}
                width="48"
                height="48"
                style={{ display: 'block' }}
              />
            </div>

            {/* Title */}
            <h3
              className="m-0 mb-1"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'var(--text-heading-md)',
                color: 'var(--color-ink)',
                letterSpacing: '-0.04em',
                lineHeight: 1.15,
              }}
            >
              {svc.title}
            </h3>
            <p
              className="m-0 mb-5"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'var(--text-body)',
                color: 'var(--color-accent)',
                letterSpacing: '-0.02em',
              }}
            >
              {svc.subtitle}
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: 'var(--text-body)',
                color: 'var(--color-ink-secondary)',
                lineHeight: 1.65,
                margin: '0 0 1.5rem',
              }}
            >
              {svc.description}
            </p>

            {/* Tool icons row */}
            <div className="flex items-center gap-3 flex-wrap">
              {svc.toolIcons.map((src, j) => (
                <img
                  key={j}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  width="28"
                  height="28"
                  style={{ display: 'block', opacity: 0.7 }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
