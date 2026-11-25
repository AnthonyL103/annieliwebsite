export type Accent = 'navy' | 'gold' | 'sea' | 'coral' | 'palm'

export type LinkRef = { readonly label: string; readonly href: string }

export type Figure = { readonly src: string; readonly alt: string; readonly caption: string }

export type StoryBeat = { readonly label: string; readonly text: string }

export type Pitch = {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly byline: string
  readonly summary: string
  readonly story: readonly StoryBeat[]
  readonly featuresTitle: string
  readonly features: readonly string[]
  readonly tags: readonly string[]
  /** First figure is the large one, the rest sit side by side beneath it. */
  readonly figures: readonly Figure[]
  readonly chip: string
  readonly disclaimer: string
}

export type WorkRole = {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly summary: string
  readonly bullets: readonly string[]
  readonly accent: Accent
}

export type ServiceItem = {
  readonly id: string
  readonly tag: string
  readonly title: string
  readonly org: string
  readonly meta?: string
  readonly text: string
  readonly image?: string
  readonly imageAlt?: string
  readonly imagePos?: string
  /** Use `contain` for logos so they are never cropped. */
  readonly imageFit?: 'cover' | 'contain'
  readonly link?: LinkRef
  readonly accent: Accent
}

export type LifeItem = {
  readonly id: string
  readonly tag: string
  readonly title: string
  readonly text: string
  readonly image?: string
  readonly imageAlt?: string
  readonly imagePos?: string
  readonly link?: LinkRef
  readonly accent: Accent
}

export type Strength = {
  readonly id: string
  readonly title: string
  readonly text: string
  readonly link?: LinkRef
  readonly accent: Accent
}

export type SkillGroup = { readonly group: string; readonly accent: Accent; readonly items: readonly string[] }
