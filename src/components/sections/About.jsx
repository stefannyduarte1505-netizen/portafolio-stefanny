import Tag from '../ui/Tag'

const tools = ['Figma', 'FigJam', 'Notion', 'Miro', 'Maze', 'Zeplin']

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row gap-16 px-10 py-20"
      style={{ borderTop: '0.5px solid var(--color-border)' }}
    >
      {/* Left — sticky label */}
      <div className="md:w-1/3 flex-shrink-0">
        <h2
          className="m-0 sticky top-24"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-display-md)',
            color: 'var(--color-ink)',
            letterSpacing: '-0.05em',
          }}
        >
          About
        </h2>
      </div>

      {/* Right — content */}
      <div className="flex flex-col gap-8 md:w-2/3">
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body)',
            color: 'var(--color-ink-secondary)',
            lineHeight: '1.6',
          }}
        >
          Soy diseñadora UX/UI con enfoque en diseño centrado en el usuario.
          Me apasiona resolver problemas complejos a través del diseño y crear
          experiencias que sean tanto funcionales como estéticamente agradables.
        </p>

        <div
          className="p-6 rounded-2xl"
          style={{ backgroundColor: 'var(--color-dark)' }}
        >
          <h3
            className="m-0 mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-heading-md)',
              color: 'var(--color-white)',
            }}
          >
            Herramientas
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Tag key={tool} label={tool} variant="dark" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
