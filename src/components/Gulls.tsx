const flock = [
  { top: '12%', delay: '-4s', size: 'w-9' },
  { top: '20%', delay: '-12s', size: 'w-6' },
  { top: '8%', delay: '-24s', size: 'w-7' },
] as const

/** A few seagulls drifting across the sky. */
export function Gulls() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden" aria-hidden>
      {flock.map((g, i) => (
        <svg
          key={i}
          viewBox="0 0 40 16"
          className={`absolute left-0 ${g.size} animate-gull text-navy/70`}
          style={{ top: g.top, animationDelay: g.delay, animationDuration: `${34 + i * 6}s` }}
        >
          <path d="M2,10 Q10,0 20,9 Q30,0 38,10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  )
}
