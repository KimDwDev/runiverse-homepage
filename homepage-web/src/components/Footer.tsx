import { CONTACT_EMAIL, GITHUB_URL } from '../content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">Runiverse</p>

        <nav className="footer__links" aria-label="바깥 링크">
          <a href={`mailto:${CONTACT_EMAIL}`}>문의</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <p className="footer__copy">© {new Date().getFullYear()} Runiverse</p>
      </div>
    </footer>
  )
}
