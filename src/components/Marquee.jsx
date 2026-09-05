import { marqueeItems } from "../data/site"

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((item, i) => (
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