import { Link } from "react-router-dom"
import Marquee from "../components/Marquee.jsx"
import SectionLabel from "../components/SectionLabel.jsx"
import WorkCard from "../components/WorkCard.jsx"
import { aboutBlurb, processSteps } from "../data/site"
import { workItems } from "../data/work"
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <p className="eyebrow">
          <span className="mobile-only">
            UI/UX DESIGNER · PRODUCT DESIGNER · DEVELOPER
          </span>
          <span className="desktop-only">
            UI/UX DESIGNER · PRODUCT DESIGNER · FRONT-END DEVELOPER
          </span>
        </p>
        <h1>
          <span className="hero-line">Hi, I'm Nishant.</span>
          <span className="hero-line">
            I design digital experiences that{" "}
            <span className="hero-break">convert browsers into buyers.</span>
          </span>
        </h1>
        <p>
          From research to shipped product — e-commerce UX, Shopify development,
          and conversion-focused design for brands that care about results.
        </p>
      </section>

      <Marquee />

      <section className="section wrap">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="work-list">
          {workItems.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06}>
              <WorkCard key={item.slug} item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-tight wrap">
        <Reveal>
          <SectionLabel>How I Work</SectionLabel>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.n}>
                <p className="num">{step.n}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-tight wrap">
        <Reveal>
          <SectionLabel>About</SectionLabel>
          <div className="about-row">
            <p>{aboutBlurb}</p>
            <Link to="/about" className="about-link">
              More about me →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}