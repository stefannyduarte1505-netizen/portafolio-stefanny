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
import useLenis from './hooks/useLenis'
import './index.css'

function AppInner() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project/')

  // Lenis only runs on home — project pages use native scroll
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
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
