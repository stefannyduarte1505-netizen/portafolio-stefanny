import Tag from '../ui/Tag'

const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto y el problema que resuelve.',
    tags: ['UX Research', 'UI Design', 'Figma'],
    image: '/project-1.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto y el problema que resuelve.',
    tags: ['Wireframing', 'Prototyping', 'Testing'],
    image: '/project-2.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto y el problema que resuelve.',
    tags: ['Design System', 'UI Design'],
    image: '/project-3.png',
    link: '#',
  },
]

function ProjectCard({ project }) {
  return (
    <article
      className="flex flex-col gap-4 group cursor-pointer"
      style={{ borderTop: '0.5px solid var(--color-border)', paddingTop: '1.5rem' }}
    >
      {/* Image */}
      <div
        className="w-full aspect-video rounded-xl overflow-hidden"
        style={{ backgroundColor: 'var(--color-dark)' }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-3">
        <h3
          className="m-0"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-heading-md)',
            color: 'var(--color-ink)',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body)',
            color: 'var(--color-ink-secondary)',
            lineHeight: '1.5',
          }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <a
          href={project.link}
          className="self-start text-[var(--text-label)] font-[var(--font-ui)] no-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
          style={{ color: 'var(--color-ink)' }}
        >
          Ver caso de estudio →
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
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
          Projects
        </h2>
      </div>

      {/* Right — project grid */}
      <div className="flex flex-col gap-10 md:w-2/3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
