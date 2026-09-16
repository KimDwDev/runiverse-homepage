import Section from '../components/Section'
import { STEPS } from '../content'

export default function HowItWorks() {
  return (
    <Section id="how" title="매칭을 걸고 나서" raised>
      {/* 2×2 그리드 대신 세로로 흐르는 한 줄 — 순서가 있는 내용이므로 */}
      <ol className="steps">
        {STEPS.map((step, index) => (
          <li key={step.title} className="step">
            <span className="step__number" aria-hidden="true">
              {index + 1}
            </span>
            <h3 className="step__title">{step.title}</h3>
            <p className="step__description">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
