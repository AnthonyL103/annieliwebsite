import type { CSSProperties } from 'react'
import { Tape } from './Tape'

type Props = {
  src: string
  alt: string
  caption?: string
  /** Resting tilt in degrees. Straightens a little on hover. */
  rotate?: number
  /** Aspect ratio class for the photo window. */
  ratio?: string
  pos?: string
  tone?: '' | 'tape-sea' | 'tape-coral' | 'tape-palm'
  className?: string
  eager?: boolean
}

/** A taped instant photo with a handwritten caption. */
export function Polaroid({ src, alt, caption, rotate = 0, ratio = 'aspect-[4/5]', pos, tone = '', className = '', eager = false }: Props) {
  return (
    <figure
      style={{ '--tilt': `${rotate}deg`, transform: `rotate(${rotate}deg)` } as CSSProperties}
      className={`relative bg-white p-2.5 shadow-xl shadow-navy/20 transition-transform duration-500 hover:z-20 hover:scale-[1.04] hover:!rotate-0 ${caption ? 'pb-3' : ''} ${className}`}
    >
      <Tape tone={tone} className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
      <div className={`${ratio} overflow-hidden bg-sand`}>
        <img
          src={src}
          alt={alt}
          style={{ objectPosition: pos }}
          className="h-full w-full object-cover"
          loading={eager ? 'eager' : 'lazy'}
        />
      </div>
      {caption && <figcaption className="px-1 pb-0.5 pt-2 text-center font-hand text-xl leading-tight text-ink">{caption}</figcaption>}
    </figure>
  )
}
