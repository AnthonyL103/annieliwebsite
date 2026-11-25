import type { Accent, LinkRef } from '../data/types'

type Props = { link: LinkRef; accent?: Accent }

const sticker: Record<Accent, string> = {
  navy: 'bg-navy-soft shadow-[3px_3px_0_0_#003660]',
  gold: 'bg-gold-soft shadow-[3px_3px_0_0_#003660]',
  sea: 'bg-sea-soft shadow-[3px_3px_0_0_#003660]',
  coral: 'bg-coral-soft shadow-[3px_3px_0_0_#003660]',
  palm: 'bg-palm-soft shadow-[3px_3px_0_0_#003660]',
}

/** Sticker style link with a hard offset shadow that presses flat on hover. */
export function LinkPill({ link, accent = 'sea' }: Props) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-md border-2 border-navy px-3.5 py-1.5 text-sm font-bold text-navy transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${sticker[accent]}`}
    >
      {link.label}
      <span aria-hidden>↗</span>
    </a>
  )
}
