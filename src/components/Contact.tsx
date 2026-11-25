import { links, profile } from '../data/profile'
import { sectionColors } from '../lib/accents'
import { Mark } from './Mark'
import { Reveal } from './Reveal'
import { Scribble } from './Scribble'
import { Sun } from './Sun'
import { TornEdge } from './TornEdge'
import { Waves, type WaveLayer } from './Waves'
import { Write } from './Write'

const phoneHref = `tel:+1${profile.phone.replace(/\D/g, '')}`

type Line = { label: string; text: string; href: string; external?: boolean }

const lines: readonly Line[] = [
  { label: 'Email', text: profile.email, href: `mailto:${profile.email}` },
  { label: 'School', text: profile.schoolEmail, href: `mailto:${profile.schoolEmail}` },
  { label: 'Phone', text: profile.phone, href: phoneHref },
  { label: 'LinkedIn', text: 'annieli0183', href: links.linkedin.href, external: true },
  { label: 'Resume', text: 'Read my resume', href: links.resume.href, external: true },
  { label: 'Letter', text: 'Read my cover letter', href: links.coverLetter.href, external: true },
]

const sunsetSurf: readonly WaveLayer[] = [
  { fill: '#fff4d6', opacity: 0.6, anim: 'animate-roll-c', offset: -2, amplitude: 28 },
  { fill: '#047a9c', opacity: 0.92, anim: 'animate-roll-b', offset: 16, amplitude: 34 },
  { fill: '#003660', anim: 'animate-roll-a', offset: 42, amplitude: 26 },
]

const airmail =
  'repeating-linear-gradient(135deg, #d9472f 0 16px, #fffdf6 16px 32px, #047a9c 32px 48px, #fffdf6 48px 64px)'

export function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#ffe08a] via-[#ffb26b] to-[#ec6b4f] pb-52 pt-24">
      <TornEdge fill={sectionColors.sunrise} seed={25} />
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <Sun className="-bottom-[300px] left-1/2 w-[900px] -translate-x-1/2" />
        <Waves layers={sunsetSurf} className="h-44 sm:h-52" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal from="drop">
          <div className="-rotate-1 p-3 shadow-2xl shadow-navy/40" style={{ background: airmail }}>
            <div className="grid gap-9 bg-paper px-6 py-9 sm:px-10 sm:py-11 md:grid-cols-[1.25fr_1fr]">
              <div>
                <p className="font-hand text-3xl text-coral-deep sm:text-4xl">
                  <Write pencil duration={1300}>
                    Greetings from Santa Barbara!
                  </Write>
                </p>
                <h2 className="font-display mt-3 text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl">
                  Thank you for <Mark delay={900}>your time.</Mark>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  If you made it this far, I appreciate it and I look forward to connecting.
                </p>
                <p className="font-hand mt-6 text-4xl font-bold text-navy">
                  Warmly, Annie
                  <Scribble variant="squiggle" delay={1200} duration={1200} className="mt-1 block h-3 w-44 text-coral" />
                </p>
              </div>

              <div>
                <div className="flex justify-end">
                  <div className="relative">
                    <div className="w-24 rotate-3 border-[3px] border-dashed border-navy bg-gold p-1.5 shadow-md">
                      <div className="flex aspect-[3/4] flex-col items-center justify-between bg-sea px-1 py-2 text-center text-white">
                        <svg viewBox="0 0 40 40" className="h-9 w-9 text-gold" aria-hidden>
                          <circle cx="20" cy="20" r="8" fill="currentColor" />
                          <path d="M20 3v6M20 31v6M3 20h6M31 20h6M8 8l4 4M28 28l4 4M8 32l4-4M28 12l4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                        </svg>
                        <span className="text-[9px] font-extrabold uppercase leading-tight tracking-widest">Santa Barbara</span>
                      </div>
                    </div>
                    <svg viewBox="0 0 120 60" className="absolute -left-14 top-2 h-12 w-28 text-navy/70" aria-hidden>
                      <circle cx="82" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M4,16 Q14,8 24,16 T44,16 M4,30 Q14,22 24,30 T44,30 M4,44 Q14,36 24,44 T44,44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <ul className="mt-6">
                  {lines.map((l) => (
                    <li key={l.label} className="border-b-2 border-dotted border-ink/30">
                      <a
                        href={l.href}
                        {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group flex items-baseline gap-3 py-1.5"
                      >
                        <span className="font-hand w-[4.75rem] shrink-0 text-2xl leading-none text-sea-deep">{l.label}</span>
                        <span className="break-all text-sm font-extrabold text-navy underline-offset-4 group-hover:underline">
                          {l.text}
                          {l.external ? ' ↗' : ''}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="absolute inset-x-0 bottom-20 z-10 text-center text-xs font-bold text-white/85 lg:bottom-5">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
    </section>
  )
}
