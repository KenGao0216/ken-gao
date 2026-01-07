import React, { useState } from 'react'
import './ProjectCard.css'

function ProjectCard({ projects }) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('')

  const handleChange = (dir) => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent((prev) =>
        dir === 'next'
          ? (prev + 1) % projects.length
          : (prev - 1 + projects.length) % projects.length
      )
      setAnimating(false)
    }, 500)
  }

  const project = projects[current]

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", margin: "2.5rem 0" }}>
      <button
        onClick={() => handleChange('prev')}
        aria-label="Previous Project"
        style={{
          fontSize: "2.5rem",
          padding: "1rem 1.5rem",
          borderRadius: "16px",
          minWidth: "70px",
          background: "#e2e8f0",
          border: "none",
          color: "#64748b",
          cursor: "pointer",
          boxShadow: "0 2px 8px #cbd5e180"
        }}
        disabled={animating}
      >
        &lt;
      </button>
      <div
        className={`project-card-animated ${animating ? (direction === 'next' ? 'fade-slide-next' : 'fade-slide-prev') : ''}`}
        style={{
          border: "2px solid #e2e8f0",
          borderRadius: "20px",
          padding: "2rem",
          width: 340,
          minHeight: 220,
          background: "#f8fafc",
          boxShadow: "0 4px 24px #cbd5e180",
          transition: "box-shadow 0.3s, background 0.3s, border 0.3s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
        key={current}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.7rem", color: "#334155", textAlign: "center" }}>
          {project.title}
        </div>
        <div style={{ fontSize: "1.05rem", color: "#64748b", marginBottom: "1.2rem", textAlign: "center" }}>
          {project.description}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "1.2rem",
            color: "#64748b",
            background: "#e2e8f0",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "0 2px 8px #cbd5e180",
            transition: "background 0.2s, color 0.2s"
          }}
          title="Open Project"
        >
          
          <svg width="24" height="24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M10 14L21 3"></path>
            <path d="M21 3h-7"></path>
            <path d="M21 3v7"></path>
            <path d="M17 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h10"></path>
          </svg>
        </a>
      </div>
      <button
        onClick={() => handleChange('next')}
        aria-label="Next Project"
        style={{
          fontSize: "2.5rem",
          padding: "1rem 1.5rem",
          borderRadius: "16px",
          minWidth: "70px",
          background: "#e2e8f0",
          border: "none",
          color: "#64748b",
          cursor: "pointer",
          boxShadow: "0 2px 8px #cbd5e180"
        }}
        disabled={animating}
      >
        &gt;
      </button>
    </div>
  )
}

export default ProjectCard