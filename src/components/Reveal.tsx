import type { ReactNode, CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'

type Variant = 'rise' | 'drop' | 'left' | 'right' | 'pop'

type Props = {
  children: ReactNode
  delay?: number
  /** drop: slapped on like a sticky note. pop: stamped. left and right: slid in like a sheet of paper. */
  from?: Variant
  className?: string
}

const variantClass: Record<Variant, string> = {
  rise: 'r-rise',
  drop: 'r-drop',
  left: 'r-left',
  right: 'r-right',
  pop: 'r-pop',
}

/** Brings its children onto the page with an overshoot, the first time they scroll into view. */
export function Reveal({ children, delay = 0, from = 'rise', className = '' }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{ '--d': `${delay}ms` } as CSSProperties}
      className={`r ${variantClass[from]} ${inView ? 'in' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
