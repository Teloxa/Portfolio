import { useState, useEffect } from 'react'

const SCROLL_THRESHOLD = 80

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrollY(y)
      setIsScrolled(y > SCROLL_THRESHOLD)
    }

    // Passive listener for scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, isScrolled }
}
