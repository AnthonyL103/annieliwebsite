/** A bright sun with slowly turning rays. Position it with className. */
export function Sun({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute aspect-square ${className}`} aria-hidden>
      <div
        className="absolute inset-0 animate-rays rounded-full"
        style={{
          background: 'repeating-conic-gradient(from 0deg, rgba(254,188,17,0.42) 0deg 7deg, transparent 7deg 20deg)',
          maskImage: 'radial-gradient(circle, #000 18%, transparent 68%)',
          WebkitMaskImage: 'radial-gradient(circle, #000 18%, transparent 68%)',
        }}
      />
      <div className="absolute inset-[34%] animate-glow rounded-full bg-gold shadow-[0_0_80px_30px_rgba(254,188,17,0.65)]" />
    </div>
  )
}
