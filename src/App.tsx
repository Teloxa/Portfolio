import Hero from './components/Hero'
import FloatingNav from './components/FloatingNav'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <FloatingNav />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
