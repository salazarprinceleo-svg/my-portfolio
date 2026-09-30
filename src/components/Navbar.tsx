import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDark(false);
      document.body.classList.add("light-theme");
    } else {
      setIsDark(true);
      document.body.classList.remove("light-theme");
    }
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "journey",
      "skills",
      "projects",
      "certificates",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Tech Stack", id: "skills" },
    { href: "#journey", label: "Journey", id: "journey" },
    { href: "#projects", label: "Projects", id: "projects" },
    {
      href: "#certificates",
      label: "Certificates",
      id: "certificates",
    },
  ];

  const toggleTheme = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    if (nextTheme) {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        {/* LOGO */}
        <a
          href="#home"
          className="logo"
          onClick={() => handleNavClick("home")}
        >
          PRINCE
        </a>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            title={
              isDark
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
          >
            {isDark ? (
              <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5 8.5 8.5 0 1 0 20.5 14.7Z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hire-me-btn"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={
                activeSection === link.id ? "active" : ""
              }
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}

              {activeSection === link.id && (
                <span className="mobile-active-dot"></span>
              )}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-hire"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
            <span>→</span>
          </a>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;