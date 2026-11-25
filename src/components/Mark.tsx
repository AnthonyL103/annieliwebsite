import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

const colors = {
  gold: 'rgba(254, 188, 17, 0.62)',
  sea: 'rgba(108, 202, 214, 0.7)',
  coral: 'rgba(255, 140, 120, 0.55)',
  palm: 'rgba(130, 200, 150, 0.6)',
} as const

type Props = { children: ReactNode; color?: keyof typeof colors; delay?: number }

/** Highlighter pen swipe across the text, played once when it scrolls into view. */
export function Mark({ children, color = 'gold', delay = 300 }: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5)
  const style = { '--mark': colors[color], '--d': `${delay}ms` } as CSSProperties
  return (
    <span ref={ref} style={style} className={`mark ${inView ? 'in' : ''}`}>
      {children}
    </span>
  )
}
