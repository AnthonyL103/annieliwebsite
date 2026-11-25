import { skills } from '../data/strengths'
import { accentStyles, sectionColors } from '../lib/accents'
import { Reveal } from './Reveal'
import { Scribble } from './Scribble'
import { SectionTitle } from './SectionTitle'
import { Tape } from './Tape'
import { TornEdge } from './TornEdge'

export function Skills() {
  return (
    <section id="skills" className="relative bg-palm-soft pb-32 pt-24">
      <TornEdge fill={sectionColors.palm} seed={21} />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow="my to do list, done" accent="palm" title="Skills and fluencies" />

        <Reveal from="drop" delay={150} className="mt-14">
          <div className="lined-sm margin-line relative -rotate-[0.6deg] rounded-sm px-6 py-10 shadow-2xl shadow-navy/20 [--margin-x:1.6rem] sm:px-12 sm:[--margin-x:2.6rem]">
            <Tape className="-top-3 left-1/4 -rotate-3" />
            <Tape tone="tape-sea" className="-top-3 right-1/4 rotate-2" />
            <div className="grid gap-x-10 gap-y-8 pl-4 sm:grid-cols-2 sm:pl-6 lg:grid-cols-3">
              {skills.map((s, gi) => (
                <div key={s.group}>
                  <h3 className={`font-hand text-3xl font-bold leading-none ${accentStyles[s.accent].text}`}>{s.group}</h3>
                  <Scribble variant="underline" delay={gi * 120} className="h-3 w-32 text-gold" />
                  <ul className="mt-2">
                    {s.items.map((it, i) => (
                      <li key={it} className="flex items-start gap-2.5 text-[15px] font-semibold leading-7 text-ink">
                        <Scribble variant="check" strokeWidth={3.2} delay={gi * 120 + i * 140} className="mt-1.5 h-5 w-5 shrink-0 text-palm" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
