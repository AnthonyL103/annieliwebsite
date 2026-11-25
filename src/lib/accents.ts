import type { Accent } from '../data/types'

type AccentStyle = {
  /** Label: soft background with deep text. */
  readonly chip: string
  readonly text: string
  /** Soft paper colour for notes and cards. */
  readonly soft: string
  /** Solid fill for dots, pins and flags. */
  readonly solid: string
  readonly border: string
  readonly tape: string
  /** Raw colour of the soft background, for SVG fills and gradients. */
  readonly hex: string
}

// Class names are written out in full so Tailwind can find them.
export const accentStyles: Record<Accent, AccentStyle> = {
  navy: {
    chip: 'bg-navy-soft text-navy',
    text: 'text-navy',
    soft: 'bg-navy-soft',
    solid: 'bg-navy',
    border: 'border-navy/25',
    tape: '',
    hex: '#e3ebf3',
  },
  gold: {
    chip: 'bg-gold-soft text-gold-deep',
    text: 'text-gold-deep',
    soft: 'bg-gold-soft',
    solid: 'bg-gold',
    border: 'border-gold-deep/30',
    tape: '',
    hex: '#fff1b8',
  },
  sea: {
    chip: 'bg-sea-soft text-sea-deep',
    text: 'text-sea-deep',
    soft: 'bg-sea-soft',
    solid: 'bg-sea',
    border: 'border-sea-deep/25',
    tape: 'tape-sea',
    hex: '#d9f2f7',
  },
  coral: {
    chip: 'bg-coral-soft text-coral-deep',
    text: 'text-coral-deep',
    soft: 'bg-coral-soft',
    solid: 'bg-coral',
    border: 'border-coral-deep/25',
    tape: 'tape-coral',
    hex: '#ffe5dc',
  },
  palm: {
    chip: 'bg-palm-soft text-palm-deep',
    text: 'text-palm-deep',
    soft: 'bg-palm-soft',
    solid: 'bg-palm',
    border: 'border-palm-deep/25',
    tape: 'tape-palm',
    hex: '#e0f1e4',
  },
}

/** Opaque section colours, shared so torn edges match their section exactly. */
export const sectionColors = {
  paper: '#fffdf6',
  sand: '#fbeecb',
  sea: '#d9f2f7',
  coral: '#ffe5dc',
  palm: '#e0f1e4',
  sunrise: '#ffe08a',
} as const
