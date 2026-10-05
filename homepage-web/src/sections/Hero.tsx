import { APP_STORE_URL, HERO } from '../content'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <p className="eyebrow">{HERO.eyebrow}</p>

        <h1 className="hero__title">
          {HERO.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <p className="hero__description">{HERO.description}</p>

        <div className="hero__actions">
          <a className="button" href={APP_STORE_URL}>
            앱 다운로드
          </a>
          <a className="button button--ghost" href="#how">
            어떻게 동작하나요
          </a>
        </div>

        <dl className="hero__stats">
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <dt className="hero__stat-value">{stat.value}</dt>
              <dd className="hero__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
