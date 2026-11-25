import { photos } from '../data/photos'
import { profile } from '../data/profile'
import { sectionColors } from '../lib/accents'
import { Mark } from './Mark'
import { Polaroid } from './Polaroid'
import { Reveal } from './Reveal'
import { Scribble } from './Scribble'
import { SectionTitle } from './SectionTitle'
import { TornEdge } from './TornEdge'

const coursework = [
  'Fundamentals of Business Strategy',
  'Intermediate Python',
  'Quantitative analysis',
  'Scientific research',
  'Experimental project development',
  'Communication',
]

export function About() {
  return (
    <section id="about" className="lined relative pb-28 pt-20">
      <TornEdge fill={sectionColors.paper} seed={3} />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <SectionTitle
            align="left"
            eyebrow="a little about me"
            accent="coral"
            title={
              <>
                Why <Mark>product management?</Mark>
              </>
            }
          />
          <Reveal delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              I’m a Biological Sciences student at UC Santa Barbara, actively pursuing opportunities to explore a career in product management.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              My experience in healthcare operations and content creation has sparked a deep interest in how the digital tools I use every day get built, along with a passion for making them more effective and intuitive.
            </p>
          </Reveal>

          <Reveal from="left" delay={250}>
            <div className="relative mt-9 -rotate-1 rounded-md border-2 border-navy bg-white p-6 shadow-[8px_8px_0_0_#febc11]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-sm bg-navy px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-gold">Education</span>
                <span className="font-hand text-2xl text-coral-deep">{profile.status}</span>
              </div>
              <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{profile.school}</h3>
              <p className="text-sm font-bold text-muted">{profile.degree}</p>
              <Scribble variant="underline" delay={600} className="mt-1 h-3 w-48 text-gold" />
              <div className="mt-4 flex flex-wrap gap-2">
                {coursework.map((c, i) => (
                  <span
                    key={c}
                    className={`rounded-sm border border-navy/20 bg-sea-soft px-2.5 py-1 text-xs font-bold text-navy ${i % 2 ? 'rotate-1' : '-rotate-1'}`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Reveal from="drop" delay={150}>
            <Polaroid
              src={photos.ucsbAerial}
              alt="Aerial view of the UC Santa Barbara campus at sunset"
              caption="Home base: UC Santa Barbara"
              rotate={2}
              ratio="aspect-[4/4.6]"
              pos="38% 50%"
            />
          </Reveal>
          <Reveal from="drop" delay={450} className="absolute -bottom-12 -right-3 w-[34%] sm:-right-10">
            <Polaroid src={photos.annieDinner} alt="Annie at a patio dinner" rotate={-6} ratio="aspect-square" pos="50% 30%" tone="tape-coral" />
          </Reveal>
          <Reveal from="pop" delay={800} className="absolute -right-2 top-8 z-10 sm:-right-6">
            <span className="font-hand block rotate-6 rounded-md border-2 border-navy bg-gold px-4 py-0.5 text-3xl text-navy shadow-[3px_3px_0_0_#003660]">
              Go Gauchos!
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
