import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { site } from "../data/site"
import ThemeToggle from "./ThemeToggle.jsx"

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
          <img
            src="/images/logo.png"
            alt={site.name}
            className="logo-on-dark"
          />
          <img
            src="/images/logo-light.png"
            alt=""
            className="logo-on-light"
          />
        </Link>

        <div className="theme-toggle-desk">
          <ThemeToggle />
        </div>

        <div className="header-actions">
          <nav className="nav-desktop">
            <a href={site.resumeHref} target="_blank" rel="noreferrer">
              Resume
            </a>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="theme-toggle-mob">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span aria-hidden>X</span>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
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