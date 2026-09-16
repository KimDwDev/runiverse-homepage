import Section from '../components/Section'
import { FEATURES } from '../content'

export default function Features() {
  return (
    <Section id="what" title="하는 일">
      {/* 카드 그리드 대신 괘선으로 나눈 2단 행 — 사양서에 가까운 배치 */}
      <dl className="rows">
        {FEATURES.map((feature) => (
          <div key={feature.id} className="row">
            <dt className="row__label">{feature.label}</dt>
            <dd className="row__body">
              <h3 className="row__title">{feature.title}</h3>
              <p className="row__description">{feature.description}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
