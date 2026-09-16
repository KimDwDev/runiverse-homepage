/**
 * 페이지에 들어가는 문구를 한곳에 모아 둡니다.
 * 카피를 고칠 때 컴포넌트를 건드리지 않아도 되도록 분리했습니다.
 */

/** TODO: 스토어 등록 후 실제 링크로 교체 */
export const APP_STORE_URL = '#'
export const CONTACT_EMAIL = 'TODO@example.com'
export const GITHUB_URL = 'https://github.com/KimDwDev'

export const NAV_ITEMS = [
  { href: '#features', label: '기능' },
  { href: '#how', label: '이용 방법' },
  { href: '#team', label: '팀' },
] as const

export const HERO = {
  eyebrow: '원격 동반 러닝 플랫폼',
  title: ['혼자 달려도,', '혼자가 아니도록'],
  description:
    'Runiverse는 지금 달릴 수 있는 사람을 같은 시간에 매칭하고, 러닝 내내 서로의 위치와 페이스를 실시간으로 주고받게 합니다.',
  stats: [
    { value: '실시간', label: '위치·페이스 공유' },
    { value: '자동', label: '페이스 기반 매칭' },
    { value: '기록', label: '완주 후 자동 정리' },
  ],
} as const

export type Feature = {
  id: string
  icon: string
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    id: 'matching',
    icon: '🎯',
    title: '같이 뛸 사람 찾기',
    description:
      '목표 거리와 페이스를 고르면 지금 달릴 수 있는 러너를 찾아 연결합니다. 기다리는 동안 대기 현황이 실시간으로 업데이트됩니다.',
  },
  {
    id: 'live',
    icon: '📡',
    title: '떨어져서, 함께',
    description:
      '각자의 동네에서 출발해도 러닝 내내 서로의 위치와 페이스가 전달됩니다. 앞서고 있는지 처지고 있는지 바로 알 수 있습니다.',
  },
  {
    id: 'record',
    icon: '📈',
    title: '남는 기록',
    description:
      '완주하면 거리·시간·페이스가 정리되어 저장되고, 달릴수록 내 평균 페이스가 자동으로 갱신됩니다.',
  },
]

export type Step = {
  title: string
  description: string
}

export const STEPS: Step[] = [
  {
    title: '매칭을 겁니다',
    description: '오늘 달릴 거리와 목표 페이스를 고르고 매칭을 시작합니다.',
  },
  {
    title: '짝이 맞춰집니다',
    description: '비슷한 페이스의 러너가 잡히면 알림이 오고, 각자의 자리에서 동시에 출발합니다.',
  },
  {
    title: '함께 달립니다',
    description: '달리는 동안 서로의 위치와 페이스가 실시간으로 공유됩니다.',
  },
  {
    title: '기록이 남습니다',
    description: '완주하면 두 사람의 러닝이 하나의 기록으로 정리됩니다.',
  },
]

export type Member = {
  name: string
  github: string
}

export const TEAM: Member[] = [
  { name: '김동완', github: 'KimDwDev' },
  { name: '박찬이', github: 'zxc88kr' },
]
