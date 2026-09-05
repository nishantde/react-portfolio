import { Link } from "react-router-dom"
import { site } from "../data/site"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta wrap">
        <h2>Let's work together</h2>
        <Link to="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </div>
      <div className="wrap footer-bar">
        <p>© 2026 {site.fullName}</p>
        <div className="footer-links">
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="dot-mobile" aria-hidden>
            ·
          </span>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}