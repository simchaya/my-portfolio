function ProjectCard({ title, description, technologies }) {
    return (
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    )
  }
  
  export default ProjectCard