import { useState } from "react";
import "./Skills.css";
import ScrollReveal from "./ScrollReveal";

const heroSkills = [
  {
    name: "HTML",
    logo: "html5/html5-original.svg",
    icon: "</>",
    desc: "Semantic structure and accessible page foundations.",
    type: "Frontend",
  },
  {
    name: "CSS",
    logo: "css3/css3-original.svg",
    icon: "#",
    desc: "Responsive layouts, animation, and visual systems.",
    type: "Frontend",
  },
  {
    name: "JavaScript",
    logo: "javascript/javascript-original.svg",
    icon: "JS",
    desc: "Interactive interfaces and application logic.",
    type: "Core",
  },
  {
    name: "React",
    logo: "react/react-original.svg",
    icon: "⚛",
    desc: "Component-driven interfaces with reusable UI.",
    type: "Frontend",
  },
];

const compactSkills = [
  { name: "Tailwind CSS", logo: "tailwindcss/tailwindcss-original.svg", icon: "TW", type: "Styling" },
  { name: "TypeScript", logo: "typescript/typescript-original.svg", icon: "TS", type: "Language" },
  { name: "Node.js", logo: "nodejs/nodejs-original.svg", icon: "N", type: "Backend" },
  { name: "Laravel", logo: "laravel/laravel-original.svg", icon: "L", type: "Backend" },
  { name: "PHP", logo: "php/php-original.svg", icon: "PHP", type: "Backend" },
  { name: "Figma", logo: "figma/figma-original.svg", icon: "Fi", type: "Design" },
  { name: "Python", logo: "python/python-original.svg", icon: "Py", type: "Language" },
  { name: "Vercel", logo: "vercel/vercel-original.svg", icon: "▲", type: "Deploy" },
];

/* Devicon logos. Tries the npm CDN first, then the GitHub CDN, then a text fallback. */
const logoSources = (path: string) => [
  `https://cdn.jsdelivr.net/npm/devicon@latest/icons/${path}`,
  `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/${path}`,
];

function SkillIcon({ name, logo, fallback }: { name: string; logo: string; fallback: string }) {
  const sources = logoSources(logo);
  const [attempt, setAttempt] = useState(0);
  if (attempt >= sources.length) return <span aria-hidden="true">{fallback}</span>;
  return (
    <img
      key={attempt}
      className={`skill-logo${name === "Vercel" ? " skill-logo--mono" : ""}`}
      src={sources[attempt]}
      alt=""
      loading="eager"
      draggable={false}
      onError={() => setAttempt((a) => a + 1)}
    />
  );
}

function Skills() {
  const total = heroSkills.length + compactSkills.length;

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <ScrollReveal>
          <div className="skills-header">
            <div className="skills-header-left">
              <div className="section-kicker">
                TECHNOLOGY STACK
              </div>
              <h2>Tools I use to build and grow.</h2>
            </div>

            <p className="skills-subtitle">
              A practical stack built around clean interfaces, solid fundamentals, and technologies I can apply to real projects while continuing to grow as a developer.
            </p>
          </div>
        </ScrollReveal>

        <div className="skills-layout">
          <ScrollReveal direction="left" className="skills-sidebar-wrap">
            <aside className="skills-sidebar">
              <div className="sidebar-terminal">
                <span className="terminal-dots">
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                </span>
                <span className="terminal-path">~/prince/stack</span>
                <span className="terminal-status">READY</span>
              </div>

              <div className="sidebar-decoration" aria-hidden="true">
                &lt;/&gt;
              </div>

              <div className="sidebar-count">
                <span className="count-number">{total}</span>
                <span className="count-label">
                  technologies
                  <br />
                  in my current toolkit
                </span>
              </div>

              <p className="sidebar-text">
                I focus on understanding the fundamentals first, then choosing tools that fit the project. I’m continuously expanding this toolkit through hands-on work.
              </p>

              <div className="sidebar-tags">
                <span className="sidebar-tag">Frontend</span>
                <span className="sidebar-tag">Backend</span>
                <span className="sidebar-tag">UI / UX</span>
                <span className="sidebar-tag">Development</span>
                <span className="sidebar-tag">Management</span>
              </div>
            </aside>
          </ScrollReveal>

          <div className="skills-main">
            <div className="skills-hero-grid">
              {heroSkills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 60}>
                  <article className="skill-card">
                    <div className="skill-orbit" aria-hidden="true" />

                    <div className="skill-card-top">
                      <span className="skill-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="skill-type">{skill.type}</span>
                    </div>

                    <div className="skill-icon">
                      <SkillIcon name={skill.name} logo={skill.logo} fallback={skill.icon} />
                    </div>

                    <div className="skill-card-body">
                      <p className="skill-name">{skill.name}</p>
                      <p className="skill-desc">{skill.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <div className="skills-compact-grid">
              {compactSkills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 40}>
                  <article className="skill-row">
                    <div className="skill-row-icon">
                      <SkillIcon name={skill.name} logo={skill.logo} fallback={skill.icon} />
                    </div>

                    <div className="skill-row-info">
                      <p className="skill-row-name">{skill.name}</p>
                      <p className="skill-row-type">{skill.type}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;