import { useReveal, revealStyle } from '../../hooks/useScrollReveal'

/* ── Inline SVG icons ─────────────────────────────────── */
const IconCX = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="22" cy="22" r="5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2.5 3" />
    <circle cx="22" cy="22" r="19" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="22" y1="2" x2="22" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="22" y1="37" x2="22" y2="42" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="2" y1="22" x2="7" y2="22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="37" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const IconVisual = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="4" y="14" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <rect x="16" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
    <circle cx="12" cy="23" r="3" stroke="currentColor" strokeWidth="1.2" />
    <line x1="17" y1="23" x2="22" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const IconMotion = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M38 22C38 30.837 30.837 38 22 38C13.163 38 6 30.837 6 22C6 13.163 13.163 6 22 6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M30 6 L38 6 L38 14"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 16 L29 22 L18 28 Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
)

/* ── Data ─────────────────────────────────────────────── */
const services = [
  {
    icon: <IconCX />,
    title: 'Experience Design',
    subtitle: 'CX & UX Strategy',
    description:
      'Diseño experiencias holísticas de usuario y de cliente que alinean las necesidades del usuario con los objetivos de negocio y el propósito de marca. Mi enfoque integra journey mapping, diseño de puntos de contacto, marcos de decisión basados en datos y planeación estratégica de UX.',
  },
  {
    icon: <IconVisual />,
    title: 'Visual & Art Direction',
    subtitle: 'Branding · Identidad',
    description:
      'Conecto las necesidades del usuario con el propósito de marca para generar impacto en el negocio. Especialista en el diseño de ecosistemas visuales, sistemas de identidad y el desarrollo de hojas de ruta estratégicas para la expresión de marca.',
  },
  {
    icon: <IconMotion />,
    title: 'Motion & Interaction',
    subtitle: 'Animación · Micro-UX',
    description:
      'Creación de sistemas dinámicos y micro-interacciones que elevan la narrativa de marca, mejorando el engagement y la respuesta emocional del usuario a través de experiencias animadas e interactivas.',
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
      <div ref={bioReveal.ref} style={{ ...revealStyle(bioReveal.visible), maxWidth: '680px', marginBottom: '4rem' }}>
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
          Diseñadora Estratégica con más de 6 años de experiencia en proyectos de retail y corporativos,
          trabajando en la intersección entre experiencia, marca y espacio. Especializada en Diseño CX,
          Diseño de Producto, Branding y Branding Espacial, con un enfoque en la creación de experiencias
          basadas en investigación que se traducen en soluciones coherentes y alineadas con los objetivos de negocio.
        </p>
      </div>

      {/* 3-col services grid */}
      <div
        ref={gridReveal.ref}
        className="grid grid-cols-1 md:grid-cols-3"
      >
        {services.map((svc, i) => (
          <div
            key={svc.title}
            style={{
              ...revealStyle(gridReveal.visible, i, 0.12),
              padding: '2.5rem 0',
              paddingRight: 'clamp(0px, 4vw, 3rem)',
              borderTop: '0.5px solid var(--color-border)',
              borderRight: i < services.length - 1 ? '0.5px solid var(--color-border)' : 'none',
              paddingLeft: i > 0 ? 'clamp(0px, 4vw, 3rem)' : 0,
            }}
          >
            {/* Icon */}
            <div
              style={{
                color: 'var(--color-accent)',
                marginBottom: '1.5rem',
              }}
            >
              {svc.icon}
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
              className="m-0 mb-4"
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
                margin: 0,
              }}
            >
              {svc.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
