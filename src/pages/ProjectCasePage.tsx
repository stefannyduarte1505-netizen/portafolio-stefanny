import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import type { Insight, DigitalProduct, GalleryItem, Person } from '../data/projectsData'
import { getLenis } from '../hooks/useLenis'

/* ══════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════ */

function PersonaCard({ item }: { item: Person }) {
  return (
    <article className="
      w-full rounded-[32px] p-8 md:p-10 bg-[#F4F5F4]
      min-h-[600px] flex flex-col gap-6
    ">
      {/* Header: avatar + name / role */}
      <div className="flex items-start gap-5">
        <img
          src={item.avatar}
          alt={item.title ?? item.tag}
          draggable={false}
          className="w-28 h-28 rounded-[16px] object-cover shrink-0 select-none pointer-events-none"
        />
        <div className="flex flex-col justify-center gap-1 pt-1">
          {item.title && (
            <p className="font-poppins font-bold text-xl leading-tight text-neutral-900">
              {item.title}
            </p>
          )}
          <p className="font-poppins font-bold text-xl leading-tight text-neutral-900">
            {item.tag}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="font-poppins text-base text-neutral-700 leading-relaxed">
        {item.description}
      </p>

      {/* Quote — large gilda red, no separator */}
      {item.quote && (
        <p className="font-gilda text-[1.75rem] leading-snug text-[#9E1B22] mt-auto">
          "{item.quote}"
        </p>
      )}
    </article>
  )
}

function InsightCard({ item, index = 0 }: { item: Insight; index?: number }) {
  return (
    <article className="
      w-full rounded-[20px] p-6 md:p-8 bg-[#F4F5F4]
      flex flex-col gap-4 justify-start
    ">
      <p className="font-poppins font-medium text-xl text-[#9E1B22] leading-none">
        Insight {index + 1}
      </p>
      <p className="font-poppins font-normal text-base text-neutral-800 leading-relaxed">
        {item.text}
      </p>
    </article>
  )
}

/* iPhone frame wrapper */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[28px] border-[6px] border-black shadow-xl bg-black"
      style={{ aspectRatio: '9 / 19.5' }}
    >
      {/* Notch pill */}
      <span
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[13px] bg-black rounded-b-2xl z-10"
      />
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="w-full h-full object-cover select-none pointer-events-none"
      />
    </div>
  )
}

/* DigitalProductCard — card para carrusel (mobile) o grid 2×2 (desktop) */
function DigitalProductCard({ product, desktop2col = false }: { product: DigitalProduct; desktop2col?: boolean }) {
  const hasDouble = Array.isArray(product.images) && product.images.length === 2

  return (
    <div className={`
      relative overflow-hidden
      ${desktop2col ? 'w-full' : 'flex-shrink-0 snap-center w-[85vw] max-w-[600px]'}
      h-[520px]
      rounded-[48px] bg-[#F4F5F4]
      flex flex-col justify-between
    `}>
      {/* Texto arriba */}
      <div className="p-10 pb-0">
        <p className="font-poppins font-medium text-xl md:text-2xl text-neutral-900 leading-tight mb-2">
          {product.title}
        </p>
        {product.description && (
          <p className="font-poppins font-normal text-sm md:text-base text-neutral-600 leading-relaxed mt-1">
            {product.description}
          </p>
        )}
      </div>

      {/* Mockup(s) desde el borde inferior */}
      {product.desktop ? (
        <div className="px-10 pb-10 mt-6">
          <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              draggable={false}
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </div>
        </div>
      ) : hasDouble ? (
        <div className="w-full flex justify-center items-end gap-3">
          <div className="w-[40%] max-w-[180px] translate-y-[20%]">
            <PhoneMockup src={product.images![0]} alt={`${product.title} A`} />
          </div>
          <div className="w-[40%] max-w-[180px] translate-y-[12%]">
            <PhoneMockup src={product.images![1]} alt={`${product.title} B`} />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-end">
          <div className="w-[52%] max-w-[220px] translate-y-[15%]">
            <PhoneMockup src={product.image} alt={product.title} />
          </div>
        </div>
      )}
    </div>
  )
}

function DigitalGrid({ products }: { products: DigitalProduct[] }) {
  return (
    <>
      {/* Mobile: horizontal carousel */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
        {products.map((p, i) => (
          <DigitalProductCard key={i} product={p} />
        ))}
      </div>
      {/* Desktop: 2×2 grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <DigitalProductCard key={i} product={p} desktop2col />
        ))}
      </div>
    </>
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

/* Accordion section — full-width, toggle on header click */
function Section({
  number,
  title,
  description,
  children,
  defaultOpen = true,
}: {
  number: string
  title: string
  description?: string
  children?: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className="w-full flex flex-col">
      {/* ── Header row ── */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="
          w-full flex items-center justify-between
          py-6 border-b border-black/[0.07]
          text-left cursor-pointer bg-transparent
        "
      >
        <div className="flex flex-col gap-1">
          <span className="font-poppins font-light text-[0.55rem] tracking-[0.2em] uppercase text-neutral-300">
            {number}
          </span>
          <h2 className="font-poppins font-light text-[30px] md:text-[48px] leading-[1] text-neutral-900">
            {title}
          </h2>
        </div>

        {/* Circular toggle button */}
        <span
          aria-hidden
          className="
            shrink-0 w-10 h-10 rounded-full bg-neutral-200
            flex items-center justify-center
            transition-transform duration-300
          "
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          {/* Chevron down */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6L8 11L13 6" stroke="#1A1815" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {/* ── Collapsible body ── */}
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? '9999px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="flex flex-col gap-12 md:gap-16 pt-10 pb-4">
          {description && (
            <div className="flex flex-col gap-5">
              {(Array.isArray(description) ? description : description.split('\n\n')).map((p, i) => (
                <p key={i} className="font-poppins font-light text-base md:text-lg text-neutral-500 leading-relaxed w-full">
                  {p}
                </p>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function ProjectCasePage() {
  const { slug } = useParams<{ slug: string }>()
  const project  = projectsData.find(p => p.slug === slug)

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="font-gilda text-2xl text-neutral-900">Proyecto no encontrado.</p>
      </div>
    )
  }

  const { research, customerJourney, digitalStrategy, spatialBranding } = project.sections

  return (
    <div className="bg-white min-h-screen pt-[4.5rem]">

      {/* ── 1. Hero image ── */}
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 pt-10 pb-12">
        <div className="max-w-[1600px] mx-auto">
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
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-12">
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
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 flex flex-col gap-24 pb-32">

        {/* 01 Research & Strategy (incluye Customer Journey Map si existe) */}
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

            {/* Insights grid */}
            {research.insights && research.insights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {research.insights.map((ins, i) => (
                  <InsightCard key={i} item={ins} index={i} />
                ))}
              </div>
            )}

            {/* Customer Journey Map — imagen limpia dentro de Research */}
            {customerJourney && (
              <div className="flex flex-col gap-4 w-full">
                {customerJourney.subtitle && (
                  <p className="font-poppins font-light text-base text-neutral-500 leading-relaxed">
                    {customerJourney.subtitle}
                  </p>
                )}
                <img
                  src={customerJourney.image}
                  alt={customerJourney.title}
                  draggable={false}
                  className="w-full h-auto object-contain bg-transparent select-none pointer-events-none"
                />
                {customerJourney.insights && customerJourney.insights.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {customerJourney.insights.map((ins, i) => (
                      <InsightCard key={i} item={ins} index={i} />
                    ))}
                  </div>
                )}
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
      <footer className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-16 border-t border-black/[0.07] flex justify-between items-center flex-wrap gap-4">
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
