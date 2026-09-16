import Section from '../components/Section'
import { TEAM } from '../content'

export default function Team() {
  return (
    <Section
      id="team"
      eyebrow="만든 사람들"
      title="SW Maestro에서 시작했습니다"
      description="달리기를 좋아하지만 혼자서는 잘 안 되던 두 사람이 만들고 있습니다."
    >
      <ul className="team">
        {TEAM.map((member) => (
          <li key={member.github} className="team__member">
            <p className="team__name">{member.name}</p>
            <a
              className="team__link"
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noreferrer"
            >
              @{member.github}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
