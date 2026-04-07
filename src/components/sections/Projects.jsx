import Tag from '../ui/Tag'

const projects = [
  {
    id: 1,
    title: 'SOLE',
    subtitle: 'CX y omnicanalidad',
    description:
      'Estrategia de experiencia omnicanal para el sector retail. Optimizamos el customer journey mediante herramientas digitales de personalización y una reducción estratégica de la carga visual en tienda.',
    tags: ['Service Design', 'Branding', 'Project Manager'],
    image: 'https://portafoliostefduarte.figma.site/_assets/v11/f522343723fe3e74347f0af95cf26798b8bb5104.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Modulor',
    subtitle: 'Web End to End',
    description:
      'Rebranding integral y estrategia digital end-to-end. Lideré la evolución de la identidad visual y el despliegue de su plataforma global, gestionando el proyecto desde la ideación hasta el lanzamiento final.',
    tags: ['Product Design', 'Branding', 'Project Manager'],
    video: 'https://portafoliostefduarte.figma.site/_videos/v1/bb27fad4b9d586bb62d8dc9440261faaf965d935',
    link: '#',
  },
]

function ProjectCard({ project }) {
  return (
    <article
      className="flex flex-col md:flex-row gap-8 py-10 group"
      style={{ borderTop: '0.5px solid var(--color-border)' }}
    >
      {/* Media */}
      <div
        className="w-full md:w-[45%] flex-shrink-0 rounded-xl overflow-hidden"
        style={{ aspectRatio: '617.5/590', backgroundColor: 'var(--color-dark)' }}
      >
        {project.video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          >
            <source src={project.video} />
          </video>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-4 justify-center">
        <div>
          <h3
            className="m-0"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3vw, var(--text-display-lg))',
              color: 'var(--color-ink)',
              letterSpacing: '-0.045em',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'var(--text-heading-lg)',
              color: 'var(--color-accent)',
              letterSpacing: '-0.045em',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {project.subtitle}
          </p>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'var(--text-body)',
            color: 'var(--color-ink)',
            lineHeight: 1.5,
          }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col md:flex-row gap-16 px-10 py-20"
      style={{ borderTop: '1px solid var(--color-dark)' }}
    >
      {/* Left — sticky label */}
      <div className="md:w-1/4 flex-shrink-0">
        <div className="sticky top-24 flex flex-col gap-4">
          <h2
            className="m-0"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'var(--text-display-lg)',
              color: 'var(--color-accent)',
              letterSpacing: '-0.045em',
              lineHeight: 1.2,
            }}
          >
            Projects
          </h2>
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'var(--text-heading-lg)',
              color: 'var(--color-accent)',
              textDecoration: 'underline',
              textUnderlinePosition: 'from-font',
              lineHeight: 1.2,
            }}
          >
            Explore More Projects
          </a>
        </div>
      </div>

      {/* Right — project list */}
      <div className="flex flex-col md:w-3/4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
