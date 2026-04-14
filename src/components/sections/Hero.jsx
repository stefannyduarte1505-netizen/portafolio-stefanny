import Tag from '../ui/Tag'
import { useReveal, revealStyle } from '../../hooks/useScrollReveal'

const skills = ['Service Design', 'CX Design', 'Product Design', 'Branding', 'UX Strategy']

// Large hero portrait (home page version)
const HERO_PORTRAIT =
  'https://portafoliostefduarte.figma.site/_assets/v11/22284ecce5bb9dd9bcc42361dfb8fd3d36fb03b8.png'

export default function Hero() {
  const textReveal = useReveal(0.05)
  const avatarReveal = useReveal(0.05)

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-10 py-16 min-h-[calc(100dvh-89px)]">
      {/* Left — Text */}
      <div
        ref={textReveal.ref}
        className="flex flex-col gap-6 max-w-xl w-full"
        style={revealStyle(textReveal.visible, 0, 0)}
      >
        <h1
          className="m-0 font-bold"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, var(--text-display-xl))',
            letterSpacing: '-0.045em',
            lineHeight: 1.15,
            color: 'var(--color-ink)',
          }}
        >
          Hola,{' '}
          <span style={{ color: 'var(--color-accent)' }}>soy Stefanny</span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'var(--text-body)',
            color: 'var(--color-ink-secondary)',
            lineHeight: 1.7,
            maxWidth: '520px',
            ...revealStyle(textReveal.visible, 1, 0.08),
          }}
        >
          Diseñadora con más de 6 años de experiencia en proyectos de retail y
          corporativos, trabajando en la intersección entre experiencia, marca y espacio.
          Especializada en Diseño CX, Diseño de Producto, Branding y Branding Espacial.
        </p>

        {/* Skill tags */}
        <div
          className="flex flex-wrap gap-2"
          style={revealStyle(textReveal.visible, 2, 0.08)}
        >
          {skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex gap-4 mt-2"
          style={revealStyle(textReveal.visible, 3, 0.08)}
        >
          <a
            href="#projects"
            className="px-6 py-3 text-[var(--color-white)] no-underline transition-opacity duration-200 hover:opacity-80"
            style={{
              borderRadius: 'var(--radius-tag)',
              backgroundColor: 'var(--color-accent)',
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--text-label)',
            }}
          >
            Ver proyectos
          </a>
          <a
            href="#about"
            className="px-6 py-3 no-underline border transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            style={{
              borderRadius: 'var(--radius-tag)',
              borderColor: 'var(--color-ink)',
              color: 'var(--color-ink)',
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--text-label)',
            }}
          >
            Sobre mí
          </a>
        </div>

        {/* Location */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'var(--text-caption)',
            color: 'var(--color-ink-secondary)',
            letterSpacing: '-0.03em',
            ...revealStyle(textReveal.visible, 4, 0.08),
          }}
        >
          Lima · Barcelona
        </p>
      </div>

      {/* Right — Avatar */}
      <div
        ref={avatarReveal.ref}
        className="flex-shrink-0"
        style={revealStyle(avatarReveal.visible, 0, 0)}
      >
        <div
          className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden"
          style={{ boxShadow: 'var(--shadow-avatar)' }}
        >
          <img
            src={HERO_PORTRAIT}
            alt="Stefanny Duarte"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
