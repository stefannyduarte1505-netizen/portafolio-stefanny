import Tag from '../ui/Tag'

const skills = ['UX Design', 'UI Design', 'Figma', 'Prototyping', 'Research']

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-10 py-16 min-h-[calc(100vh-99px)]">
      {/* Left — Text */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1
          className="m-0 leading-[1.1] tracking-[-0.09em] font-bold"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, var(--text-display-xl))',
            color: 'var(--color-ink)',
          }}
        >
          Hola, soy
          <br />
          Stefanny Duarte
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body)',
            color: 'var(--color-ink-secondary)',
            lineHeight: '1.6',
          }}
        >
          Diseñadora UX/UI apasionada por crear experiencias digitales
          centradas en las personas.
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-4 mt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-[var(--radius-tag)] text-[var(--color-white)] text-[var(--text-label)] font-[var(--font-ui)] no-underline transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            Ver proyectos
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-[var(--radius-tag)] text-[var(--color-ink)] text-[var(--text-label)] font-[var(--font-ui)] no-underline border transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            style={{ borderColor: 'var(--color-ink)' }}
          >
            Sobre mí
          </a>
        </div>
      </div>

      {/* Right — Avatar */}
      <div className="relative flex-shrink-0">
        <div
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden"
          style={{ boxShadow: 'var(--shadow-avatar)' }}
        >
          <img
            src="/avatar.png"
            alt="Stefanny Duarte"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
