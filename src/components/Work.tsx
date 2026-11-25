import { photos } from '../data/photos'
import { links } from '../data/profile'
import { roles, workIntro } from '../data/work'
import { accentStyles, sectionColors } from '../lib/accents'
import { LinkPill } from './LinkPill'
import { Polaroid } from './Polaroid'
import { Reveal } from './Reveal'
import { Scribble } from './Scribble'
import { SectionTitle } from './SectionTitle'
import { Tape } from './Tape'
import { TornEdge } from './TornEdge'

export function Work() {
  return (
    <section id="work" className="relative bg-sea-soft pb-28 pt-20">
      <TornEdge fill={sectionColors.sea} seed={7} />
      <div className="mx-auto grid max-w-6xl items-start gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-24 lg:max-w-none">
          <Reveal from="drop">
            <Polaroid
              src={photos.clinic}
              alt="A smiling practitioner in a white coat holding a tablet in a bright exam room"
              caption={workIntro.place}
              rotate={-2.5}
              ratio="aspect-[4/5]"
              pos="60% 40%"
              tone="tape-sea"
            />
          </Reveal>
          <Reveal from="pop" delay={400} className="absolute -bottom-8 -right-2 w-[46%] sm:-right-8">
            <div className="relative rotate-3 border-2 border-navy bg-white p-3 shadow-[5px_5px_0_0_#003660]">
              <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
              <img src={photos.cwwLogo} alt="Coastal Well Woman logo" className="h-auto w-full" loading="lazy" />
            </div>
          </Reveal>
        </div>

        <div>
          <SectionTitle align="left" eyebrow="where I work" accent="sea" title={workIntro.org} subtitle={workIntro.text} />
          <Reveal delay={200}>
            <div className="mt-5">
              <LinkPill link={links.coastalWellWoman} accent="sea" />
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8">
            {roles.map((r, i) => {
              const a = accentStyles[r.accent]
              return (
                <Reveal key={r.id} from={i % 2 ? 'right' : 'left'} delay={i * 120}>
                  <article className="lined-sm margin-line relative rounded-sm py-7 pl-14 pr-6 shadow-lg shadow-navy/15 [--margin-x:2.5rem] sm:pl-16 sm:pr-8 sm:[--margin-x:3rem]">
                    <Tape tone={a.tape as '' | 'tape-sea' | 'tape-coral' | 'tape-palm'} className="-top-3 left-8 -rotate-2" />
                    <p className={`font-hand text-3xl leading-none ${a.text}`}>{r.eyebrow}</p>
                    <h3 className="font-display mt-2 text-2xl font-semibold leading-tight text-navy">{r.title}</h3>
                    <Scribble variant="underline" delay={400} className="h-3 w-40 text-gold" />
                    <p className="mt-3 text-[15px] leading-7 text-ink">{r.summary}</p>
                    <ul className="mt-2 space-y-0">
                      {r.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] leading-7 text-muted">
                          <Scribble variant="check" strokeWidth={3} className="mt-1.5 h-5 w-5 shrink-0 text-palm" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
