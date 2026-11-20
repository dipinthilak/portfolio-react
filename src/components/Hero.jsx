import { RiArrowRightUpLine, RiDownloadLine } from "@remixicon/react";
import { PROFILE } from "../constants";
import avatar from "../assets/avatar.png";

function Hero() {
  return (
    <section className="hero-section section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="availability-dot" />
          Open to interesting projects
        </p>
        <h1>
          Building thoughtful
          <span className="headline-accent"> digital experiences.</span>
        </h1>
        <p className="hero-role">{PROFILE.role}</p>
        <p className="hero-description">{PROFILE.subheading}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <RiArrowRightUpLine aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="/dipin_resume.pdf" download>
            Resume <RiDownloadLine aria-hidden="true" />
          </a>
        </div>
        <div className="hero-highlights" aria-label="Portfolio highlights">
          <div>
            <strong>04+</strong>
            <span>Years of experience</span>
          </div>
          <div>
            <strong>06</strong>
            <span>Featured projects</span>
          </div>
          <div>
            <strong>MERN</strong>
            <span>Core stack</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit hero-orbit-outer" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-inner" aria-hidden="true" />
        <div className="hero-image-frame">
          <img
            src={avatar}
            alt={`${PROFILE.name}, ${PROFILE.role}`}
            className="hero-avatar"
            width="400"
            height="400"
            fetchPriority="high"
          />
        </div>
        <div className="floating-note">
          <span className="floating-note-icon">{"</>"}</span>
          <span>
            <strong>Full-stack mindset</strong>
            <small>From interface to API</small>
          </span>
        </div>
        <span className="hero-visual-caption">01 / INTRODUCTION</span>
      </div>
    </section>
  );
}

export default Hero;
