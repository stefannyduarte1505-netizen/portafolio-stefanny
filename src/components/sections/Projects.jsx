import Tag from '../ui/Tag'
import { projects } from '../../data/projects'

const featured = projects.find((p) => p.featured)
const otherProjects = projects.filter((p) => !p.featured)

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-10 py-20"
      style={{ borderTop: '1px solid var(--color-dark)' }}
    >
      {/* Section header */}
      <div className="flex items-baseline justify-between mb-12">
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
          href="/#projects"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'var(--text-heading-lg)',
            color: 'var(--color-accent)',
            textDecoration: 'underline',
            textUnderlinePosition: 'from-font',
            letterSpacing: '-0.045em',
          }}
        >
          Explore More Projects
        </a>
      </div>

      {/* Featured project */}
      <article
        className="flex flex-col md:flex-row gap-12 pb-16"
        style={{ borderTop: '0.5px solid var(--color-border)', paddingTop: '2.5rem' }}
      >
        {/* Image */}
        <a
          href={`/project/${featured.id}`}
          className="w-full md:w-[55%] flex-shrink-0 overflow-hidden block"
          style={{
            aspectRatio: '16/10',
            backgroundColor: 'var(--color-dark)',
            borderRadius: '4px',
          }}
        >
          {featured.image && (
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          )}
        </a>

        {/* Meta */}
        <div className="flex flex-col gap-5 justify-center">
          <div>
            <h3
              className="m-0"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, var(--text-display-lg))',
                color: 'var(--color-ink)',
                letterSpacing: '-0.045em',
                lineHeight: 1.2,
              }}
            >
              {featured.title}
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
              {featured.subtitle}
            </p>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--text-body)',
              color: 'var(--color-ink)',
              lineHeight: 1.6,
            }}
          >
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <a
            href={`/project/${featured.id}`}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'var(--text-body)',
              color: 'var(--color-accent)',
              textDecoration: 'underline',
              textUnderlinePosition: 'from-font',
            }}
          >
            See Project →
          </a>
        </div>
      </article>

      {/* Other Projects */}
      <div className="mt-16">
        <h3
          className="mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'var(--text-heading-lg)',
            color: 'var(--color-ink)',
            letterSpacing: '-0.045em',
          }}
        >
          Other Projects
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {otherProjects.map((p) => (
            <a
              key={p.id}
              href={`/project/${p.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="group flex flex-col gap-3">
                <div
                  style={{
                    aspectRatio: '4/3',
                    backgroundColor: 'var(--color-dark)',
                    overflow: 'hidden',
                    borderRadius: '4px',
                  }}
                >
                  {p.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    >
                      <source src={p.video} />
                    </video>
                  ) : p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div>
                  <p
                    className="m-0"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'var(--text-heading-lg)',
                      color: 'var(--color-ink)',
                      letterSpacing: '-0.045em',
                    }}
                  >
                    {p.title}
                  </p>
                  <p
                    className="m-0"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontSize: 'var(--text-body)',
                      color: 'var(--color-accent)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {p.subtitle}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body)',
                    color: 'var(--color-accent)',
                    textDecoration: 'underline',
                  }}
                >
                  See Project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
