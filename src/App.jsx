import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import SolePage from './pages/SolePage'
import RootPage from './pages/RootPage'
import KunaPage from './pages/KunaPage'
import ModulorPage from './pages/ModulorPage'
import DonSalazarPage from './pages/DonSalazarPage'
import Navbar from './components/layout/Navbar'
import Cursor from './components/ui/Cursor'
import { LangButton, CloseButton } from './components/ui/LangToggle'
import { LanguageProvider } from './contexts/LanguageContext'
import { useLanguage } from './contexts/LanguageContext'
import { t } from './translations'
import useLenis from './hooks/useLenis'
import './index.css'

function AppInner() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project/')

  useLenis(!isProjectPage)

  const { lang } = useLanguage()

  return (
    <>
      <Cursor />
      <div style={{ position: 'fixed', top: '1.5rem', right: '2rem', zIndex: 300, display: 'flex', gap: '0.5rem' }}>
        {isProjectPage && <CloseButton label={t[lang].close} />}
        <LangButton />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/sole" element={<SolePage />} />
        <Route path="/project/root" element={<RootPage />} />
        <Route path="/project/kuna" element={<KunaPage />} />
        <Route path="/project/modulor" element={<ModulorPage />} />
        <Route path="/project/cafe-don-salazar" element={<DonSalazarPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </LanguageProvider>
  )
}
