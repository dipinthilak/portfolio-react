import { RiArrowRightUpLine } from "@remixicon/react";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <section className="content-section section-wrap" id="projects">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2>Ideas made real.</h2>
        </div>
        <p>
          A selection of applications and experiences built with a focus on
          useful details, thoughtful interfaces, and reliable foundations.
        </p>
      </div>

      <div className="project-grid">
        {PROJECTS.map((project, index) => {
          const hasProjectLink =
            project.link !== "#" && !project.link.includes("example-");

          return (
            <article className="project-card" key={project.id}>
              <div className="project-card-header">
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {hasProjectLink && (
                  <a
                    className="project-open-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <RiArrowRightUpLine aria-hidden="true" />
                  </a>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label="Technology stack">
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
