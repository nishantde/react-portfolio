import { marqueeItems as defaultItems } from '../data/site'

export default function Marquee({ items }) {
  const source = items ?? defaultItems
  const loop = [...source, ...source]

  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            <span>{item}</span>
            <span className="marquee-dot" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}