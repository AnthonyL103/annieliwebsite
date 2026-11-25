type Props = { className?: string }

/** A yellow pencil pointing down, tip at the bottom centre of its box (24 x 64). */
export function Pencil({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 24 64" className={className} aria-hidden>
      <rect x="6" y="0" width="12" height="6" rx="2" fill="#f08a9c" />
      <rect x="5.5" y="5" width="13" height="6" fill="#b8bec7" />
      <path d="M5.5 7h13M5.5 9h13" stroke="#8d949e" strokeWidth="0.8" />
      <rect x="6" y="11" width="12" height="38" fill="#febc11" />
      <rect x="6" y="11" width="4" height="38" fill="#e6a700" />
      <rect x="14.5" y="11" width="3.5" height="38" fill="#ffd45c" />
      <polygon points="6,49 18,49 12,63" fill="#f1d3a1" />
      <polygon points="6,49 10.5,49 12,63" fill="#e1bb82" />
      <polygon points="10.2,58 13.8,58 12,63" fill="#2b2f36" />
    </svg>
  )
}
