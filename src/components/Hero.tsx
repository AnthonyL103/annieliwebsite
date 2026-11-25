import { photos } from '../data/photos'
import { links, profile } from '../data/profile'
import { Gulls } from './Gulls'
import { Mark } from './Mark'
import { Polaroid } from './Polaroid'
import { Reveal } from './Reveal'
import { Scribble } from './Scribble'
import { Sun } from './Sun'
import { Waves, type WaveLayer } from './Waves'
import { Write } from './Write'

const surf: readonly WaveLayer[] = [
  { fill: '#6ccad6', opacity: 0.55, anim: 'animate-roll-c', offset: -6, amplitude: 30 },
  { fill: '#047a9c', opacity: 0.4, anim: 'animate-roll-b', offset: 8, amplitude: 38 },
  { fill: '#fbeecb', anim: 'animate-roll-a', offset: 34, amplitude: 28 },
]

const polaroids = [
  { src: photos.annieSunset, alt: 'Annie smiling at the beach in golden sunset light', caption: 'Golden hour', cls: 'left-[3%] top-0 w-[56%]', rot: -5, pos: '50% 30%', ratio: 'aspect-[4/3.4]', delay: 700, tone: '' },
  { src: photos.annieDinner, alt: 'Annie at a candlelit patio dinner holding a bouquet', caption: 'Good food, good people', cls: 'right-0 top-[8%] w-[38%]', rot: 6, pos: '50% 35%', ratio: 'aspect-[4/5]', delay: 900, tone: 'tape-coral' },
  { src: photos.annieLeo, alt: 'Annie kissing her fluffy cat Leo', caption: 'Me and Leo', cls: 'left-0 bottom-[4%] w-[38%]', rot: -7, pos: '70% 50%', ratio: 'aspect-square', delay: 1100, tone: 'tape-sea' },
  { src: photos.heroSantaBarbara, alt: 'Palm trees, mountains and the ocean in Santa Barbara', caption: 'Santa Barbara', cls: 'right-[4%] bottom-0 w-[54%]', rot: 3, pos: '50% 50%', ratio: 'aspect-[16/11]', delay: 1300, tone: '' },
] as const

const pageStickers = [
  { text: 'Aspiring Product Manager', cls: '-top-5 right-3 rotate-3 sm:-right-6 sm:top-10', delay: 2000 },
  { text: 'Office Manager at Coastal Well Woman', cls: '-bottom-4 right-6 -rotate-2 sm:right-10', delay: 2200 },
] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#fff1a8] via-[#fff8d6] to-[#bfeaf2] pb-48 pt-24 sm:pt-28"
    >
      <Sun className="-right-40 -top-40 -z-10 w-[640px]" />
      <Gulls />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* the notebook page */}
        <Reveal from="drop" className="relative">
          <div className="margin-line lined relative -rotate-1 rounded-md py-10 pl-16 pr-6 shadow-2xl shadow-navy/25 [--margin-x:3.4rem] sm:pl-24 sm:pr-10 sm:[--margin-x:4.4rem]">
            <div className="absolute inset-y-8 left-2 flex flex-col justify-between sm:left-4" aria-hidden>
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="block h-3.5 w-9 rounded-full border-[3px] border-navy bg-gradient-to-b from-white to-sea-soft shadow-sm" />
              ))}
            </div>

            <p className="font-hand text-3xl text-coral-deep sm:text-4xl">
              <Write pencil duration={1000}>
                Hello, my name is
              </Write>
            </p>
            <h1 className="font-hand text-7xl font-bold leading-[0.95] text-navy sm:text-9xl">
              <Write pencil delay={900} duration={1500} className="pb-2">
                Annie Li
              </Write>
              <Scribble variant="underline" delay={2300} duration={900} className="-mt-1 block h-4 w-64 text-gold sm:h-5 sm:w-96" strokeWidth={4} />
            </h1>

            <Reveal delay={2000}>
              <p className="font-display mt-6 text-2xl font-semibold leading-snug text-ink sm:text-4xl">
                I turn everyday frustrations into <Mark delay={2700}>better products.</Mark>
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.blurb}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#pitches"
                  className="rounded-md border-2 border-navy bg-gold px-6 py-3 text-sm font-extrabold text-navy shadow-[4px_4px_0_0_#003660] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  See my pitches →
                </a>
                <a
                  href="#contact"
                  className="rounded-md border-2 border-navy bg-white px-6 py-3 text-sm font-extrabold text-navy shadow-[4px_4px_0_0_#003660] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Get in touch
                </a>
                <a
                  href={links.resume.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-1 text-sm font-bold text-sea-deep underline decoration-2 underline-offset-4"
                >
                  Resume ↗
                </a>
              </div>
              <p className="font-hand mt-8 text-3xl text-sea-deep">{profile.tagline}</p>
            </Reveal>
          </div>
          {pageStickers.map((s) => (
            <Reveal key={s.text} from="pop" delay={s.delay} className={`absolute z-10 ${s.cls}`}>
              <span className="font-hand block whitespace-nowrap rounded-md border-2 border-navy bg-gold px-3 py-0.5 text-xl text-navy shadow-[3px_3px_0_0_#003660] sm:text-2xl">
                {s.text}
              </span>
            </Reveal>
          ))}
        </Reveal>

        {/* photos pinned to the page */}
        <div className="relative mx-auto h-[460px] w-full max-w-[560px] sm:h-[580px]">
          {polaroids.map((p) => (
            <Reveal key={p.alt} from="drop" delay={p.delay} className={`absolute ${p.cls}`}>
              <Polaroid src={p.src} alt={p.alt} caption={p.caption} rotate={p.rot} pos={p.pos} ratio={p.ratio} tone={p.tone} eager />
            </Reveal>
          ))}
          <Reveal from="pop" delay={1900} className="absolute -top-3 right-2 z-10 rotate-2">
            <span className="font-hand block whitespace-nowrap rounded-md border-2 border-navy bg-gold px-3 py-0.5 text-xl text-navy shadow-[3px_3px_0_0_#003660] sm:text-2xl">
              Project CARE Board Member
            </span>
          </Reveal>
        </div>
      </div>

      <Waves layers={surf} />
    </section>
  )
}
