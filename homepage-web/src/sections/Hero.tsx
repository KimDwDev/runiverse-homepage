import { APP_STORE_URL, HERO } from '../content'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="hero__meta">{HERO.meta}</p>

        <h1 className="hero__title">
          {HERO.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <hr className="rule rule--short" />

        <p className="hero__description">{HERO.description}</p>

        <div className="hero__actions">
          <a className="button" href={APP_STORE_URL}>
            앱 다운로드
          </a>
          <a className="link" href="#how">
            먼저 흐름부터 보기
          </a>
        </div>
      </div>
    </section>
  )
}
