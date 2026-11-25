import { life, moments } from '../data/life'
import { accentStyles, sectionColors } from '../lib/accents'
import { LinkPill } from './LinkPill'
import { Polaroid } from './Polaroid'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import { Tape } from './Tape'
import { TornEdge } from './TornEdge'

const tilts = [-1.4, 1.1, -0.6, 1.4, -1.1, 0.8, -1.3] as const

export function Life() {
  return (
    <section id="life" className="dotted relative pb-32 pt-24">
      <TornEdge fill={sectionColors.sand} seed={13} />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="the scrapbook"
          accent="gold"
          title="The real me, beyond school and work"
          subtitle="Believe it or not, my life is so much more than just school and work."
        />

        <div className="mt-16 columns-1 gap-8 sm:columns-2 lg:columns-3 [&>*]:mb-9 [&>*]:break-inside-avoid">
          {life.map((l, i) => {
            const a = accentStyles[l.accent]
            const tone = a.tape as '' | 'tape-sea' | 'tape-coral' | 'tape-palm'
            return (
              <Reveal key={l.id} from="drop" delay={(i % 3) * 140}>
                <article
                  style={{ transform: `rotate(${tilts[i % tilts.length]}deg)` }}
                  className={`group relative p-3 pb-5 shadow-xl shadow-navy/20 transition-transform duration-500 hover:!rotate-0 hover:-translate-y-1 ${l.image ? 'bg-white' : 'lined-sm pt-8'}`}
                >
                  <Tape tone={tone} className="-top-3 left-1/2 -translate-x-1/2 -rotate-2" />
                  {l.image && (
                    <div className="aspect-[4/3] overflow-hidden border border-ink/10 bg-sand">
                      <img
                        src={l.image}
                        alt={l.imageAlt ?? l.title}
                        style={{ objectPosition: l.imagePos }}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="px-2 pt-3">
                    <span className={`rounded-sm px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest ${a.chip}`}>{l.tag}</span>
                    <h3 className="font-hand mt-2 text-[1.9rem] font-bold leading-[1.05] text-navy">{l.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{l.text}</p>
                    {l.link && (
                      <div className="mt-4">
                        <LinkPill link={l.link} accent={l.accent} />
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* a clothesline of little moments */}
        <div className="relative mx-auto mt-20 max-w-3xl">
          <p className="font-hand mb-8 text-center text-4xl font-bold text-navy">Little moments</p>
          <span className="absolute inset-x-0 top-[4.4rem] h-[3px] rounded bg-navy/60" aria-hidden />
          <div className="flex flex-wrap items-start justify-center gap-10 sm:gap-20">
            {moments.map((m, i) => (
              <Reveal key={m.src} from="drop" delay={i * 200}>
                <div className="animate-sway relative origin-top pt-6" style={{ animationDelay: `${i * -1.8}s` }}>
                  <span aria-hidden className="absolute left-1/2 top-0 z-20 h-10 w-3.5 -translate-x-1/2 rounded-sm bg-gradient-to-b from-[#d8a15e] to-[#b27a3c] shadow" />
                  <div className="w-52 sm:w-60">
                    <Polaroid src={m.src} alt={m.alt} caption={m.caption} ratio="aspect-[3/4]" rotate={0} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
