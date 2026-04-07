import Tag from '../ui/Tag'

const skills = ['Service Design', 'CX Design', 'Product Design', 'Branding', 'UX Strategy']

const AVATAR = 'https://portafoliostefduarte.figma.site/_assets/v11/6bd60f16ef6da3cc25671f4ad02961d76aa18ec7.png'

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-10 py-16 min-h-[calc(100vh-99px)]">
      {/* Left — Text */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1
          className="m-0 font-bold"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, var(--text-display-xl))',
            letterSpacing: '-0.045em',
            lineHeight: 1.2,
            color: 'var(--color-ink)',
          }}
        >
          Hola,{' '}
          <span style={{ color: 'var(--color-accent)' }}>
            soy Stefanny
          </span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'var(--text-body)',
            color: 'var(--color-ink)',
            lineHeight: 1.6,
            maxWidth: '520px',
          }}
        >
          Diseñadora con más de 6 años de experiencia en proyectos de retail y
          corporativos, trabajando en la intersección entre experiencia, marca y espacio.
          Especializada en Diseño CX, Diseño de Producto, Branding y Branding Espacial.
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-4 mt-2">
          <a
            href="#projects"
            className="px-6 py-3 text-[var(--color-white)] no-underline transition-opacity duration-200 hover:opacity-90"
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
          }}
        >
          Lima · Barcelona
        </p>
      </div>

      {/* Right — Avatar */}
      <div className="flex-shrink-0">
        <div
          className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden"
          style={{ boxShadow: 'var(--shadow-avatar)' }}
        >
          <img
            src={AVATAR}
            alt="Stefanny Duarte"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
