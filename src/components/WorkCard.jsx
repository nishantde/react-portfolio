import { Link } from "react-router-dom"

export default function WorkCard({ item }) {
  return (
    <article className="work-card">
      <Link to={item.href}>
        <img src={item.image} alt={item.imageAlt} />
        <ul className="work-tags">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <h3>{item.title}</h3>
      </Link>
    </article>
  )
}