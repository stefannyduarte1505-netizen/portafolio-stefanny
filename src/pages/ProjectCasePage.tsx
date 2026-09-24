import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import type { Insight, DigitalProduct, GalleryItem, Person } from '../data/projectsData'

/* ══════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════ */

function PersonaCard({ item }: { item: Person }) {
  return (
    <article className="
      w-full
      pt-10 pr-10 pb-10 pl-10
      rounded-[16px] border border-[#9A0809] bg-[#F4F5F4]
      flex flex-col items-start gap-3
    ">
      {/* Tag */}
      <span className="font-poppins text-[0.6rem] tracking-[0.18em] uppercase text-[#9A0809]">
        {item.tag}
      </span>

      {/* Avatar */}
      <div className="w-14 h-14 rounded-full overflow-hidden border border-[#9A0809]/20 shrink-0">
        <img
          src={item.avatar}
          alt={item.title ?? item.tag}
          draggable={false}
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      {/* Name (optional) */}
      {item.title && (
        <p className="font-poppins font-light text-xl leading-tight text-neutral-900">
          {item.title}
        </p>
      )}

      {/* Description */}
      <p className="font-poppins font-light text-sm leading-[1.85] text-neutral-500">
        {item.description}
      </p>

      {/* Quote (optional) */}
      {item.quote && (
        <blockquote className="mt-4 pt-6 border-t border-[#9A0809]/20 w-full">
          <p className="font-gilda text-base leading-relaxed text-[#9A0809]/60 italic">
            "{item.quote}"
          </p>
        </blockquote>
      )}
    </article>
  )
}

function InsightCard({ item, index = 0 }: { item: Insight; index?: number }) {
  return (
    <article className="
      w-full
      pt-8 pr-8 pb-8 pl-8
      rounded-[16px] bg-[#F4F5F4]
      flex flex-col items-start gap-3
    ">
      {/* Counter */}
      <span className="font-poppins font-light text-[0.55rem] tracking-[0.2em] uppercase text-neutral-300">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title */}
      <p className="font-poppins font-semibold text-[0.65rem] tracking-[0.18em] uppercase text-[#9A0809]">
        {item.title}
      </p>

      {/* Body */}
      <p className="font-poppins font-light text-sm leading-[1.85] text-neutral-500">
        {item.text}
      </p>
    </article>
  )
}

/* DigitalProductCard — phone frame per Figma spec */
function DigitalProductCard({ product }: { product: DigitalProduct }) {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="
        w-full aspect-[3/5]
        rounded-[32px] bg-[#D9D9D9]
        overflow-hidden flex items-center justify-center
      ">
        <img
          src={product.image}
          alt={product.title}
          draggable={false}
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>
      <div className="px-2">
        <p className="font-poppins font-medium text-[0.65rem] tracking-widest uppercase text-neutral-800 mb-1">
          {product.title}
        </p>
        {product.description && (
          <p className="font-poppins font-light text-xs text-neutral-400 leading-relaxed">
            {product.description}
          </p>
        )}
      </div>
    </div>
  )
}

function LaptopFrame({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-full max-w-[720px] mx-auto">
      <div className="rounded-t-xl border-[8px] border-b-0 border-neutral-900 bg-neutral-900 overflow-hidden">
        <div className="flex justify-center py-2 bg-neutral-900">
          <div className="w-2 h-2 rounded-full bg-neutral-600" />
        </div>
        <div className="bg-white">
          <img
            src={src}
            alt={title}
            draggable={false}
            className="block w-full h-auto select-none pointer-events-none"
          />
        </div>
      </div>
      <div className="h-3.5 bg-neutral-800 rounded-b" />
      <div className="w-[40%] h-2 bg-neutral-900 rounded-b-lg mx-auto" />
    </div>
  )
}

function DigitalGrid({ products }: { products: DigitalProduct[] }) {
  /* detect laptop by filename: desktop-*.webp → laptop frame */
  const isDesktop = products.length === 1 && products[0].image.includes('desktop')

  if (isDesktop) {
    return <LaptopFrame src={products[0].image} title={products[0].title} />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((p, i) => (
        <DigitalProductCard key={i} product={p} />
      ))}
    </div>
  )
}

function SpatialGallery({ gallery }: { gallery: GalleryItem[] }) {
  const [first, ...rest] = gallery
  return (
    <div className="flex flex-col gap-4">
      {first && (
        <figure className="m-0">
          <div className="w-full aspect-[16/7] bg-neutral-100 rounded-lg overflow-hidden">
            <img
              src={first.image}
              alt={first.caption ?? ''}
              draggable={false}
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
          {first.caption && (
            <figcaption className="font-poppins font-light text-[0.6rem] tracking-widest uppercase text-neutral-400 mt-2">
              {first.caption}
            </figcaption>
          )}
        </figure>
      )}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((item, i) => (
            <figure key={i} className="m-0">
              <div className="w-full aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption ?? ''}
                  draggable={false}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
              {item.caption && (
                <figcaption className="font-poppins font-light text-[0.6rem] tracking-widest uppercase text-neutral-400 mt-2">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}

/* Section wrapper with ordinal heading */
function Section({
  number,
  title,
  description,
  children,
}: {
  number: string
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 pb-6 border-b border-black/[0.07]">
        <span className="font-poppins font-light text-[0.55rem] tracking-[0.2em] uppercase text-neutral-300">
          {number}
        </span>
        <h2 className="font-poppins font-light text-[30px] md:text-[48px] leading-[1] text-neutral-900">
          {title}
        </h2>
        {description && (
          <p className="font-poppins font-light text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function ProjectCasePage() {
  const { slug } = useParams<{ slug: string }>()
  const project  = projectsData.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="font-gilda text-2xl text-neutral-900">Proyecto no encontrado.</p>
      </div>
    )
  }

  const { research, customerJourney, digitalStrategy, spatialBranding } = project.sections

  return (
    <div className="bg-white min-h-screen">

      {/* ── 1. Hero image ── */}
      <div className="w-full px-4 md:px-8 pt-28 pb-12">
        <div className="max-w-[1598px] mx-auto">
          <div className="w-full aspect-[1598/691] rounded-lg overflow-hidden bg-neutral-100">
            <img
              src={project.heroImage}
              alt={project.title}
              loading="eager"
              draggable={false}
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* ── 2. Header & Metadata ── */}
      <div className="max-w-[1598px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Left — title + description + tags */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <h1 className="font-poppins font-light text-[48px] leading-[1] text-neutral-900">
              {project.title}
            </h1>
            <p className="font-poppins font-light text-lg text-neutral-500 leading-relaxed max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="font-poppins font-light text-xs uppercase tracking-widest rounded-full border border-black/20 px-3 py-1 text-neutral-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — meta */}
          <div className="md:col-span-4 flex flex-col divide-y divide-black/[0.07]">
            {(
              [
                { label: 'ROL',      value: project.meta.role      },
                { label: 'TIMELINE', value: project.meta.timeline  },
                { label: 'EQUIPO',   value: project.meta.team      },
                ...(project.meta.advisors
                  ? [{ label: 'ADVISORS', value: project.meta.advisors }]
                  : []),
              ]
            ).map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1 py-4">
                <span className="font-poppins font-semibold text-xs uppercase tracking-widest text-neutral-400">
                  {label}
                </span>
                <span className="font-poppins font-light text-sm text-neutral-600 leading-relaxed">
                  {value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── 3. Case study sections ── */}
      <div className="max-w-[1598px] mx-auto px-4 md:px-8 flex flex-col gap-24 pb-32">

        {/* 01 Research & Strategy */}
        {research && (
          <Section
            number={research.sectionNumber}
            title={research.title}
            description={research.description}
          >
            {/* Personas grid */}
            {research.personas && research.personas.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {research.personas.map((persona, i) => (
                  <PersonaCard key={i} item={persona} />
                ))}
              </div>
            )}

            {/* Insights grid (research can have both) */}
            {research.insights && research.insights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {research.insights.map((ins, i) => (
                  <InsightCard key={i} item={ins} index={i} />
                ))}
              </div>
            )}
          </Section>
        )}

        {/* 02 Customer Journey Map */}
        {customerJourney && (
          <Section
            number={customerJourney.sectionNumber}
            title={customerJourney.title}
            description={customerJourney.subtitle}
          >
            {/* Panoramic journey image */}
            <div className="w-full rounded-lg overflow-hidden bg-neutral-100">
              <img
                src={customerJourney.image}
                alt={customerJourney.title}
                draggable={false}
                className="w-full h-auto select-none pointer-events-none"
              />
            </div>

            {/* Insights (optional) */}
            {customerJourney.insights && customerJourney.insights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {customerJourney.insights.map((ins, i) => (
                  <InsightCard key={i} item={ins} index={i} />
                ))}
              </div>
            )}
          </Section>
        )}

        {/* 03 Digital Strategy */}
        {digitalStrategy && (
          <Section
            number={digitalStrategy.sectionNumber}
            title={digitalStrategy.title}
            description={digitalStrategy.description}
          >
            {/* Digital product mockups */}
            {digitalStrategy.products && digitalStrategy.products.length > 0 && (
              <DigitalGrid products={digitalStrategy.products} />
            )}

            {/* Insights (optional) */}
            {digitalStrategy.insights && digitalStrategy.insights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {digitalStrategy.insights.map((ins, i) => (
                  <InsightCard key={i} item={ins} index={i} />
                ))}
              </div>
            )}
          </Section>
        )}

        {/* 04 Spatial Branding & Signage */}
        {spatialBranding && (
          <Section
            number={spatialBranding.sectionNumber}
            title={spatialBranding.title}
            description={spatialBranding.description}
          >
            {spatialBranding.gallery && spatialBranding.gallery.length > 0 && (
              <SpatialGallery gallery={spatialBranding.gallery} />
            )}
          </Section>
        )}

      </div>

      {/* ── Footer strip ── */}
      <footer className="max-w-[1598px] mx-auto px-4 md:px-8 py-16 border-t border-black/[0.07] flex justify-between items-center flex-wrap gap-4">
        <p className="font-poppins font-light text-[0.6rem] tracking-[0.18em] uppercase text-neutral-300">
          sduart.com — {project.title}
        </p>
        <button
          onClick={() => {
            sessionStorage.setItem('scrollToGallery', '1')
            window.location.href = '/'
          }}
          className="font-poppins font-medium text-[0.6rem] tracking-[0.18em] uppercase text-red-700 border border-red-700 px-5 py-2.5 rounded-full bg-transparent hover:bg-red-700 hover:text-white transition-colors"
        >
          ← Back to projects
        </button>
      </footer>

    </div>
  )
}
