import Tag from '../ui/Tag'

const featured = {
  title: 'Café Don Salazar',
  subtitle: 'Service Design',
  description:
    'El proyecto propone una experiencia pop-up diseñada bajo un enfoque de Service Design, donde el espacio físico se convierte en el canal principal de interacción entre la marca y su audiencia. A través de estímulos sensoriales, una capa digital de autodescubrimientos y un panel comunitario, el journey invita a los usuarios a descubrir sus preferencias, explorar diversos métodos y variedades de café, y conectar con los valores de Café Don Salazar.',
  tags: ['Service Design', 'Spatial Branding', 'Product Design'],
  image: null, // reemplaza con tu imagen: /public/cafe-don-salazar.jpg
  link: '#',
}

const otherProjects = [
  {
    id: 1,
    title: 'SOLE',
    subtitle: 'CX y omnicanalidad',
    tags: ['Service Design', 'Branding', 'Project Manager'],
    image: 'https://portafoliostefduarte.figma.site/_assets/v11/f522343723fe3e74347f0af95cf26798b8bb5104.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Kinta',
    subtitle: 'Branding',
    tags: ['Branding', 'Visual Identity'],
    image: null,
    link: '#',
  },
  {
    id: 3,
    title: 'Modulor',
    subtitle: 'Web End to End',
    tags: ['Product Design', 'Branding', 'Project Manager'],
    video: 'https://portafoliostefduarte.figma.site/_videos/v1/bb27fad4b9d586bb62d8dc9440261faaf965d935',
    link: '#',
  },
]

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
          href="#"
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
        {/* Image placeholder */}
        <div
          className="w-full md:w-[55%] flex-shrink-0 overflow-hidden"
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
              className="w-full h-full object-cover"
            />
          )}
        </div>

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
            href={featured.link}
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
              href={p.link}
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
