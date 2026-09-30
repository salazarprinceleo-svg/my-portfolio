import { useRef, useState } from "react";
import "./Certificates.css";
import ScrollReveal from "./ScrollReveal";

// Certificate images
import dataCert from "../assets/data.png";
import javascriptCert from "../assets/javascript.png";
import pythonCert from "../assets/python.png";
import modernCert from "../assets/modernai.png";
import excelCert from "../assets/excel.png";

interface Certificate {
  title: string;
  issuer: string;
  description: string;
  image: string;
  credentialUrl: string;
  tags: string[];
}

const certificates: Certificate[] = [
  {
    title: "3rd Power of Data",
    issuer: "NEUST",
    description:
      "Certificate demonstrating skills in understanding data concepts.",
    image: dataCert,
    credentialUrl: "https://example.com",
    tags: ["Data"],
  },
  {
    title: "Javascript Essentials 1",
    issuer: "Cisco Networking Academy",
    description:
      "Certificate demonstrating knowledge of JavaScript fundamentals.",
    image: javascriptCert,
    credentialUrl: "https://example.com",
    tags: ["Javascript"],
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    description: "Certificate demonstrating knowledge of Python fundamentals.",
    image: pythonCert,
    credentialUrl: "https://example.com",
    tags: ["Python"],
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    description: "Certificate demonstrating knowledge of modern AI concepts and applications.",
    image: modernCert,
    credentialUrl: "https://example.com",
    tags: ["ModernAI"],
  },
  {
    title: "Excel for the Future",
    issuer: "NEUST-POC",
    description: "Certificate demonstrating skills in using Excel for data analysis and visualization.",
    image: excelCert,
    credentialUrl: "https://example.com",
    tags: ["Excel"],
  }
];

/* Coverflow layout per distance from the active card (0 = centre). */
const X = [0, 72, 104, 126]; // translateX, % of card width
const SCALE = [1, 0.86, 0.72, 0.6];
const ROTATE = [0, 20, 26, 30]; // deg, cards angle toward the centre
const OPACITY = [1, 0.95, 0.6, 0.28];
const MAX_VISIBLE = 1;

/* Shortest signed distance on a loop, so the carousel wraps infinitely. */
function getOffset(index: number, active: number, total: number) {
  let d = index - active;
  const half = total / 2;
  if (d > half) d -= total;
  else if (d <= -half) d += total;
  return d;
}

function cardStyle(offset: number): React.CSSProperties {
  const dist = Math.abs(offset);
  if (dist > MAX_VISIBLE) {
    return { opacity: 0, pointerEvents: "none", zIndex: 0, transform: `translateX(${Math.sign(offset) * 140}%) scale(.5)` };
  }
  const dir = Math.sign(offset);
  return {
    zIndex: 10 - dist,
    opacity: OPACITY[dist],
    transform: `translateX(${dir * X[dist]}%) rotateY(${-dir * ROTATE[dist]}deg) scale(${SCALE[dist]})`,
  };
}

function Certificates() {
  const total = certificates.length;
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const dragged = useRef(false);

  const go = (step: number) => setActive((a) => (a + step + total) % total);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    dragged.current = false;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const delta = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(delta) > 50) {
      dragged.current = true;
      go(delta < 0 ? 1 : -1);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-container">
        <ScrollReveal>
          <div className="certificate-heading-row">
            <div>
              <p className="certificates-label">CREDENTIAL ARCHIVE</p>
              <h2 className="certificates-title">Learning in progress.</h2>
            </div>
            <div className="credential-stamp" aria-label="Verified learning">
              <span>LEARNING</span>
              <strong>∞</strong>
              <span>IN MOTION</span>
            </div>
          </div>
          <p className="certificates-intro">
            A record of the skills I’ve developed as I prepare for OJT and future junior developer opportunities. Each credential represents another step in my learning journey.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div
            className="certificate-stage"
            role="region"
            aria-roledescription="carousel"
            aria-label="Certificates"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={() => (startX.current = null)}
          >
            {certificates.map((certificate, index) => {
              const offset = getOffset(index, active, total);
              const isActive = offset === 0;
              return (
                <div
                  key={certificate.title}
                  className={`certificate-card${isActive ? " is-active" : ""}`}
                  style={cardStyle(offset)}
                  aria-hidden={!isActive}
                  onClick={() => {
                    if (dragged.current) return;
                    if (!isActive) setActive(index);
                  }}
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {total > 1 && (
            <div className="certificate-dots" role="tablist" aria-label="Choose certificate">
              {certificates.map((certificate, index) => (
                <button
                  key={certificate.title}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Show ${certificate.title}`}
                  className={index === active ? "is-active" : ""}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Certificates;