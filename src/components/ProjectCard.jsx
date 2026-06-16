export default function ProjectCard({ project, onDonate }) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <p>
        <strong>Goal:</strong> {project.goal}
      </p>

      <p>
        <strong>Raised:</strong> {project.raised}
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${project.progress}%`,
          }}
        ></div>
      </div>

      <p>{project.progress}% funded</p>

      <button onClick={onDonate}>Donate Now</button>
    </div>
  );
}
