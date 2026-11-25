export type WaveLayer = {
  fill: string
  opacity?: number
  /** Tailwind animation class, e.g. "animate-roll-a". */
  anim: string
  /** Vertical offset in px, so layers stagger. */
  offset?: number
  amplitude?: number
}

const PERIOD = 360
const TOTAL = 2880

function wavePath(amplitude: number): string {
  const top = 70 - amplitude
  let d = `M0,70 Q${PERIOD / 4},${top} ${PERIOD / 2},70`
  for (let x = PERIOD; x <= TOTAL; x += PERIOD / 2) d += ` T${x},70`
  return `${d} L${TOTAL},140 L0,140 Z`
}

/** Seamless rolling surf: each layer is two screens of sine wave sliding sideways forever. */
export function Waves({ layers, className = '' }: { layers: readonly WaveLayer[]; className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-36 overflow-hidden sm:h-44 ${className}`} aria-hidden>
      {layers.map((l, i) => (
        <svg
          key={i}
          viewBox={`0 0 ${TOTAL} 140`}
          preserveAspectRatio="none"
          className={`absolute bottom-0 left-0 h-full w-[200%] ${l.anim}`}
          style={{ transform: `translateY(${l.offset ?? 0}px)`, opacity: l.opacity ?? 1 }}
        >
          <path d={wavePath(l.amplitude ?? 36)} fill={l.fill} />
        </svg>
      ))}
    </div>
  )
}
