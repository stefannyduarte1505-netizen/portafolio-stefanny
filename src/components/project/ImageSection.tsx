import type { ImageSectionBlock } from '../../data/projectsData'

type Props = Pick<ImageSectionBlock, 'images' | 'title' | 'caption'>

export default function ImageSection({ images, title, caption }: Props) {
  const isSingle = images.length === 1
  const isDouble = images.length === 2

  return (
    <div
      className="w-full"
      style={{ padding: 'clamp(2rem,5vw,5rem) clamp(1.5rem,5vw,5rem)' }}
    >
      {title && (
        <p
          className="mb-6"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(26,24,21,0.38)',
          }}
        >
          {title}
        </p>
      )}

      <div
        className={
          isSingle
            ? 'w-full'
            : isDouble
            ? 'grid grid-cols-2 gap-3'
            : 'grid grid-cols-2 md:grid-cols-3 gap-3'
        }
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg relative"
            style={{ lineHeight: 0 }}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={isSingle ? 'w-full h-auto block' : 'w-full h-full object-cover block'}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            />
            {/* Watermark */}
            <span
              style={{
                position: 'absolute',
                bottom: '8px',
                right: '10px',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '10px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              sduart.com
            </span>
          </div>
        ))}
      </div>

      {caption && (
        <p
          className="mt-4"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: '0.72rem',
            letterSpacing: '0.04em',
            color: 'rgba(26,24,21,0.38)',
          }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}
