import type { CSSProperties } from 'react'
import { bunting } from '../data/profile'
import { Reveal } from './Reveal'

const flagColors = [
  'bg-gold text-navy',
  'bg-sea text-white',
  'bg-coral text-white',
  'bg-navy text-gold',
  'bg-palm text-white',
] as const

/** Coursework and skills as pennant flags on a string, each one swaying in the sea breeze. */
export function Bunting() {
  return (
    <div className="relative overflow-x-auto pb-4 pt-1 [scrollbar-width:none]">
      <div className="relative mx-auto flex w-max gap-3 px-6 pt-3">
        <span className="absolute inset-x-0 top-3 h-[3px] -rotate-[0.4deg] rounded bg-navy/60" aria-hidden />
        {bunting.map((label, i) => (
          <Reveal key={label} from="drop" delay={i * 90}>
            <div
              className={`animate-sway relative z-10 flex h-24 w-[7.4rem] origin-top items-start justify-center px-3 pt-3 text-center text-[13px] font-extrabold leading-tight shadow-md ${flagColors[i % flagColors.length]}`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 68%, 50% 100%, 0 68%)',
                animationDelay: `${i * -0.55}s`,
              } as CSSProperties}
            >
              {label}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
