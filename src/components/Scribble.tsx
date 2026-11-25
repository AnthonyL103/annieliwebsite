import type { CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'

type Variant = 'underline' | 'squiggle' | 'circle' | 'check'

const shapes: Record<Variant, { viewBox: string; d: string }> = {
  underline: { viewBox: '0 0 200 14', d: 'M3,9 C40,3 70,12 105,7 S165,4 197,8' },
  squiggle: {
    viewBox: '0 0 200 14',
    d: 'M2,7 Q12,0 22,7 T42,7 T62,7 T82,7 T102,7 T122,7 T142,7 T162,7 T182,7 T198,7',
  },
  circle: { viewBox: '0 0 200 80', d: 'M100,6 C40,4 6,24 8,44 C10,68 70,76 118,72 C170,66 196,48 190,28 C184,10 140,4 96,10' },
  check: { viewBox: '0 0 24 24', d: 'M3,13 L9,19 L21,4' },
}

type Props = {
  variant?: Variant
  /** Tailwind classes for size, position and colour (stroke uses currentColor). */
  className?: string
  strokeWidth?: number
  delay?: number
  duration?: number
}

/** A pencil stroke that draws itself the first time it scrolls into view. */
export function Scribble({ variant = 'underline', className = '', strokeWidth = 3, delay = 0, duration = 900 }: Props) {
  const [ref, inView] = useInView<SVGSVGElement>(0.5)
  const { viewBox, d } = shapes[variant]
  const style = { '--d': `${delay}ms`, '--dur': `${duration}ms` } as CSSProperties

  return (
    <svg ref={ref} viewBox={viewBox} preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d={d}
        pathLength={1}
        style={style}
        className={`scribble ${inView ? 'in' : ''}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
