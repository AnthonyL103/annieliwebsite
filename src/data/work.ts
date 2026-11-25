import type { WorkRole } from './types'

export const workIntro = {
  org: 'Coastal Well Woman',
  place: 'Goleta, CA',
  text: 'A women’s health practice owned by Laura Abrignani, NP, where I wear two hats: running the front of the office and helping grow the practice itself.',
} as const

export const roles: readonly WorkRole[] = [
  {
    id: 'office',
    eyebrow: 'Office Manager and Medical Assistant',
    title: 'Keeping the practice running',
    summary:
      'I coordinate scheduling, patient communications, lab orders, and billing, and I support clinical visits from intake to room preparation.',
    bullets: [
      'Coordinate appointments, laboratory result workflows, and daily administrative operations.',
      'Take vitals, collect samples, and prepare rooms while communicating clearly and sensitively with patients.',
      'Make sure new and returning patients can reach the practice through its secure patient portal.',
    ],
    accent: 'sea',
  },
  {
    id: 'assistant',
    eyebrow: 'Personal Assistant to the practice owner',
    title: 'Growing the business side',
    summary:
      'My job goes beyond office management. I help plan events, design graphics, and refine how the practice reaches new patients.',
    bullets: [
      'Create graphics for events, patients, and everyday office needs, and help organize event planning.',
      'Rearrange and improve the practice website.',
      'Develop business operations, outreach strategy, and administrative procedures, from bringing in new patients to organizing their information.',
    ],
    accent: 'navy',
  },
]
