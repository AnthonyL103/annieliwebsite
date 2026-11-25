import { links } from '../data/profile'
import { pitches } from '../data/pitches'
import type { Accent } from '../data/types'
import { sectionColors } from '../lib/accents'
import { LinkPill } from './LinkPill'
import { Mark } from './Mark'
import { PitchFeature } from './PitchFeature'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import { TornEdge } from './TornEdge'

const accents: readonly Accent[] = ['sea', 'coral']

export function Pitches() {
  return (
    <section id="pitches" className="lined relative pb-32 pt-20">
      <TornEdge fill={sectionColors.paper} seed={11} />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="my favorite projects"
          accent="coral"
          title={
            <>
              How I think like a <Mark color="sea">product manager</Mark>
            </>
          }
          subtitle="Two independent concepts that start with a real user need, propose a practical improvement, and include a plan to test it."
        />

        <div className="mt-24 flex flex-col gap-36 sm:gap-44">
          {pitches.map((p, i) => (
            <PitchFeature key={p.id} pitch={p} accent={accents[i % accents.length]} index={i} />
          ))}
        </div>

        <Reveal from="pop" className="mt-24 text-center">
          <LinkPill link={links.pitchPortfolio} accent="gold" />
        </Reveal>
      </div>
    </section>
  )
}
