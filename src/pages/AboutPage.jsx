import AboutHero from '../components/about/AboutHero'
import TimelineSection from '../components/about/TimelineSection'

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '4.5rem' }}>
      <AboutHero />
      <TimelineSection />
    </div>
  )
}
