import type { CSSProperties } from 'react'
import { profile, stats } from '../data/profile'
import type { Accent } from '../data/types'
import { accentStyles } from '../lib/accents'
import { Bunting } from './Bunting'
import { CountUp } from './CountUp'
import { Reveal } from './Reveal'
import { Tape } from './Tape'

const notes: readonly { accent: Accent; rot: number }[] = [
  { accent: 'gold', rot: -2.5 },
  { accent: 'sea', rot: 2 },
  { accent: 'coral', rot: -1.5 },
  { accent: 'palm', rot: 2.5 },
]

export function Stats() {
  return (
    <section id="stats" className="relative bg-sand pb-24 pt-2">
      <Bunting />

      <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          {stats.map((s, i) => {
            const n = notes[i % notes.length]
            const a = accentStyles[n.accent]
            return (
              <Reveal key={s.label} from="drop" delay={i * 130}>
                <div
                  className={`postit relative flex h-full min-h-44 flex-col items-center justify-center px-4 py-7 text-center shadow-lg shadow-navy/20 transition-transform duration-300 hover:rotate-0 ${a.soft}`}
                  style={{ transform: `rotate(${n.rot}deg)`, '--fold': a.hex } as CSSProperties}
                >
                  <Tape tone={a.tape as '' | 'tape-sea' | 'tape-coral' | 'tape-palm'} className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
                  <div className={`font-hand text-7xl font-bold leading-none ${i === 0 ? 'text-navy' : a.text}`}>
                    <CountUp to={s.value} suffix={s.suffix ?? ''} />
                  </div>
                  <div className="mt-2 text-sm font-extrabold text-ink">{s.label}</div>
                  <div className="text-xs font-semibold text-muted">{s.sub}</div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <p className="font-hand mt-10 text-center text-2xl text-navy">
          {profile.school} · {profile.degree} · {profile.status}
        </p>
      </div>
    </section>
  )
}
