import { useEffect, useRef, useState } from "react";
import "./Timeline.css";
import ScrollReveal from "./ScrollReveal";

interface TimelineItem {
  year: string;
  title: string;
  place: string;
  description: string;
  type: "education" | "training" | "milestone" | "achievement";
}

const timelineItems: TimelineItem[] = [
  { year: "2023", title: "Peñaranda National Senior High School", place: "Peñaranda, Nueva Ecija", description: "Graduated with honors, SY 2023–2024", type: "education" },
  { year: "2023", title: "NEUST - Peñaranda Off Campus", place: "Peñaranda, Nueva Ecija", description: "Started BSIT with a focus on Web Development", type: "education" },
  { year: "2023", title: "Hello World", place: "Web System Technology", description: "My first steps into the world of web development", type: "milestone" },
  { year: "2024", title: "Built First Web Projects", place: "NEUST - Peñaranda Off Campus", description: "Completed my first web development projects", type: "milestone" },
  { year: "2025", title: "Learning Advanced Web Development", place: "Learning continuously", description: "Building stronger frontend, backend, and full-stack development skills", type: "training" },
  { year: "2026", title: "Full-Stack Project", place: "Sto Tomas Peñaranda, Nueva Ecija", description: "VeriScan: Employee Management System", type: "achievement" },
  { year: "Now", title: "Open to OJT & Junior Roles", place: "Open to opportunities", description: "Actively seeking OJT or a junior developer opportunity to apply my skills, learn from real teams, and contribute to real projects", type: "milestone" },
];

function TimelineIcon({ type, size = 18 }: { type: "education" | "training" | "milestone" | "achievement" | "location"; size?: number }) {
  const p = { width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true };
  if (type === "education") return <svg {...p}><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-3.5"/><path d="M22 10v6"/></svg>;
  if (type === "training") return <svg {...p}><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/></svg>;
  if (type === "milestone") return <svg {...p}><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/><path d="m14 4-4 16"/></svg>;
  if (type === "achievement") return <svg {...p}><path d="M9.75887,7 L9,7 L9,8 L9,9 L9,9 L9,9 L9,9 L9,9 L9,9 L9,9 L8,8 L8,7 L8,7 L8,7 L8,7 L8,7 L8,7 L8,7 "/><path d="M3,3 C3,-0.333333 -0.333333,-0 -0,-0 C0,-0 -0,-0 -0,-0 C-0,-0 -0,-0 -0,-0 C-0,-0 -0,-0 -0,-0 C-0,-0 -0,-0 -0,-0 C-∞,-∞ -∞,-∞ -∞,-∞"/></svg>;

}

function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trace, setTrace] = useState(0);

  useEffect(() => {
    let frame = 0;
    const updateTrace = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const track = trackRef.current;
        if (!track) return;
        const rect = track.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.52;
        const raw = (viewportCenter - rect.top) / rect.height;
        setTrace(Math.max(0, Math.min(1, raw)));
      });
    };
    updateTrace();
    window.addEventListener("scroll", updateTrace, { passive: true });
    window.addEventListener("resize", updateTrace);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateTrace);
      window.removeEventListener("resize", updateTrace);
    };
  }, []);

  return (
    <section id="journey" className="timeline-section">
      <div className="timeline-stars" aria-hidden="true" />
      <div className="timeline-container">
        <ScrollReveal>
          <div className="timeline-header">
            <p className="section-label">MY JOURNEY</p>
            <h2>Education &amp; Milestones</h2>
            <p className="timeline-subtitle">A quick look at my path from first lines of code to actively pursuing hands-on industry experience.</p>
          </div>
        </ScrollReveal>

        <div ref={trackRef} className="timeline-track">
          <div className="timeline-progress" aria-hidden="true" style={{ height: `${trace * 100}%` }} />
          <div className="timeline-trace-dot" aria-hidden="true" style={{ top: `${trace * 100}%` }} />
          {timelineItems.map((item, index) => {
            const reversed = index % 2 !== 0;
            return (
              <ScrollReveal key={`${item.title}-${index}`} delay={index * 90} className="timeline-reveal" direction={reversed ? "right" : "left"}>
                <article className={`timeline-row type-${item.type} ${reversed ? "row-reverse" : ""}`}>
                  <div className="timeline-marker-col"><span className="timeline-year-big">{item.year}</span></div>
                  <div className="timeline-spine-col"><span className="timeline-node"><span /></span></div>
                  <div className="timeline-card-col">
                    <div className="timeline-content">
                      <div className="timeline-card-top"><span className="timeline-tag">{item.type}</span><span className="timeline-index">0{index + 1}</span></div>
                      <h3>{item.title}</h3>
                      <p className="timeline-place"><TimelineIcon type="location" size={13} />{item.place}</p>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Timeline;
