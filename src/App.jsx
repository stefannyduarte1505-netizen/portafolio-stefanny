import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import Navbar from './components/layout/Navbar'
import Cursor from './components/ui/Cursor'
import useLenis, { getLenis } from './hooks/useLenis'
import './index.css'

function AppInner() {
  useLenis()
  const location = useLocation()

  // Stop Lenis on project pages so ProjectPage can use native scroll freely
  useEffect(() => {
    const lenis = getLenis()
    if (!lenis) return
    if (location.pathname.startsWith('/project/')) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [location.pathname])

  return (
    <>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
