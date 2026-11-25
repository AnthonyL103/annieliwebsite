import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { Pencil } from './Pencil'

type Props = {
  children: ReactNode
  delay?: number
  /** Milliseconds the wipe takes to cross the text. */
  duration?: number
  /** Show a pencil that travels along the text as it is written. Best for a single line. */
  pencil?: boolean
  /** Lay the text out as a block so wrapped lines wipe in together. */
  block?: boolean
  className?: string
}

/** Text that is "written" onto the page: a stepped left to right wipe, optionally chased by a pencil. */
export function Write({ children, delay = 0, duration = 1400, pencil = false, block = false, className = '' }: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.35)
  const style = { '--d': `${delay}ms`, '--dur': `${duration}ms` } as CSSProperties

  return (
    <span ref={ref} style={style} className={`relative ${block ? 'block' : 'inline-block'} ${className}`}>
      <span className={`write ${block ? 'block' : 'inline-block'} ${inView ? 'in' : ''}`}>{children}</span>
      {pencil && (
        <span aria-hidden className={`write-pencil ${inView ? 'in' : ''}`}>
          <Pencil className="h-full w-full animate-wobble" />
        </span>
      )}
    </span>
  )
}
