import ProtectedImg from './ProtectedImg'

export default function FullBleed({ src }) {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <ProtectedImg src={src} loading="eager" />
    </div>
  )
}
