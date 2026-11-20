import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiTwitterFill,
} from "@remixicon/react";

function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-card">
        <div className="contact-copy">
          <p className="section-kicker">Have something in mind?</p>
          <h2>Let&apos;s make it happen.</h2>
          <p>
            I&apos;m always curious about thoughtful ideas and interesting
            challenges. Drop me a line and let&apos;s talk.
          </p>
        </div>
        <a className="button button-contact" href="mailto:dipint2023@gmail.com">
          <RiMailLine aria-hidden="true" />
          dipint2023@gmail.com
        </a>
      </div>

      <div className="social-links" aria-label="Social profiles">
        <a
          href="https://linkedin.com/in/dipinthilak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <RiLinkedinBoxFill aria-hidden="true" />
        </a>
        <a
          href="https://github.com/in/dipinthilak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <RiGithubFill aria-hidden="true" />
        </a>
        <a
          href="https://twitter.com/in/dipinthilak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Twitter profile"
        >
          <RiTwitterFill aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
