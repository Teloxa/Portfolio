import { motion, AnimatePresence } from 'motion/react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import type { Locale, SiteCopy, Theme } from '../data'

interface FloatingNavProps {
  theme: Theme
  locale: Locale
  copy: SiteCopy
  onToggleTheme: () => void
  onToggleLocale: () => void
}

/* ── Icon components ──────────────────────────────── */

const SunIcon = () => (
  <>
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
  </>
)

const MoonIcon = () => (
  <path d="M12 3a1 1 0 0 0 0 18a7 7 0 0 1 0-18Z" />
)

const GlobeIcon = () => (
  <>
    <path d="M5 5h7M9 5c0 4-1.5 7-4 10" />
    <path d="M9 15c1.5 2 3.5 3.5 6 4" />
    <path d="M12 19h7" />
    <path d="M14 5h5l-4 14" />
  </>
)

const ArrowIcon = () => (
  <path d="M7 17L17 7M17 7H7M17 7v10" />
)

/* ── Shared SVG wrapper ───────────────────────────── */
const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
)

/* ── Main component ───────────────────────────────── */

const FloatingNav = ({ theme, locale, copy, onToggleTheme, onToggleLocale }: FloatingNavProps) => {
  const { isScrolled } = useScrollPosition()

  const isDark = theme === 'dark'

  // Shared style helpers
  const shellBase = isDark
    ? 'border-white/10 bg-neutral-900/80 shadow-2xl backdrop-blur-xl'
    : 'border-black/10 bg-white/85 shadow-2xl backdrop-blur-xl'

  const navBtnBase = isDark
    ? 'whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-neutral-400 transition-colors duration-200 hover:text-white hover:bg-white/5'
    : 'whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 hover:bg-black/5'

  const ctaBase = isDark
    ? 'flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 transition-all duration-200 hover:bg-neutral-200'
    : 'flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-slate-700'

  const iconBtnBase = isDark
    ? 'flex items-center justify-center rounded-full p-2 text-neutral-400 transition-colors duration-200 hover:text-white hover:bg-white/5'
    : 'flex items-center justify-center rounded-full p-2 text-slate-500 transition-colors duration-200 hover:text-slate-900 hover:bg-black/5'

  const localeBadgeBase = isDark
    ? 'flex items-center gap-1 rounded-full p-2 text-xs font-semibold text-neutral-400 transition-colors duration-200 hover:text-white hover:bg-white/5'
    : 'flex items-center gap-1 rounded-full p-2 text-xs font-semibold text-slate-500 transition-colors duration-200 hover:text-slate-900 hover:bg-black/5'

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          key="floating-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-max"
        >
          {/* ── DESKTOP layout (md+): nav links + CTA + controls ── */}
          <div className={`hidden md:flex items-center gap-2`}>
            {/* Nav links shell */}
            <div className={`flex items-center gap-0.5 rounded-full border px-1.5 py-1.5 ${shellBase}`}>
              {copy.navItems.map((item) => (
                <a key={item.href} href={item.href} className={navBtnBase}>
                  {item.label}
                </a>
              ))}
              {/* CTA */}
              <a
                href="mailto:moralesdvd03@hotmail.com"
                className={`ml-1 ${ctaBase}`}
              >
                {copy.controls.cta}
                <Icon><ArrowIcon /></Icon>
              </a>
            </div>

            {/* Theme toggle */}
            <button
              type="button"
              aria-label={copy.controls.themeAria}
              onClick={onToggleTheme}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium ${shellBase} ${isDark ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/90' : 'text-slate-600 hover:text-slate-900 hover:bg-white'} transition-colors duration-200`}
            >
              <Icon>{theme === 'dark' ? <SunIcon /> : <MoonIcon />}</Icon>
              <span>{copy.controls.theme}</span>
            </button>

            {/* Locale toggle */}
            <button
              type="button"
              aria-label={copy.controls.languageAria}
              onClick={onToggleLocale}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium ${shellBase} ${isDark ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/90' : 'text-slate-600 hover:text-slate-900 hover:bg-white'} transition-colors duration-200`}
            >
              <Icon><GlobeIcon /></Icon>
              <span>{locale === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </div>

          {/* ── MOBILE layout: single compact pill ── */}
          <div className={`flex md:hidden items-center gap-1 rounded-full border px-2 py-1.5 ${shellBase}`}>
            {/* CTA */}
            <a
              href="mailto:moralesdvd03@hotmail.com"
              className={ctaBase}
            >
              {copy.controls.cta}
              <Icon><ArrowIcon /></Icon>
            </a>

            {/* Divider */}
            <span className={`w-px h-4 mx-0.5 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

            {/* Theme icon-only */}
            <button
              type="button"
              aria-label={copy.controls.themeAria}
              onClick={onToggleTheme}
              className={iconBtnBase}
            >
              <Icon>{theme === 'dark' ? <SunIcon /> : <MoonIcon />}</Icon>
            </button>

            {/* Locale badge */}
            <button
              type="button"
              aria-label={copy.controls.languageAria}
              onClick={onToggleLocale}
              className={localeBadgeBase}
            >
              <span className="text-[10px] font-bold tracking-wider">
                {locale === 'en' ? 'ES' : 'EN'}
              </span>
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default FloatingNav
