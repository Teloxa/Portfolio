import { motion, AnimatePresence } from 'motion/react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { navItems } from '../data'

const FloatingNav = () => {
  const { isScrolled } = useScrollPosition()

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
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/80 px-2 py-2 shadow-2xl backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            {/* CTA button — inverted contrast */}
            <a
              href="mailto:you@email.com"
              className="ml-1 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition-all duration-200 hover:bg-neutral-200"
            >
              Let's Talk
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
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default FloatingNav
