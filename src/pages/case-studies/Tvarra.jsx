import { Link } from 'react-router-dom'
import { tvarra } from '../../data/tvarra'
import Reveal from '../../components/Reveal.jsx'
import FadeImage from '../../components/FadeImage.jsx'
import HeroStagger from '../../components/HeroStagger.jsx'

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <p>{children}</p>
      <span />
    </div>
  )
}

function Band({ tone, children }) {
  return <section className={`cs-band ${tone}`}>{children}</section>
}

export default function Tvarra() {
  const study = tvarra

  return (
    <article>
      <header className="wrap cs-hero">
        <HeroStagger>
          <SectionLabel>{study.eyebrow}</SectionLabel>
          <h1 className="cs-title">{study.title}</h1>
          <p className="cs-lede">{study.lede}</p>
          <dl className="cs-meta">
            {study.meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        </HeroStagger>
        <FadeImage className="cs-banner" src={study.banner.src} alt={study.banner.alt} />
      </header>

      <Band tone="surface">
        <Reveal>
          <div className="wrap">
            <SectionLabel>Overview</SectionLabel>
            <div className="cs-overview">
              <h2>{study.overviewHeadline}</h2>
              <p>{study.overviewBody}</p>
            </div>
          </div>
        </Reveal>
      </Band>

      <Band tone="dark">
        <Reveal>
          <div className="wrap">
            <SectionLabel>The Challenge</SectionLabel>
            <div className="cs-grid-3">
              {study.challengeCards.map((card) => (
                <div className="cs-card surface" key={card.title}>
                  {card.n ? <p className="cs-num">{card.n}</p> : null}
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Band>

      <Band tone="surface">
        <Reveal>
          <div className="wrap">
            <SectionLabel>Research & Discovery</SectionLabel>
            <p className="cs-research-intro">{study.researchIntro}</p>
            <div className="cs-grid-3">
              {study.personas.map((p) => (
                <article className="cs-card bg" key={p.title}>
                  <h3>{p.title}</h3>
                  <p className="cs-persona-detail">{p.detail}</p>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
            <FadeImage className="cs-figure" src={study.researchBoard.src} alt={study.researchBoard.alt} />
          </div>
        </Reveal>
      </Band>

      <Band tone="dark">
        <Reveal>
          <div className="wrap">
            <SectionLabel>UX Strategy</SectionLabel>
            <div className="cs-grid-2">
              {study.strategyCards.map((card) => (
                <div className="cs-card surface" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Band>

      <Band tone="surface">
        <Reveal>
            <div className="wrap">
              <SectionLabel>Visual Direction</SectionLabel>
              <div className="cs-grid-3">
                <div className="cs-card bg">
                  <p className="cs-kicker">Typography</p>
                <p className="cs-type-1">{study.typefaces.primary}</p>
                <p className="cs-type-2">{study.typefaces.secondary}</p>
                <p>{study.typefaces.body}</p>
              </div>
              <div className="cs-card bg">
                <p className="cs-kicker">Color Palette</p>
                <div className="cs-swatches">
                  {study.swatches.map((s) => (
                    <div key={s.name}>
                      <div className="cs-chip" style={{ background: s.color }} />
                      <p className="cs-chip-name">{s.name}</p>
                      <p className="cs-chip-hex">{s.hex}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs-card bg">
                <p className="cs-kicker">{study.visualAside.kicker}</p>
                <p>{study.visualAside.body}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Band>

      <Band tone="dark">
        <Reveal>
          <div className="wrap">
            <SectionLabel>The Experience</SectionLabel>
            <FadeImage className="cs-figure" src={study.experienceImage.src} alt={study.experienceImage.alt} />
            <div className="cs-exp-points">
              {study.experiencePoints.map((p) => (
                <div key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Band>

      <Band tone="surface">
        <Reveal>
          <div className="wrap">
            <SectionLabel>Results</SectionLabel>
            <p className="cs-outcome-kicker">{study.outcomeEyebrow}</p>
            <h2 className="cs-outcome-title">{study.outcomeHeadline}</h2>
            <div className="cs-metrics">
              {study.results.map((r) => (
                <div className="cs-metric" key={r.label}>
                  <p className="cs-metric-value">{r.value}</p>
                  <p className="cs-metric-label">{r.label}</p>
                  <p className="cs-metric-note">{r.note}</p>
                </div>
              ))}
            </div>
            <p className="cs-results-foot">{study.resultsFoot}</p>
          </div>
        </Reveal>
      </Band>

      <nav className="cs-next">
        <div className="wrap">
          <Link to={study.next.href}>
            <span>Next Project</span>
            <strong>{study.next.name} →</strong>
          </Link>
        </div>
      </nav>
    </article>
  )
}