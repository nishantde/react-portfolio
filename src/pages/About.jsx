import { about } from '../data/about'
import Reveal from '../components/Reveal.jsx'
import FadeImage from '../components/FadeImage.jsx'
import HeroStagger from '../components/HeroStagger.jsx'

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <p>{children}</p>
      <span />
    </div>
  )
}

function IconFrame() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <rect x="8" y="8" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

function IconCode() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 7 3 12l5 5M16 7l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7h14l-1.2 9.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 7Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M8 7V6a4 4 0 0 1 8 0v1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const skillIcons = {
  ux: <IconFrame />,
  fe: <IconCode />,
  ecom: <IconCart />,
}

export default function About() {
  return (
    <article>
      <header className="wrap about-hero">
        <HeroStagger>
          <h1 className="about-title">{about.title}</h1>
          <p className="about-lede">{about.lede}</p>
          <div className="about-intro">
            <FadeImage src={about.photo.src} alt={about.photo.alt} />
            <div className="about-bio">
              {about.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </HeroStagger>
      </header>

      <section className="wrap about-block">
        <Reveal>
          <SectionLabel>What I Do</SectionLabel>
          <div className="cs-grid-3">
            {about.skills.map((s) => (
              <article className="cs-card surface" key={s.id}>
                <span className="about-icon">{skillIcons[s.id]}</span>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="wrap about-block">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <ul className="about-jobs">
            {about.experience.map((job) => (
              <li key={job.role + job.dates}>
                <div>
                  <p className="about-role">{job.role}</p>
                  <p className="about-org">{job.org}</p>
                </div>
                <p className="about-dates">{job.dates}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="wrap about-block">
        <Reveal>
          <SectionLabel>Find Me Online</SectionLabel>
          <ul className="about-socials-desk">
            {about.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label} - {s.handle}
                </a>
              </li>
            ))}
          </ul>
          <ul className="about-socials-mob">
            {about.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  <span>{s.label} - {s.handle}</span>
                  <IconArrow />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </article>
  )
}