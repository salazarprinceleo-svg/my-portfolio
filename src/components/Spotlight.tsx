import { useEffect, useRef } from "react";

/**
 * A quiet radial glow that follows the pointer across the whole page.
 * Replaces the old always-on floating blobs: instead of decorative motion
 * that never stops, the background now only moves in response to what
 * the visitor actually does.
 */
function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 700px)").matches) return;

    let raf = 0;

    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--spot-x", `${e.clientX}px`);
        el.style.setProperty("--spot-y", `${e.clientY}px`);
        el.classList.add("is-active");
      });
    };

    const handleLeave = () => el.classList.remove("is-active");

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-spotlight" aria-hidden="true" />;
}

export default Spotlight;
