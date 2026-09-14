import FadeImage from '../components/FadeImage.jsx'
import HeroStagger from '../components/HeroStagger.jsx'
import Marquee from '../components/Marquee.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import { thespian } from '../data/thespian'

function Shot({ src, alt, eager }) {
  return (
    <FadeImage
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      className="thespian-shot"
    />
  )
}

export default function Thespian() {
  return (
    <article>
      <header className="wrap thespian-hero">
        <HeroStagger>
          <p className="eyebrow">{thespian.eyebrow}</p>
          <h1 className="cs-title">{thespian.title}</h1>
          <p className="cs-lede thespian-cs-lede">{thespian.lede}</p>
        </HeroStagger>
      </header>

      <Marquee items={thespian.marquee} />

      <section className="section wrap">
        <Reveal>
          <SectionLabel>Why it exists</SectionLabel>
          <p className="thespian-why">{thespian.why}</p>
          <div className="thespian-shots">
            <Shot
              src={thespian.images.home.src}
              alt={thespian.images.home.alt}
              eager
            />
          </div>
        </Reveal>
      </section>

      <section className="section-tight wrap">
        <Reveal>
          <SectionLabel>What I wanted to learn</SectionLabel>
          <ol className="thespian-learn">
            {thespian.learn.map((item, i) => (
              <li key={item}>
                <span className="thespian-learn-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="section-tight wrap">
        <Reveal>
          <SectionLabel>How that shows up</SectionLabel>
          <p className="thespian-how">{thespian.how}</p>
          <div className="thespian-shots">
            <Shot
              src={thespian.images.search.src}
              alt={thespian.images.search.alt}
            />
            <Shot
              src={thespian.images.title.src}
              alt={thespian.images.title.alt}
            />
          </div>
        </Reveal>
      </section>

      <section className="section-tight wrap">
        <Reveal>
          <SectionLabel>What broke, and what I took from it</SectionLabel>
          <div className="thespian-lessons">
            {thespian.lessons.map((lesson) => (
              <article
                key={lesson.n}
                className={`thespian-lesson${lesson.accent ? ' is-accent' : ''}`}
              >
                <p className="thespian-lesson-n">{lesson.n}</p>
                <h3>{lesson.title}</h3>
                <p>{lesson.body}</p>
              </article>
            ))}
          </div>
          <div className="thespian-shots">
            <Shot
              src={thespian.images.genre.src}
              alt={thespian.images.genre.alt}
            />
            <Shot
              src={thespian.images.actor.src}
              alt={thespian.images.actor.alt}
            />
          </div>
        </Reveal>
      </section>

      <section className="thespian-constraints">
        <Reveal>
          <div className="wrap section">
            <SectionLabel>Constraints</SectionLabel>
            <p className="thespian-why">{thespian.constraints}</p>
            <p className="thespian-kicker">{thespian.kicker}</p>
          </div>
        </Reveal>
      </section>
    </article>
  )
}