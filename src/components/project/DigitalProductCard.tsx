import type { DigitalCardBlock } from '../../data/projectsData'

type Props = Pick<DigitalCardBlock, 'title' | 'description' | 'variant' | 'images'>

/* ── Phone frame ── */
function PhoneFrame({ src }: { src: string }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 'clamp(140px, 18vw, 220px)',
        borderRadius: '2.5rem',
        border: '6px solid #1A1815',
        boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
        backgroundColor: '#1A1815',
        overflow: 'hidden',
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        style={{
          width: '28%',
          height: '20px',
          backgroundColor: '#1A1815',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
      />
      <img
        src={src}
        alt=""
        draggable={false}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
    </div>
  )
}

/* ── Laptop frame ── */
function LaptopFrame({ src }: { src: string }) {
  return (
    <div className="relative w-full max-w-[720px] mx-auto">
      {/* Screen */}
      <div
        style={{
          borderRadius: '12px 12px 0 0',
          border: '8px solid #1A1815',
          borderBottom: 'none',
          backgroundColor: '#1A1815',
          overflow: 'hidden',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
        }}
      >
        {/* Camera dot */}
        <div
          className="flex justify-center py-2"
          style={{ backgroundColor: '#1A1815' }}
        >
          <div className="w-2 h-2 rounded-full bg-neutral-600" />
        </div>
        <div style={{ backgroundColor: '#fff' }}>
          <img
            src={src}
            alt=""
            draggable={false}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
        </div>
      </div>
      {/* Base */}
      <div
        style={{
          height: '14px',
          backgroundColor: '#2a2a2a',
          borderRadius: '0 0 4px 4px',
          boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
        }}
      />
      <div
        className="mx-auto"
        style={{
          width: '40%',
          height: '8px',
          backgroundColor: '#222',
          borderRadius: '0 0 8px 8px',
        }}
      />
    </div>
  )
}

export default function DigitalProductCard({ title, description, variant, images }: Props) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        backgroundColor: '#F5F4F1',
        padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      {/* Header */}
      <div
        className="mb-[clamp(2.5rem,5vw,4rem)]"
        style={{ maxWidth: '520px' }}
      >
        <h3
          style={{
            fontFamily: "'Gilda Display', serif",
            fontWeight: 400,
            fontSize: 'clamp(1.4rem, 2.2vw, 2.2rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: '#1A1815',
            marginBottom: '0.75rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(0.85rem, 1vw, 1rem)',
            lineHeight: 1.7,
            color: 'rgba(26,24,21,0.55)',
          }}
        >
          {description}
        </p>
      </div>

      {/* Mockups */}
      {variant === 'single' && (
        <div className="flex justify-center">
          <PhoneFrame src={images[0]} />
        </div>
      )}

      {variant === 'double' && (
        <div className="flex justify-center items-end gap-[clamp(1rem,3vw,2.5rem)]">
          <div style={{ transform: 'translateY(clamp(12px,2vw,24px)) rotate(-3deg)' }}>
            <PhoneFrame src={images[0]} />
          </div>
          <div style={{ transform: 'rotate(2deg)' }}>
            <PhoneFrame src={images[1] ?? images[0]} />
          </div>
        </div>
      )}

      {variant === 'desktop' && (
        <LaptopFrame src={images[0]} />
      )}
    </div>
  )
}
