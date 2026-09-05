import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Tiivra from './pages/case-studies/Tiivra.jsx'
import Tvarra from './pages/case-studies/Tvarra.jsx'
import LabelUtha from './pages/case-studies/LabelUtha.jsx'
import HighX from './pages/case-studies/HighX.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tiivra" element={<Tiivra />} />
          <Route path="/tvarra" element={<Tvarra />} />
          <Route path="/label-utha" element={<LabelUtha />} />
          <Route path="/highx" element={<HighX />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}