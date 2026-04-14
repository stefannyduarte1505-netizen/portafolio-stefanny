import Tag from '../ui/Tag'
import { projects } from '../../data/projects'
import { useReveal, revealStyle } from '../../hooks/useScrollReveal'

const featured = projects.find((p) => p.featured)
const otherProjects = projects.filter((p) => !p.featured)

/* ── Hexagonal image container ────────────────────────── */
function HexImage({ src, video, alt }) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '1 / 1.15',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-dark)',
      }}
    >
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={video} />
        </video>
      ) : src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : null}
    </div>
  )
}

export default function Projects() {
  const headerReveal = useReveal()
  const featuredReveal = useReveal(0.08)
  const gridReveal = useReveal(0.08)

  return (
    <section
      id="projects"
      className="px-6 md:px-10 py-20"
      style={{ borderTop: '1px solid var(--color-dark)' }}
    >
      {/* Section header */}
      <div
        ref={headerReveal.ref}
        className="flex items-baseline justify-between mb-12"
        style={revealStyle(headerReveal.visible)}
      >
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
      </div>

      {/* ── Featured project ─────────────────────────── */}
      <article
        ref={featuredReveal.ref}
        className="flex flex-col md:flex-row gap-10 md:gap-16 pb-16"
        style={{
          ...revealStyle(featuredReveal.visible),
          borderTop: '0.5px solid var(--color-border)',
          paddingTop: '2.5rem',
        }}
      >
        {/* Image */}
        <a
          href={`/project/${featured.id}`}
          className="w-full md:w-[55%] flex-shrink-0 block overflow-hidden"
          style={{ borderRadius: '4px', aspectRatio: '16/10', backgroundColor: 'var(--color-dark)' }}
        >
          {featured.image && (
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
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
                lineHeight: 1.15,
              }}
            >
              {featured.title}
            </h3>
            <p
              className="m-0"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'var(--text-heading-lg)',
                color: 'var(--color-accent)',
                letterSpacing: '-0.045em',
                lineHeight: 1.2,
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
              color: 'var(--color-ink-secondary)',
              lineHeight: 1.65,
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
              fontWeight: 400,
              fontSize: 'var(--text-body)',
              color: 'var(--color-accent)',
              textDecoration: 'underline',
              textUnderlinePosition: 'from-font',
            }}
          >
            Ver proyecto →
          </a>
        </div>
      </article>

      {/* ── Other Projects grid ───────────────────────── */}
      <div className="mt-20">
        <h3
          className="mb-10"
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
          ref={gridReveal.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {otherProjects.map((p, i) => (
            <a
              key={p.id}
              href={`/project/${p.id}`}
              className="group no-underline flex flex-col gap-4"
              style={{
                ...revealStyle(gridReveal.visible, i, 0.1),
                color: 'inherit',
              }}
            >
              {/* Hexagonal image */}
              <div
                style={{
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="group-hover:scale-[1.04]"
              >
                <HexImage
                  src={p.image}
                  video={p.video}
                  alt={p.title}
                />
              </div>

              {/* Text */}
              <div>
                <p
                  className="m-0"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'var(--text-heading-md)',
                    color: 'var(--color-ink)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </p>
                <p
                  className="m-0 mb-2"
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
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-label)',
                  color: 'var(--color-accent)',
                  textDecoration: 'underline',
                  textUnderlinePosition: 'from-font',
                }}
              >
                Ver proyecto →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
