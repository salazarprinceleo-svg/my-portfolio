import "./About.css";
import profilePhoto from "../assets/image3.png";
import ScrollReveal from "./ScrollReveal";

function About() {
  return (
    <section id="about" className="about">
      <ScrollReveal>
        <h2 className="about-heading">About Me</h2>
      </ScrollReveal>

      <div className="about-card">
        <ScrollReveal direction="left" className="about-image-wrap">
          <div className="about-image-panel">
            <img src={profilePhoto} alt="Prince Leo Salazar" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={100} className="about-intro-card">
          <div className="about-content">
            <h3>
              Hi, I'm <span className="accent">Prince Leo Salazar</span>
            </h3>

            <p className="about-text">
              An aspiring developer who enjoys learning, building, and improving through real projects. I focus on clean, functional code and thoughtful user experiences across web and software development.
            </p>

            <p className="about-text">
              I’m currently pursuing a degree in Information Technology and actively seeking OJT or an entry-level opportunity where I can learn from experienced developers, contribute to a team, and turn what I’ve learned into useful products.
            </p>

            <a href="/Resume.pdf" download className="cv-btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Download Resume
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={200} className="focus-card">
        <div className="focus-text">
          <h3>What I’m Looking For</h3>
          <p>
            A hands-on development role where I can strengthen my fundamentals, collaborate with a real team, and build clean, responsive solutions from planning to deployment.
          </p>
        </div>

        <div className="focus-tags">
          <div className="focus-tag">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Web Development
          </div>

          <div className="focus-tag">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            UI / UX Design
          </div>

          <div className="focus-tag">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            Mobile Developer
          </div>

          <div className="focus-tag">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
            Software Development
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default About;