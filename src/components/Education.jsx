import { RiGraduationCapLine } from "@remixicon/react";
import { EDUCATION } from "../constants";

function Education() {
  return (
    <section className="content-section section-wrap" id="education">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Learning foundation</p>
          <h2>Education.</h2>
        </div>
      </div>

      <div className="education-grid">
        {EDUCATION.map((education) => (
          <article className="education-card" key={education.id}>
            <span className="education-icon">
              <RiGraduationCapLine aria-hidden="true" />
            </span>
            <p className="education-duration">{education.duration}</p>
            <h3>{education.degree}</h3>
            <p className="education-institution">{education.institution}</p>
            {education.description && <p>{education.description}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
