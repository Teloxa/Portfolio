import './App.css'

function App() {
  return (
    <section className="hero" aria-label="intro">
      <div className="terminal-bar">
        <span className="dot"></span>
        <span>~/portfolio/teloxa — zsh</span>
      </div>

      <h1>Hi, I'm <span>Teloxa</span>_</h1>
      <p className="role">Fullstack Developer · React & Node.js</p>

      <p className="tagline">
        I build fast, scalable web apps from database to UI — and I care about
        the parts most people skip.<span className="cursor"></span>
      </p>

      <p className="status"><b>status:</b> open_to_work = true</p>

      <div className="cta-row">
        {/* Change URL to show the CV */}
        <a className="cta primary" href="">View the CV</a>  
        <a
          className="cta"
          href="https://github.com/teloxa"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub</a>
        <a className="cta" href="mailto:you@email.com">Contact</a>
      </div>
    </section>
  )
}

export default App
