import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { site } from "../data/site"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link to="/" className="logo" aria-label={site.name}>
          <img src="/images/logo.png" alt={site.name} />
        </Link>

        <nav className="nav-desktop">
          <a href={site.resumeHref} target="_blank" rel="noreferrer">
            Resume
          </a>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <span aria-hidden>×</span>
          ) : (
            <img src="/images/hamburger-icon.png" alt="" />
          )}
        </button>
      </div>

      <nav className={`nav-mobile${open ? " open" : ""}`}>
        <a
          href={site.resumeHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Resume
        </a>
        <NavLink to="/about" onClick={() => setOpen(false)}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}