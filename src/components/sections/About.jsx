const services = [
  {
    title: 'Experience Design (CX & UX Strategy)',
    description:
      'Diseño experiencias holísticas de usuario y de cliente que alinean las necesidades del usuario con los objetivos de negocio y el propósito de marca. Mi enfoque integra el mapeo de procesos (journey mapping), diseño de puntos de contacto, marcos de decisión basados en datos y planeación estratégica de UX.',
  },
  {
    title: 'Visual & Art Direction',
    description:
      'Estratega de Experiencia: Conecto las necesidades del usuario con el propósito de marca para generar impacto en el negocio. Especialista en el diseño de ecosistemas de interacción, frameworks de decisión informados por datos y el desarrollo de hojas de ruta estratégicas para UX.',
  },
  {
    title: 'Motion & Interaction',
    description:
      'Creación de sistemas dinámicos y micro-interacciones que elevan la narrativa de marca, mejorando el engagement y la respuesta emocional del usuario a través de experiencias animadas e interactivas.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row gap-16 px-10 py-20"
      style={{ borderTop: '1px solid var(--color-dark)' }}
    >
      {/* Left — sticky label */}
      <div className="md:w-1/3 flex-shrink-0">
        <h2
          className="m-0 sticky top-24"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'var(--text-display-md)',
            color: 'var(--color-accent)',
            letterSpacing: '-0.03em',
            lineHeight: 1.35,
          }}
        >
          Services
        </h2>
      </div>

      {/* Right — bio + services */}
      <div className="flex flex-col gap-10 md:w-2/3">
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'var(--text-body)',
            color: 'var(--color-ink)',
            lineHeight: 1.6,
          }}
        >
          Diseñadora Estratégica con más de 6 años de experiencia en proyectos de retail
          y corporativos, trabajando en la intersección entre experiencia, marca y espacio.
          Especializada en Diseño CX, Diseño de Producto, Branding y Branding Espacial,
          con un enfoque en la creación de experiencias basadas en investigación que se
          traducen en soluciones coherentes, funcionales y alineadas con los objetivos de negocio.
        </p>

        <div className="flex flex-col gap-8">
          {services.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-3 pt-6"
              style={{ borderTop: '0.5px solid var(--color-border)' }}
            >
              <h3
                className="m-0"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'var(--text-heading-lg)',
                  color: 'var(--color-accent)',
                  letterSpacing: '-0.045em',
                  lineHeight: 1.03,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: 'var(--text-body)',
                  color: 'var(--color-ink)',
                  lineHeight: 1.6,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
