import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import PageTransition from './PageTransition.jsx'

export default function Layout() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  )
}