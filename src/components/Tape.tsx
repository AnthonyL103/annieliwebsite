type Props = {
  /** Positioning and rotation classes, e.g. "-top-3 left-1/2 -translate-x-1/2 -rotate-3". */
  className?: string
  tone?: '' | 'tape-sea' | 'tape-coral' | 'tape-palm'
}

/** A strip of washi tape holding something to the page. */
export function Tape({ className = '', tone = '' }: Props) {
  return <span aria-hidden className={`tape ${tone} ${className}`} />
}
