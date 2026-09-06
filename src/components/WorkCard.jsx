import { Link } from "react-router-dom"
import FadeImage from '../components/FadeImage.jsx'

export default function WorkCard({ item }) {
  return (
    <article className="work-card">
      <Link to={item.href}>
        <div className="work-card-media">
          <FadeImage src={item.image} alt={item.imageAlt} className="work-card-img" />
        </div>
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