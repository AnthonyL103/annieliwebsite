import type { CSSProperties } from 'react'
import { strengths } from '../data/strengths'
import { accentStyles, sectionColors } from '../lib/accents'
import { LinkPill } from './LinkPill'
import { Mark } from './Mark'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import { Tape } from './Tape'
import { TornEdge } from './TornEdge'

const tilts = [-1.6, 1.2, -0.8, 1.5, -1.2] as const

export function Strengths() {
  return (
    <section id="strengths" className="lined relative pb-28 pt-24">
      <TornEdge fill={sectionColors.paper} seed={17} />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="note to self"
          accent="sea"
          title={
            <>
              What makes me a <Mark delay={500}>strong candidate</Mark>
            </>
          }
          subtitle="The attributes and skills I would bring to a product team."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {strengths.map((s, i) => {
            const a = accentStyles[s.accent]
            return (
              <Reveal key={s.id} from="drop" delay={(i % 3) * 140} className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
                <article
                  className={`postit relative h-full p-7 pb-10 shadow-xl shadow-navy/20 transition-transform duration-500 hover:!rotate-0 hover:-translate-y-1 ${a.soft}`}
                  style={{ transform: `rotate(${tilts[i % tilts.length]}deg)`, '--fold': a.hex } as CSSProperties}
                >
                  <Tape tone={a.tape as '' | 'tape-sea' | 'tape-coral' | 'tape-palm'} className="-top-3 left-1/2 -translate-x-1/2 rotate-1" />
                  <span className={`font-hand text-6xl font-bold leading-none ${a.text}`}>{i + 1}.</span>
                  <h3 className="font-display mt-1 text-xl font-semibold leading-snug text-navy">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink">{s.text}</p>
                  {s.link && (
                    <div className="mt-5">
                      <LinkPill link={s.link} accent={s.accent} />
                    </div>
                  )}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
