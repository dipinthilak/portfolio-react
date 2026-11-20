import { SKILLS } from "../constants";

function Skills() {
  return (
    <section className="content-section section-wrap" id="skills">
      <div className="section-heading">
        <div>
          <p className="section-kicker">What I work with</p>
          <h2>Tools of the trade.</h2>
        </div>
        <p>
          A practical toolkit for bringing a product from the first component
          to the database and back again.
        </p>
      </div>

      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
