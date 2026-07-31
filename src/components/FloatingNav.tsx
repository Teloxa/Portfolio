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

const FloatingNav = ({ theme, locale, copy, onToggleTheme, onToggleLocale }: FloatingNavProps) => {
  const { isScrolled } = useScrollPosition()

  const navButtonClassName =
    theme === 'dark'
      ? 'rounded-full px-2.5 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-white hover:bg-white/5'
      : 'rounded-full px-2.5 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 hover:bg-black/5'

  const floatingControlClassName =
    theme === 'dark'
      ? 'flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/80 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-neutral-400 shadow-2xl backdrop-blur-xl transition-colors duration-200 hover:text-white hover:bg-neutral-800/90'
      : 'flex items-center gap-1 rounded-full border border-black/10 bg-white/85 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-slate-600 shadow-2xl backdrop-blur-xl transition-colors duration-200 hover:text-slate-900 hover:bg-white'

  const floatingShellClassName =
    theme === 'dark'
      ? 'flex items-center gap-0.5 md:gap-1 rounded-full border border-white/10 bg-neutral-900/80 px-1.5 py-1.5 md:px-2 md:py-2 shadow-2xl backdrop-blur-xl'
      : 'flex items-center gap-0.5 md:gap-1 rounded-full border border-black/10 bg-white/85 px-1.5 py-1.5 md:px-2 md:py-2 shadow-2xl backdrop-blur-xl'

  const ctaClassName =
    theme === 'dark'
      ? 'ml-0.5 md:ml-1 flex items-center gap-1 md:gap-1.5 rounded-full bg-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-neutral-900 transition-all duration-200 hover:bg-neutral-200'
      : 'ml-0.5 md:ml-1 flex items-center gap-1 md:gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-700'

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          key="floating-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
        >
          <div className="flex items-center gap-2">
            <div className={floatingShellClassName}>
              {copy.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={navButtonClassName}
                >
                  {item.label}
                </a>
              ))}

              {/* CTA button — inverted contrast */}
              <a
                href="mailto:moralesdvd03@hotmail.com"
                className={ctaClassName}
              >
                {copy.controls.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>

            <button
              type="button"
              className={floatingControlClassName}
              aria-label={copy.controls.themeAria}
              onClick={onToggleTheme}
            >
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
                {theme === 'dark' ? (
                  <>
                    <circle cx="12" cy="12" r="4.5" />
                    <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
                  </>
                ) : (
                  <path d="M12 3a1 1 0 0 0 0 18a7 7 0 0 1 0-18Z" />
                )}
              </svg>
              <span>{copy.controls.theme}</span>
            </button>

            <button
              type="button"
              className={floatingControlClassName}
              aria-label={copy.controls.languageAria}
              onClick={onToggleLocale}
            >
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
                <path d="M5 5h7M9 5c0 4-1.5 7-4 10" />
                <path d="M9 15c1.5 2 3.5 3.5 6 4" />
                <path d="M12 19h7" />
                <path d="M14 5h5l-4 14" />
              </svg>
              <span>{locale === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default FloatingNav
