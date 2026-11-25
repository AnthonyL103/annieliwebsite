import type { Accent, Figure, Pitch } from '../data/types'
import { accentStyles } from '../lib/accents'
import { Reveal } from './Reveal'
import { Scribble } from './Scribble'
import { Tape } from './Tape'
import { Write } from './Write'

type Props = { pitch: Pitch; accent: Accent; index: number }

const figureTilts = [-1.5, 1.2, -1] as const

function FigureCard({ figure, tilt }: { figure: Figure; tilt: number }) {
  return (
    <figure
      style={{ transform: `rotate(${tilt}deg)` }}
      className="relative h-full bg-white p-2.5 pt-4 shadow-xl shadow-navy/20 transition-transform duration-500 hover:z-10 hover:!rotate-0 hover:scale-[1.03]"
    >
      <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-2" />
      <img src={figure.src} alt={figure.alt} className="h-auto w-full border border-ink/10" loading="lazy" />
      <figcaption className="font-hand px-1 pb-0.5 pt-2 text-xl leading-tight text-ink">{figure.caption}</figcaption>
    </figure>
  )
}

/** A product pitch laid out like a project board: taped printouts on one side, lined notes on the other. */
export function PitchFeature({ pitch: p, accent, index }: Props) {
  const a = accentStyles[accent]
  const [lead, ...rest] = p.figures
  const reverse = index % 2 === 1

  return (
    <article className={`grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div className="relative mx-auto w-full max-w-xl lg:sticky lg:top-24 lg:max-w-none">
        {lead && (
          <Reveal from="drop">
            <FigureCard figure={lead} tilt={figureTilts[0]} />
          </Reveal>
        )}
        <div className="mt-6 grid grid-cols-2 gap-5">
          {rest.map((f, i) => (
            <Reveal key={f.src} from="drop" delay={250 + i * 180}>
              <FigureCard figure={f} tilt={figureTilts[(i + 1) % figureTilts.length]} />
            </Reveal>
          ))}
        </div>
        <Reveal from="pop" delay={700} className={`absolute ${reverse ? '-right-2 sm:-right-5' : '-left-2 sm:-left-5'} -top-5 z-10`}>
          <span className="font-hand block -rotate-3 rounded-md border-2 border-navy bg-gold px-3 py-0.5 text-xl text-navy shadow-[3px_3px_0_0_#003660] sm:text-2xl">
            {p.chip}
          </span>
        </Reveal>
      </div>

      <div>
        <Reveal from={reverse ? 'right' : 'left'}>
          <div className="relative inline-block">
            <span className={`font-hand text-4xl font-bold ${a.text}`}>{p.eyebrow}</span>
            <Scribble variant="circle" delay={500} duration={1100} strokeWidth={2.5} className="absolute -inset-x-4 -inset-y-1 h-[calc(100%+0.5rem)] w-[calc(100%+2rem)] text-coral" />
          </div>
          <h3 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">{p.title}</h3>
          <p className="font-hand mt-1 text-2xl text-muted">{p.byline}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink">{p.summary}</p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {p.story.map((s, i) => (
            <Reveal key={s.label} from="drop" delay={i * 110}>
              <div
                className={`lined-sm margin-line relative h-full rounded-sm py-4 pl-9 pr-4 shadow-md shadow-navy/15 [--margin-x:1.6rem] ${i % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'}`}
              >
                <h4 className={`font-hand text-3xl leading-none ${a.text}`}>
                  <Write duration={700} delay={i * 110}>
                    {s.label}
                  </Write>
                </h4>
                <p className="mt-2 text-[15px] leading-7 text-ink">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <h4 className="font-hand mt-9 text-3xl font-bold text-navy">{p.featuresTitle}</h4>
          <Scribble variant="underline" delay={300} className="h-3 w-36 text-coral" />
        </Reveal>
        <ul className="mt-3 space-y-3">
          {p.features.map((f, i) => (
            <Reveal key={f} from="left" delay={80 + i * 120}>
              <li className="flex gap-3 text-[15px] leading-relaxed text-ink">
                <Scribble variant="check" strokeWidth={3} delay={200 + i * 120} className="mt-0.5 h-6 w-6 shrink-0 text-palm" />
                {f}
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={300}>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {p.tags.map((t, i) => (
              <span
                key={t}
                className={`rounded-sm border border-gold-deep/30 bg-gold-soft px-3 py-1 text-xs font-extrabold text-navy ${i % 2 ? 'rotate-1' : '-rotate-1'}`}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="font-hand mt-4 text-xl text-muted">{p.disclaimer}</p>
        </Reveal>
      </div>
    </article>
  )
}
