import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import FloatingNav from './components/FloatingNav'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import About from './components/About'
import Footer from './components/Footer'
import { siteCopy, type Locale, type Theme } from './data'

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'

  const storedTheme = window.localStorage.getItem('portfolio-theme')
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme

  return 'dark'
}

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en'

  const storedLocale = window.localStorage.getItem('portfolio-locale')
  if (storedLocale === 'en' || storedLocale === 'es') return storedLocale

  return window.navigator.language.startsWith('es') ? 'es' : 'en'
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  const copy = siteCopy[locale]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem('portfolio-locale', locale)
  }, [locale])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const toggleLocale = () => {
    setLocale((currentLocale) => (currentLocale === 'en' ? 'es' : 'en'))
  }

  return (
    <>
      <FloatingNav
        theme={theme}
        locale={locale}
        copy={copy}
        onToggleTheme={toggleTheme}
        onToggleLocale={toggleLocale}
      />
      <main>
        <Hero copy={copy.hero} />
        <Projects copy={copy.projects} />
        <TechStack copy={copy.tech} />
        <About copy={copy.about} />
      </main>
      <Footer copy={copy.footer} />
    </>
  )
}

export default App
