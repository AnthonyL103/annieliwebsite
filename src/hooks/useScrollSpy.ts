import { useEffect, useState } from 'react'

type Spy = { readonly progress: number; readonly active: string }

/** Tracks page scroll progress (0 to 1) and which section id is currently under the reading line. */
export function useScrollSpy(ids: readonly string[]): Spy {
  const [spy, setSpy] = useState<Spy>({ progress: 0, active: ids[0] ?? '' })

  useEffect(() => {
    let raf = 0
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const y = window.scrollY
      const probe = y + window.innerHeight * 0.35
      let active = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= probe) active = id
      }
      setSpy((prev) => {
        const progress = max > 0 ? Math.min(1, y / max) : 0
        return prev.active === active && Math.abs(prev.progress - progress) < 0.002 ? prev : { progress, active }
      })
    }
    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(measure)
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ids])

  return spy
}
