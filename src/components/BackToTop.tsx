import { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? "is-visible" : ""}`}
      onClick={goHome}
      aria-label="Back to home"
      title="Back to home"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
      </svg>
    </button>
  );
}

export default BackToTop;
