import './ProjectCard.css'

function ProjectCard({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          <div className="project-card-header">
            <h3 className="project-card-title">{project.title}</h3>
            <svg
              className="project-card-arrow"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
          <p className="project-card-desc">{project.description}</p>
        </a>
      ))}
    </div>
  )
}

export default ProjectCard
