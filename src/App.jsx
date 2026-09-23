import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import SolePage from './pages/SolePage'
import RootPage from './pages/RootPage'
import KunaPage from './pages/KunaPage'
import ModulorPage from './pages/ModulorPage'
import DonSalazarPage from './pages/DonSalazarPage'
import SCollectionPage from './pages/SCollectionPage'
import ProjectCasePage from './pages/ProjectCasePage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import Navbar from './components/layout/Navbar'
import Cursor from './components/ui/Cursor'
import { LanguageProvider } from './contexts/LanguageContext'
import useLenis from './hooks/useLenis'
import './index.css'

function AppInner() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project/')

  useLenis(!isProjectPage)

  return (
    <>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/sole" element={<SolePage />} />
        <Route path="/project/root" element={<RootPage />} />
        <Route path="/project/kuna" element={<KunaPage />} />
        <Route path="/project/modulor" element={<ModulorPage />} />
        <Route path="/project/cafe-don-salazar" element={<DonSalazarPage />} />
        <Route path="/project/s-collection" element={<SCollectionPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/case/:slug" element={<ProjectCasePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
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
