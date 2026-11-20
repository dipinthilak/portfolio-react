import { EXPERIENCES } from "../constants";

function Experience() {
  return (
    <section className="content-section section-wrap" id="work">
      <div className="section-heading">
        <div>
          <p className="section-kicker">The journey</p>
          <h2>Experience that adds up.</h2>
        </div>
        <p>
          From keeping systems dependable to building applications that people
          use every day.
        </p>
      </div>

      <div className="experience-list">
        {EXPERIENCES.map((experience) => (
          <article className="experience-item" key={`${experience.yearRange}-${experience.role}`}>
            <div className="experience-date">{experience.yearRange}</div>
            <div className="experience-card">
              <div className="experience-card-heading">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                </div>
                <span className="experience-marker" aria-hidden="true" />
              </div>
              <p className="experience-description">{experience.description}</p>
              {experience.techStack.length > 0 && (
                <ul className="tag-list" aria-label="Technologies used">
                  {experience.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
