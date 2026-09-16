import Section from '../components/Section'
import { FEATURES } from '../content'

export default function Features() {
  return (
    <Section
      id="features"
      eyebrow="무엇을 하나요"
      title="러닝을 혼자 두지 않습니다"
      description="꾸준히 달리기 어려운 이유는 체력보다 혼자라는 데 있습니다. Runiverse는 그 자리를 채웁니다."
    >
      <ul className="card-grid">
        {FEATURES.map((feature) => (
          <li key={feature.id} className="card">
            <span className="card__icon" aria-hidden="true">
              {feature.icon}
            </span>
            <h3 className="card__title">{feature.title}</h3>
            <p className="card__description">{feature.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
