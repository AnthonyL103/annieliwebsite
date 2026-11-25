import { useEffect, useRef } from 'react'
import { photos } from '../data/photos'
import { useInView } from '../hooks/useInView'
import { sectionColors } from '../lib/accents'
import { Reveal } from './Reveal'
import { TornEdge } from './TornEdge'
import { Write } from './Write'

const PARALLAX_SPEED = 0.16

/** Full width photo break: the campus coastline rises like a sunrise, then drifts with a light parallax. */
export function CampusBand() {
  const band = useRef<HTMLElement>(null)
  const img = useRef<HTMLImageElement>(null)
  const [viewRef, inView] = useInView<HTMLDivElement>(0.25)

  useEffect(() => {
    const section = band.current
    const photo = img.current
    if (!section || !photo) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      const r = section.getBoundingClientRect()
      const offset = r.top + r.height / 2 - window.innerHeight / 2
      photo.style.transform = `translate3d(0, ${(-offset * PARALLAX_SPEED).toFixed(1)}px, 0) scale(1.25)`
    }
    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <section ref={band} aria-label="My lovely campus" className="relative h-[58vh] min-h-[360px] overflow-hidden bg-sea">
      <div ref={viewRef} className="absolute inset-0">
        <div
          className="absolute inset-0 transition-[clip-path] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ clipPath: inView ? 'circle(150% at 50% 100%)' : 'circle(6% at 50% 100%)' }}
        >
          <img
            ref={img}
            src={photos.ucsbCoast}
            alt="The UC Santa Barbara coastline with waves, cliffs and the mountains beyond"
            style={{ transform: 'scale(1.25)' }}
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
        </div>
      </div>
      <TornEdge fill={sectionColors.paper} mode="cut" seed={5} />
      <Reveal delay={600} className="absolute inset-x-0 bottom-20 text-center sm:bottom-24">
        <p className="font-hand text-6xl font-bold text-white drop-shadow-[0_3px_0_rgba(0,54,96,0.6)] sm:text-8xl">
          <Write pencil duration={1300}>
            My lovely campus
          </Write>
        </p>
        <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.3em] text-gold">UC Santa Barbara</p>
      </Reveal>
    </section>
  )
}
