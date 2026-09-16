import Section from '../components/Section'
import { STEPS } from '../content'

export default function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="이용 방법"
      title="매칭부터 기록까지, 네 단계"
      raised
    >
      <ol className="steps">
        {STEPS.map((step, index) => (
          <li key={step.title} className="step">
            <span className="step__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__description">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
