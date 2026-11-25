import { useEffect } from 'react'
import Lenis from 'lenis'

const NAV_OFFSET = -72

/** Buttery smooth scrolling for the whole page, including in page anchor links. Skipped for reduced motion. */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      anchors: { offset: NAV_OFFSET },
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])
}
