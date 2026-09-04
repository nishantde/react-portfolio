import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">nishant.work</NavLink>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}