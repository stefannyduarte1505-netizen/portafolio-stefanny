import { useEffect, useRef, useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import type { Insight, DigitalProduct, GalleryItem, Person } from '../data/projectsData'
import { getLenis } from '../hooks/useLenis'
import { useLanguage } from '../contexts/LanguageContext'
import { t as tr } from '../translations'

// Map project slug → translation key for Spanish section text
const slugToTrKey: Record<string, string> = {
  sole: 'sole',
  root: 'root',
  kuna: 'kuna',
  modulor: 'modulor',
  'don-salazar': 'donSalazar',
  scollection: 'sCollection',
}

/* ══════════════════════════════════════════
   SUB-COMPONENTS — v2 CSS animations
══════════════════════════════════════════ */

function PersonaCard({ item, bgColor }: { item: Person; index?: number; bgColor?: string }) {
  const hoverBg = bgColor || '#F2F6FF'
  return (
    <article
      className="w-full md:w-[480px] lg:w-[520px] min-h-[340px] flex-shrink-0 snap-start rounded-[32px] p-8 md:p-10 flex flex-col justify-between bg-[#F5F5F5] transition-colors duration-300 group/avatar"
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = hoverBg)}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
    >
      {/* Avatar + arrow + name row */}
      <div className="flex items-center gap-2 md:gap-3 mb-6">
        {/* Avatar */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 shadow-sm border border-neutral-200">
          <img
            src={item.avatar}
            alt={item.title ?? item.tag}
            draggable={false}
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
        {/* Curved arrow — between avatar and text, revealed on hover */}
        <svg
          className="w-10 h-10 md:w-12 md:h-12 text-neutral-800 shrink-0 self-center opacity-0 -translate-x-1 transition-all duration-300 group-hover/avatar:opacity-100 group-hover/avatar:translate-x-0 pointer-events-none"
          viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 5 12 C 20 2, 35 8, 38 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M 32 22 L 38 29 L 44 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        {/* Name / tag */}
        <div className="flex flex-col gap-0.5 opacity-0 -translate-x-2 transition-all duration-300 group-hover/avatar:opacity-100 group-hover/avatar:translate-x-0">
          {item.title && (
            <h4 className="font-poppins font-normal text-base md:text-lg text-neutral-900 leading-tight">
              {item.title}
            </h4>
          )}
          <p className="font-poppins font-light text-xs text-neutral-500 uppercase tracking-widest leading-tight">
            {item.tag}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="font-poppins font-light text-neutral-800 text-sm md:text-base leading-relaxed">
        {item.description}
      </p>

      {/* Quote */}
      {item.quote && (
        <p className="font-poppins font-light text-neutral-500 text-lg md:text-xl leading-snug mt-6">
          "{item.quote}"
        </p>
      )}
    </article>
  )
}

/* ── ScrollableCards: carrusel con flechas de navegación en móvil ── */
function ScrollableCards({ children, label }: { children: React.ReactNode; label?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft]   = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Flechas — sólo visibles en móvil */}
      <div className="md:hidden flex items-center gap-2 absolute right-0 -top-10">
        <button
          onClick={() => scroll('left')}
          disabled={!canLeft}
          aria-label="Anterior"
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-200 bg-white text-neutral-600 disabled:opacity-25 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canRight}
          aria-label="Siguiente"
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-200 bg-white text-neutral-600 disabled:opacity-25 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-8 pb-6 -mx-4 px-4 md:-mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  )
}

const INSIGHT_ROTATIONS = [-1.5, 1, 1.5]

function InsightCard({ item, index = 0, insightColors, cardLabel }: { item: Insight; index?: number; insightColors?: [string, string, string]; cardLabel?: string }) {
  const cardBg = insightColors?.[index % 3] ?? '#F4F5F4'
  const rotation = INSIGHT_ROTATIONS[index % 3]
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="w-[82vw] sm:w-[320px] md:w-[360px] min-h-[420px] md:min-h-[460px] flex-shrink-0 snap-start rounded-[28px] p-7 md:p-10 flex flex-col justify-between transition-all duration-300 ease-out"
      style={{
        backgroundColor: cardBg,
        transform: hovered ? 'rotate(0deg) translateY(-8px)' : `rotate(${rotation}deg)`,
        willChange: 'transform',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <span className="font-poppins font-light text-neutral-900 text-xs md:text-sm tracking-widest uppercase">
          {cardLabel ?? 'Insight'} {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-2 font-poppins font-light text-2xl md:text-3xl text-neutral-900 leading-[1.15] tracking-tight">
          {item.title}
        </h3>
      </div>
      <p className="font-poppins font-light text-neutral-700 text-sm md:text-base leading-relaxed">
        {item.text}
      </p>
    </div>
  )
}

/* iPhone frame wrapper */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full rounded-[28px] border-[6px] border-black shadow-xl bg-black overflow-hidden">
      {/* Notch pill */}
      <span
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[13px] bg-black rounded-b-2xl z-10"
      />
      {/* Screen — height follows the image exactly */}
      <div className="relative w-full overflow-hidden bg-white">
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="w-full h-auto block object-top select-none pointer-events-none"
        />
      </div>
    </div>
  )
}

/* DigitalProductCard — card para carrusel (mobile) o grid 2×2 (desktop) */
function DigitalProductCard({ product, desktop2col = false, bgColor, index = 0 }: { product: DigitalProduct; desktop2col?: boolean; bgColor?: string; index?: number }) {
  const hasDouble = Array.isArray(product.images) && product.images.length === 2
  const isColored = index % 4 === 0 || index % 4 === 3
  const cardBg = isColored ? (bgColor || '#F4F5F4') : '#FAFAFA'
  const isNeutral = !isColored

  const cardRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setOffset({ x: nx * 10, y: ny * 7 })
  }
  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const mockupStyle = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.5s ease-out',
    willChange: 'transform' as const,
  }
  const mockupStyleInverse = {
    transform: `translate(${-offset.x}px, ${offset.y}px)`,
    transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.5s ease-out',
    willChange: 'transform' as const,
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={(e) => { setIsHovered(true); handleMouseMove(e) }}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden
        ${desktop2col ? 'w-full' : 'flex-shrink-0 snap-center w-[85vw] max-w-[600px]'}
        h-[520px]
        rounded-[48px]
        flex flex-col justify-between
        ${isNeutral ? 'border border-neutral-200/60' : ''}
      `}
      style={{ backgroundColor: cardBg }}
    >
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

      {/* Mockup(s) desde el borde inferior con parallax */}
      {product.desktop ? (
        <div className="px-10 pb-10 mt-6" style={mockupStyle}>
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
          <div className="w-[40%] max-w-[180px] translate-y-[8%]" style={mockupStyle}>
            <PhoneMockup src={product.images![0]} alt={`${product.title} A`} />
          </div>
          <div className="w-[40%] max-w-[180px] translate-y-[3%]" style={mockupStyleInverse}>
            <PhoneMockup src={product.images![1]} alt={`${product.title} B`} />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-end">
          <div className="w-[52%] max-w-[220px] translate-y-[5%]" style={mockupStyle}>
            <PhoneMockup src={product.image} alt={product.title} />
          </div>
        </div>
      )}
    </div>
  )
}

function DigitalGrid({ products, bgColor }: { products: DigitalProduct[]; bgColor?: string }) {
  return (
    <>
      {/* Mobile: horizontal carousel */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
        {products.map((p, i) => (
          <DigitalProductCard key={i} product={p} bgColor={bgColor} index={i} />
        ))}
      </div>
      {/* Desktop: 2×2 grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {products.map((p, i) => (
          <DigitalProductCard key={i} product={p} desktop2col bgColor={bgColor} index={i} />
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
  const { lang } = useLanguage() as { lang: string }

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
  const isBranding = project.category.includes('Estrategia Branding')

  // Spanish text overrides from translations file
  const trKey = slug ? slugToTrKey[slug] : undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const esTr: any = (lang === 'es' && trKey) ? (tr as any).es[trKey] : null

  const relatedProjects = useMemo(() => {
    const sameCategory = projectsData.filter(
      p => p.id !== project.id && p.category.some(cat => project.category.includes(cat))
    )
    if (sameCategory.length >= 2) return sameCategory.slice(0, 2)
    const others = projectsData.filter(
      p => p.id !== project.id && !sameCategory.find(r => r.id === p.id)
    )
    return [...sameCategory, ...others].slice(0, 2)
  }, [project])

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
              {(lang === 'es' && project.descriptionEs) ? project.descriptionEs : project.description}
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
            description={esTr?.research ?? research.description}
          >
            {/* Personas scroll */}
            {research.personas && research.personas.length > 0 && (
              <>
                <h4 className="font-poppins text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
                  01. User Personas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {research.personas.map((persona, i) => (
                    <PersonaCard key={i} item={persona} index={i} bgColor={project.bgColor} />
                  ))}
                </div>
              </>
            )}

            {/* 02. User Journey & Process Flow — canvas con puntos */}
            {project.journeyDiagram && (
              <div className="mt-16 md:mt-20">
                <h4 className="font-poppins text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
                  02. User Journey &amp; Process Flow
                </h4>
                <div className="w-full p-8 md:p-12 rounded-[32px] bg-[#F9F9FB] border border-neutral-200/80 relative overflow-hidden">
                  {/* Dot pattern — Figma Jam canvas */}
                  <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#A1A1AA 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                  />
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <img
                      src={project.journeyDiagram}
                      alt={`User Journey - ${project.title}`}
                      draggable={false}
                      className="w-full h-auto object-contain max-h-[600px] select-none pointer-events-none"
                    />
                  </div>
                </div>
                {/* customerJourney insights if any */}
                {customerJourney?.insights && customerJourney.insights.length > 0 && (
                  <ScrollableCards>
                    {customerJourney.insights.map((ins, i) => (
                      <InsightCard key={i} item={ins} index={i} insightColors={project.insightColors} />
                    ))}
                  </ScrollableCards>
                )}
              </div>
            )}

            {/* Strategic Insights / Outcomes */}
            {research.insights && research.insights.length > 0 && (
              <>
                <h4 className="font-poppins text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6 mt-16 md:mt-20">
                  {isBranding
                    ? '02. Outcomes'
                    : `${project.journeyDiagram ? '03' : '02'}. Strategic Insights`}
                </h4>
                <ScrollableCards>
                  {research.insights.map((ins, i) => (
                    <InsightCard key={i} item={ins} index={i} insightColors={project.insightColors} cardLabel={isBranding ? 'Outcome' : undefined} />
                  ))}
                </ScrollableCards>
              </>
            )}
          </Section>
        )}

        {/* 02/03 Art Direction (Branding) OR Digital Strategy (CX/Product) */}
        {digitalStrategy && (
          <Section
            number={digitalStrategy.sectionNumber}
            title={digitalStrategy.title}
            description={esTr?.digital ?? digitalStrategy.description}
          >
            {isBranding ? (
              /* ── BRANDING layout: vertical single-column gallery ── */
              <>
                {Array.isArray(project.spatialImages) && project.spatialImages.length > 0 && (
                  <div className="flex flex-col gap-6 md:gap-8 w-full">
                    {project.spatialImages.map((imgUrl, i) => (
                      <div
                        key={i}
                        className="w-full overflow-hidden rounded-[20px] bg-neutral-100 border border-neutral-200/50 shadow-sm"
                      >
                        <img
                          src={imgUrl}
                          alt={`${project.title} detail ${i + 1}`}
                          draggable={false}
                          className="w-full h-auto block object-cover select-none pointer-events-none"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* ── CX / PRODUCT layout: user flow + phone mockups + outcomes ── */
              <>
                {/* 01. Interaction & User Flows */}
                {project.userFlowDiagram && (
                  <div className="mb-12 md:mb-16">
                    <h4 className="font-poppins text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
                      01. Interaction &amp; User Flows
                    </h4>
                    <div className="w-full p-6 md:p-10 rounded-[32px] bg-[#F9F9FB] border border-neutral-200/80 relative overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-40 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#A1A1AA 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                      />
                      <div className="relative z-10 flex justify-center items-center">
                        <img
                          src={project.userFlowDiagram}
                          alt={`User Flow - ${project.title}`}
                          draggable={false}
                          className="w-full h-auto object-contain max-h-[700px] rounded-2xl select-none pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 02. Digital Ecosystem & Interfaces */}
                {digitalStrategy.products && digitalStrategy.products.length > 0 && (
                  <>
                    <h4 className="font-poppins text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
                      {project.userFlowDiagram ? '02' : '01'}. Digital Ecosystem &amp; Interfaces
                    </h4>
                    <DigitalGrid products={digitalStrategy.products} bgColor={project.bgColor} />
                  </>
                )}

                {/* Outcomes */}
                {digitalStrategy.insights && digitalStrategy.insights.length > 0 && (
                  <>
                    <h4 className="font-poppins text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6 mt-16 md:mt-20">
                      Digital Strategy Outcomes
                    </h4>
                    <ScrollableCards>
                      {digitalStrategy.insights.map((ins, i) => (
                        <InsightCard key={i} item={ins} index={i} insightColors={project.insightColors} cardLabel="Outcome" />
                      ))}
                    </ScrollableCards>
                  </>
                )}
              </>
            )}
          </Section>
        )}

        {/* 04 Spatial Branding & Signage — section with description (projects that have spatialBranding in sections) */}
        {spatialBranding && (
          <Section
            number={spatialBranding.sectionNumber}
            title={spatialBranding.title}
            description={esTr?.spatial ?? spatialBranding.description}
          >
            {/* Legacy structured gallery only when no spatialImages defined */}
            {(!project.spatialImages || project.spatialImages.length === 0) &&
              spatialBranding.gallery && spatialBranding.gallery.length > 0 && (
                <SpatialGallery gallery={spatialBranding.gallery} />
            )}
          </Section>
        )}

        {/* Spatial webp gallery — CX/Product projects only (branding renders inside Art Direction section) */}
        {!isBranding &&
          Array.isArray(project.spatialImages) &&
          project.spatialImages.filter(img => img.toLowerCase().endsWith('.webp')).length > 0 && (
          <div className="mb-16 md:mb-20">
            <h4 className="font-poppins text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
              Spatial Branding &amp; Physical Experience
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {project.spatialImages
                .filter(img => img.toLowerCase().endsWith('.webp'))
                .sort((a, b) => {
                  const numA = parseInt(a.match(/\d+/)?.[0] ?? '0', 10)
                  const numB = parseInt(b.match(/\d+/)?.[0] ?? '0', 10)
                  return numA - numB
                })
                .map((img, idx) => {
                  const isFullWidth = (idx + 1) % 3 === 0
                  return (
                    <div
                      key={idx}
                      className={`overflow-hidden rounded-[20px] bg-neutral-100 shadow-sm ${isFullWidth ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} spatial detail ${idx + 1}`}
                        draggable={false}
                        className="w-full h-auto block object-cover rounded-[20px] select-none pointer-events-none"
                      />
                    </div>
                  )
                })}
            </div>
          </div>
        )}

        {/* ── Video Gallery (projects with videos array) ── */}
        {project.videos && project.videos.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h4 className="font-poppins text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
              Campaign Content &amp; Social Reels
            </h4>

            {/* POV / horizontal videos — 2-col grid */}
            {project.videos.filter(v => v.aspect === '16/9').length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {project.videos.filter(v => v.aspect === '16/9').map((video, idx) => (
                  <div key={idx} className="overflow-hidden rounded-[20px] bg-black border border-neutral-200/50 shadow-sm">
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      aria-label={video.title}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Reels verticales (9/16) — 2-col centrada */}
            {project.videos.filter(v => v.aspect === '9/16').length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {project.videos.filter(v => v.aspect === '9/16').map((video, idx) => (
                  <div key={idx} className="aspect-[9/16] overflow-hidden rounded-[20px] bg-black border border-neutral-200/50 shadow-sm">
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      aria-label={video.title}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* ── Related Projects ── */}
      {relatedProjects.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 mt-0 pb-24">
          <div className="border-t border-neutral-200/80 pt-16">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-poppins text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                Related Projects
              </h3>
              <Link
                to="/work"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="font-poppins text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {relatedProjects.map(rel => (
                <Link
                  key={rel.id}
                  to={`/case/${rel.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="group block overflow-hidden rounded-[20px] bg-neutral-100 border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-200">
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      draggable={false}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 select-none pointer-events-none"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <span className="font-poppins text-[0.6rem] font-medium text-neutral-400 uppercase tracking-widest block mb-1">
                      {rel.category.join(' · ')}
                    </span>
                    <h4 className="font-poppins font-light text-lg text-neutral-900 group-hover:text-red-700 transition-colors leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Footer strip ── */}
      <footer className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-16 border-t border-black/[0.07] flex justify-between items-center flex-wrap gap-4">
        <p className="font-poppins font-light text-[0.6rem] tracking-[0.18em] uppercase text-neutral-300">
          sduart.com — {project.title}
        </p>
        <Link
          to="/work"
          onClick={() => window.scrollTo(0, 0)}
          className="font-poppins font-medium text-[0.6rem] tracking-[0.18em] uppercase text-red-700 border border-red-700 px-5 py-2.5 rounded-full bg-transparent hover:bg-red-700 hover:text-white transition-colors"
        >
          ← Back to projects
        </Link>
      </footer>

    </div>
  )
}
