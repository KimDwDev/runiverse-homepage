import { APP_STORE_URL } from '../content'

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2 className="cta__title">내일 아침, 같이 뛸 사람이 있습니다</h2>
        <p className="cta__description">
          Runiverse를 설치하고 첫 매칭을 걸어 보세요.
        </p>
        <a className="button" href={APP_STORE_URL}>
          앱 다운로드
        </a>
      </div>
    </section>
  )
}
