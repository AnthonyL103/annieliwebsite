import { service } from '../data/service'
import { accentStyles, sectionColors } from '../lib/accents'
import { LinkPill } from './LinkPill'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import { Tape } from './Tape'
import { TornEdge } from './TornEdge'

const tilts = [-1.2, 1, 0.8, -0.9] as const

export function Service() {
  return (
    <section id="service" className="relative bg-coral-soft pb-28 pt-24">
      <TornEdge fill={sectionColors.coral} seed={9} />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="giving back"
          accent="coral"
          title="Showing up for my community"
          subtitle="Building a women’s health club from scratch, teaching kids about food, and spending time where care happens."
        />

        <div className="mt-16 columns-1 gap-8 sm:columns-2 [&>*]:mb-8 [&>*]:break-inside-avoid">
          {service.map((s, i) => {
            const a = accentStyles[s.accent]
            return (
              <Reveal key={s.id} from="drop" delay={(i % 2) * 140}>
                <article
                  style={{ transform: `rotate(${tilts[i % tilts.length]}deg)` }}
                  className="group relative rounded-sm border border-ink/10 bg-white pt-3 shadow-xl shadow-navy/15 transition-transform duration-500 hover:!rotate-0 hover:-translate-y-1"
                >
                  <span
                    aria-hidden
                    className={`absolute -top-3 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full ${a.solid} shadow-md ring-2 ring-white after:absolute after:left-1.5 after:top-1 after:h-1.5 after:w-1.5 after:rounded-full after:bg-white/70`}
                  />
                  {s.image && (
                    <div className={`mx-3 mt-3 aspect-[16/10] overflow-hidden border border-ink/10 ${s.imageFit === 'contain' ? 'bg-white p-5' : ''}`}>
                      <img
                        src={s.image}
                        alt={s.imageAlt ?? s.title}
                        style={{ objectPosition: s.imagePos }}
                        className={`h-full w-full transition duration-500 group-hover:scale-105 ${s.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="px-6 pt-4">
                    <span className={`font-hand text-2xl leading-none ${a.text}`}>{s.tag}</span>
                    <h3 className="font-display mt-1 text-xl font-semibold leading-snug text-navy">{s.title}</h3>
                    <p className="text-xs font-bold text-muted">
                      {s.org}
                      {s.meta ? ` · ${s.meta}` : ''}
                    </p>
                  </div>
                  <div className="mx-0 mt-3 border-t-2 border-coral/50" />
                  <div className="lined-sm px-6 pb-6 pt-2.5">
                    <p className="text-[15px] leading-7 text-ink">{s.text}</p>
                    {s.link && (
                      <div className="mt-4">
                        <LinkPill link={s.link} accent={s.accent} />
                      </div>
                    )}
                  </div>
                  {i === 0 && <Tape tone="tape-coral" className="-right-5 top-10 rotate-[35deg]" />}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
