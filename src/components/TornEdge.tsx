type Props = {
  /** Opaque colour of the section this edge belongs to. */
  fill: string
  /**
   * seam: sits just above its section so the section's top edge looks torn from the previous page.
   * cut: sits inside the top of its section, flipped, so the previous page's colour tears down into it.
   */
  mode?: 'seam' | 'cut'
  seed?: number
}

const WIDTH = 1440
const HEIGHT = 56
const STEP = 18

/** Small seeded generator so every edge is irregular but renders identically on every load. */
function jaggedPath(seed: number): string {
  let s = seed * 9301 + 49297
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  let d = `M0,${HEIGHT} L0,${14 + rand() * 20}`
  for (let x = STEP; x <= WIDTH; x += STEP) d += ` L${x},${10 + rand() * 26}`
  return `${d} L${WIDTH},${HEIGHT} Z`
}

/** A ripped paper edge between sections. Parent must be `relative` and not clip overflow. */
export function TornEdge({ fill, mode = 'seam', seed = 1 }: Props) {
  const placement = mode === 'seam' ? 'top-0 -translate-y-[calc(100%-1px)] paper-shadow' : 'top-0 rotate-180'
  return (
    <div className={`pointer-events-none absolute inset-x-0 z-10 h-7 sm:h-12 ${placement}`} aria-hidden>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" className="block h-full w-full">
        <path d={jaggedPath(seed)} fill={fill} />
      </svg>
    </div>
  )
}
