import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IndrajaalPage from './pages/IndrajaalPage'
import ExpertlyYoursPage from './pages/ExpertlyYoursPage'
import RomanchePage from './pages/RomanchePage'
import UXDPage from './pages/UXDPage'
import ExplorationsPage from './pages/ExplorationsPage'
import ToolkitPage from './pages/ToolkitPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/indrajaal" element={<IndrajaalPage />} />
        <Route path="/work/expertlyyours" element={<ExpertlyYoursPage />} />
        <Route path="/work/romanche" element={<RomanchePage />} />
        <Route path="/work/uxd" element={<UXDPage />} />
        <Route path="/explorations" element={<ExplorationsPage />} />
        <Route path="/toolkit" element={<ToolkitPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
