import { nav, navIds, profile } from '../data/profile'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Pencil } from './Pencil'

const tabColors = [
  'bg-gold text-navy',
  'bg-sea-mid text-navy',
  'bg-coral-soft text-coral-deep',
  'bg-palm-soft text-palm-deep',
  'bg-navy-soft text-navy',
] as const

/**
 * A pencil draws a margin line down the left edge as you scroll, notebook index tabs stick out of the right edge
 * on large screens, and a bottom tab bar takes over on phones.
 */
export function Nav() {
  const { progress, active } = useScrollSpy(navIds)
  const tabs = nav.filter((n) => n.id !== 'top')

  return (
    <>
      {/* margin line drawn by a pencil */}
      <div className="pointer-events-none fixed inset-y-0 left-1 z-50 w-1 sm:left-3" aria-hidden>
        <div className="relative w-[3px] rounded-full bg-coral/80" style={{ height: `${progress * 100}%` }}>
          <Pencil className="absolute bottom-[-3px] left-1/2 h-14 w-[1.3rem] -translate-x-1/2 drop-shadow" />
        </div>
      </div>

      {/* brand, only while the hero is showing */}
      <a
        href="#top"
        className={`font-hand fixed left-8 top-4 z-40 hidden items-center gap-2 rounded-full bg-paper/85 px-4 py-1 text-3xl text-navy shadow-md backdrop-blur transition-all duration-500 sm:flex ${
          active === 'top' ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
        }`}
        tabIndex={active === 'top' ? 0 : -1}
      >
        <span className="inline-block h-4 w-4 rounded-full bg-gold shadow-[0_0_0_3px_rgba(254,188,17,0.35)]" />
        {profile.name}
      </a>

      {/* desktop: index tabs */}
      <nav aria-label="Sections" className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-2 lg:flex">
        {tabs.map((n, i) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            aria-current={active === n.id ? 'true' : undefined}
            className={`font-hand rounded-l-xl border-y-2 border-l-2 border-navy/70 py-1.5 pl-4 pr-5 text-2xl leading-none shadow-md transition-transform duration-300 hover:-translate-x-1 ${
              tabColors[i % tabColors.length]
            } ${active === n.id ? '-translate-x-2 font-bold' : 'translate-x-3'}`}
          >
            {n.label}
          </a>
        ))}
      </nav>

      {/* phones: bottom tab bar */}
      <nav
        aria-label="Sections"
        className="fixed inset-x-2 bottom-2 z-40 flex gap-1 overflow-x-auto rounded-2xl border-2 border-navy bg-paper/95 p-1.5 shadow-[0_6px_0_0_rgba(0,54,96,0.25)] backdrop-blur lg:hidden"
      >
        {nav.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            aria-current={active === n.id ? 'true' : undefined}
            className={`font-hand whitespace-nowrap rounded-xl px-3 py-1 text-xl leading-tight transition-colors ${
              active === n.id ? 'bg-navy text-gold' : 'text-ink'
            }`}
          >
            {n.label}
          </a>
        ))}
      </nav>
    </>
  )
}
