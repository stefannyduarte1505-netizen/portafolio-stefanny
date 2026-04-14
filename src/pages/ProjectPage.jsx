import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Tag from '../components/ui/Tag'
import { getProject, projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
        <Navbar />
        <div className="px-10 py-32 text-center">
          <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
            Proyecto no encontrado.
          </p>
          <Link to="/#projects" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
            ← Volver a proyectos
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const currentIndex = projects.findIndex((p) => p.id === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section className="px-10 pt-12 pb-0">
        <div
          className="w-full overflow-hidden"
          style={{
            aspectRatio: '16/9',
            backgroundColor: 'var(--color-dark)',
            borderRadius: '4px',
          }}
        >
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project.video} />
            </video>
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
      </section>

      {/* Title + meta */}
      <section
        className="px-10 py-12"
        style={{ borderBottom: '0.5px solid var(--color-border)' }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'var(--text-heading-lg)',
                color: 'var(--color-accent)',
                letterSpacing: '-0.045em',
                margin: '0 0 4px',
              }}
            >
              {project.subtitle}
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 6vw, var(--text-display-lg))',
                color: 'var(--color-ink)',
                letterSpacing: '-0.045em',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {project.title}
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      {project.description && (
        <section className="px-10 py-12" style={{ maxWidth: '780px' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--text-body)',
              color: 'var(--color-ink)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {project.description}
          </p>
        </section>
      )}

      {/* Next project */}
      <section
        className="px-10 py-16 mt-auto"
        style={{ borderTop: '0.5px solid var(--color-border)' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'var(--text-body)',
            color: 'var(--color-accent)',
            letterSpacing: '-0.02em',
            margin: '0 0 8px',
          }}
        >
          Siguiente proyecto
        </p>
        <Link
          to={`/project/${nextProject.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h2
            className="m-0 hover:opacity-70 transition-opacity"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, var(--text-display-lg))',
              color: 'var(--color-ink)',
              letterSpacing: '-0.045em',
              lineHeight: 1.1,
            }}
          >
            {nextProject.title} →
          </h2>
        </Link>
      </section>

      <Footer />
    </div>
  )
}
