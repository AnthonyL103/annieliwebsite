import type { ReactNode } from 'react'
import type { Accent } from '../data/types'
import { accentStyles } from '../lib/accents'
import { Reveal } from './Reveal'
import { Scribble } from './Scribble'
import { Write } from './Write'

type Props = {
  /** Short handwritten note above the title. */
  eyebrow: string
  title: ReactNode
  subtitle?: string
  accent?: Accent
  align?: 'center' | 'left'
}

export function SectionTitle({ eyebrow, title, subtitle, accent = 'sea', align = 'center' }: Props) {
  const center = align === 'center'
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`font-hand text-3xl ${accentStyles[accent].text}`}>
        <Write pencil duration={900}>
          {eyebrow}
        </Write>
      </p>
      <Reveal delay={150}>
        <h2 className="font-display mt-1 text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl">{title}</h2>
      </Reveal>
      <Scribble variant="squiggle" delay={500} duration={1100} className={`mt-3 h-3 w-40 text-gold ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <Reveal delay={250}>
          <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
