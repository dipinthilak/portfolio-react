import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "@remixicon/react";
import { useRef } from "react";

function Contact() {
  const contactRef = useRef(null);
  return (
    <section className="py-16 mb-96" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className="mb-4 text-lg lg:text-xl">
          Feel free to reach our to me via email :{" "}
          <a href="mailto:dipint2023@gmail.com" className="border-b">
            dipint2023@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/dipinthilak"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/in/dipinthilak"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my github profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>
          <a
            href="https://twitter.com/in/dipinthilak"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my twitter profile"
          >
            <RiTwitterFill className="text-3xl" />
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
