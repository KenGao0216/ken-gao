import { useEffect } from 'react'

import { projects, piDigits } from './data'
import './App.css'
import ProjectCard from './components/ProjectCard'
import Pi from './components/Pi'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function App() {
  useScrollReveal()

  return (
    <div className="site">
      <nav className="nav">
        <div className="nav-brand">Ken Gao</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#pi">Pi</a>
          <a href="https://github.com/KenGao0216" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-badge">CS @ University of Waterloo</div>
        <h1 className="hero-title">
          Hey, I'm <span className="highlight">Ken</span>.
          <br />
        </h1>
        <p className="hero-subtitle">
          I'm passionate about AI, algorithms, and
          creating impactful software. I like to tinker, optimize, and push the
          boundaries of what I can build.
        </p>
        <div className="hero-interests">
          <span className="interests-label">Things I enjoy</span>
          <div className="interests-tags">
            <span className="interest-tag">Basketball</span>
            <span className="interest-tag">Chess</span>
            <span className="interest-tag">Memorizing Pi</span>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      <div className="section-divider" />

      <section className="section reveal" id="projects">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A selection of things I've built</p>
        <ProjectCard projects={projects} />
      </section>

      <div className="section-divider" />

      <section className="section reveal" id="pi">
        <h2 className="section-title">Pi Digits</h2>
        <p className="section-subtitle">
          One cool thing about me — I memorize digits of pi for fun
        </p>
        <Pi digits={piDigits} count={piDigits.length} />
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">Ken Gao</div>
          <div className="footer-links">
            <a href="https://github.com/KenGao0216" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#projects">Projects</a>
            <a href="#pi">Pi</a>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Ken Gao. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
