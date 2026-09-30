import { useEffect, useRef, useState, type ReactNode } from "react";
import "./ScrollReveal.css";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preferences and show content immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const classes = [
    "scroll-reveal",
    `direction-${direction}`,
    isVisible ? "scroll-reveal--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
