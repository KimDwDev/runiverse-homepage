import { APP_STORE_URL } from '../content'

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <p className="cta__title">내일 아침 같이 뛸 사람</p>
        <a className="button" href={APP_STORE_URL}>
          앱 다운로드
        </a>
      </div>
    </section>
  )
}
