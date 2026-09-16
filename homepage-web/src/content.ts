/**
 * 페이지에 들어가는 문구를 한곳에 모아 둡니다.
 * 카피를 고칠 때 컴포넌트를 건드리지 않아도 되도록 분리했습니다.
 */

/** TODO: 스토어 등록 후 실제 링크로 교체 */
export const APP_STORE_URL = '#'
export const CONTACT_EMAIL = 'TODO@example.com'
export const GITHUB_URL = 'https://github.com/KimDwDev'

export const NAV_ITEMS = [
  { href: '#what', label: '하는 일' },
  { href: '#how', label: '흐름' },
  { href: '#team', label: '만드는 사람' },
] as const

export const HERO = {
  meta: 'SW Maestro 프로젝트 · 안드로이드',
  title: ['떨어져 있어도', '같이 뛴다'],
  description:
    '지금 달릴 수 있는 사람을 찾아 연결하고, 뛰는 동안 서로의 위치와 페이스를 주고받습니다. 끝나면 두 사람의 러닝이 하나의 기록으로 남습니다.',
} as const

export type Feature = {
  id: string
  label: string
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    id: 'matching',
    label: '매칭',
    title: '지금 뛸 사람을 찾습니다',
    description:
      '오늘 달릴 거리와 목표 페이스를 고르고 기다리면 조건이 맞는 러너를 연결합니다. 기다리는 동안 대기 현황이 계속 갱신됩니다.',
  },
  {
    id: 'live',
    label: '동반',
    title: '각자의 동네에서, 같은 시간에',
    description:
      '같은 장소에 모일 필요가 없습니다. 출발하면 서로의 위치와 페이스가 러닝 내내 전달되어, 상대가 앞서 있는지 처져 있는지 뛰면서 알 수 있습니다.',
  },
  {
    id: 'record',
    label: '기록',
    title: '뛴 만큼 쌓입니다',
    description:
      '완주하면 거리와 시간, 페이스가 정리되어 저장됩니다. 지나온 경로도 함께 남고, 달릴수록 내 평균 페이스가 갱신됩니다.',
  },
]

export type Step = {
  title: string
  description: string
}

export const STEPS: Step[] = [
  {
    title: '거리와 페이스를 고릅니다',
    description: '오늘 얼마나, 어느 속도로 뛸지 정하고 매칭을 겁니다.',
  },
  {
    title: '상대가 잡힙니다',
    description: '비슷한 페이스의 러너가 연결되면 알림이 옵니다.',
  },
  {
    title: '동시에 출발합니다',
    description: '각자 있는 곳에서 시작합니다. 같은 장소일 필요는 없습니다.',
  },
  {
    title: '기록이 남습니다',
    description: '완주하면 두 사람의 러닝이 하나로 정리됩니다.',
  },
]

export type Member = {
  name: string
  github: string
}

export const TEAM: Member[] = [
  { name: '조지환', github: 'jihwanjo-98' },
  { name: '김동완', github: 'KimDwDev' },
  { name: '박찬', github: 'zxc88kr' },
]

/** GitHub 프로필 이미지. 계정 아바타를 바꾸면 이 페이지도 따라 바뀝니다. */
export const avatarUrl = (github: string, size = 240) =>
  `https://github.com/${github}.png?size=${size}`

export const profileUrl = (github: string) => `https://github.com/${github}`
