import { useEffect, useState } from "react";
import "./Hero.css";
import lightProfilePhoto from "../assets/image2.png";
import darkProfilePhoto from "../assets/image1.png";


const roles = [
  "Aspiring Full-Stack Developer",
  "Web Developer",
  "Mobile App Developer",
  "Open to OJT & Junior Opportunities",
];

function useTypewriter(words: string[], typingSpeed = 65, deletingSpeed = 35, pauseTime = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => isDeleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hi, I'm</p>
        <h2 className="hero-name">Prince Leo</h2>
        <h1 className="hero-title">{typedRole}<span className="typing-cursor" aria-hidden="true">|</span></h1>
        <p className="hero-description">
          I’m an aspiring developer focused on building clean, functional web applications and practical software. I’m looking for an opportunity to learn from a real team, contribute to real projects, and grow through hands on experience.
        </p>

        <div className="availability-badge"><span className="availability-dot" />Status: Available</div>

        <div className="social-row" aria-label="Social links">
          <a className="social-circle" href="https://www.facebook.com/princeleosalazar" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h-2a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
            </svg>
            <span className="social-tooltip">Facebook</span>
          </a>
          <a className="social-circle" href="https://github.com/salazarprinceleo-svg" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span className="social-tooltip">GitHub</span>
          </a>
          <a className="social-circle" href="https://www.linkedin.com/in/princeleosalazar/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8Z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="social-tooltip">LinkedIn</span>
          </a>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="mailto:salazarprinceleo@gmail.com" className="btn secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" />
            </svg>
            Email Me
          </a>
        </div>
      </div>

      <div className="hero-image" aria-label="Profile portrait">
        <div className="hero-image-frame">
          <span className="image-corner corner-tl" />
          <span className="image-corner corner-tr" />
          <span className="image-corner corner-bl" />
          <span className="image-corner corner-br" />

          <img className="hero-photo hero-photo-light" src={lightProfilePhoto} alt="Prince Leo Salazar" />
          <img className="hero-photo hero-photo-dark" src={darkProfilePhoto} alt="Prince Leo Salazar" />
        </div>
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Hero;