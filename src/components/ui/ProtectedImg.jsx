export default function ProtectedImg({ src, alt = '', loading = 'lazy', style = {}, watermark = true }) {
  return (
    <div style={{ position: 'relative', display: 'block', lineHeight: 0 }}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          pointerEvents: 'none',
          ...style,
        }}
      />
      {/* Transparent overlay blocks direct right-click on <img> */}
      <div
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        onContextMenu={(e) => e.preventDefault()}
      />
      {watermark && (
        <span style={{
          position: 'absolute',
          bottom: '10px',
          right: '14px',
          color: 'rgba(255,255,255,0.45)',
          fontSize: '11px',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 300,
          letterSpacing: '0.08em',
          pointerEvents: 'none',
          zIndex: 2,
          userSelect: 'none',
        }}>
          sduart.com
        </span>
      )}
    </div>
  )
}
