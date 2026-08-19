import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Certificates from './pages/Certificates.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habilidades" element={<Skills />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/certificados" element={<Certificates />} />
      </Routes>
      <Footer />
    </>
  )
}
