import { useEffect, useState } from "react";
import "./Projects.css";
import ScrollReveal from "./ScrollReveal";

// Project images
import veriscan1 from "../assets/veriscan_1.png";
import veriscan2 from "../assets/veriscan_2.png";

import documind1 from "../assets/documind_1.png";
import documind2 from "../assets/documind_2.png";

import campusflow1 from "../assets/campusflow_1.png";
import campusflow2 from "../assets/campusflow_2.png";

import edusync1 from "../assets/sms_1.png";
import edusync2 from "../assets/sms_2.png";

import lumicart1 from "../assets/lumicart_1.png";
import lumicart2 from "../assets/lumicart_2.png";

interface Project {
  title: string;
  subtitle?: string;
  department: string;
  date: string;
  description: string;
  caseStudy?: string;
  image: string;
  detailImage?: string;
  siteUrl?: string;
  certificateUrl?: string;
  techStack: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "VeriScan: Employee Management System",
    department: "Capstone Project",
    date: "2026",
    description:
      "Balong's Kitchenette EMS is a web-based Employee Management System built with Laravel. It keeps employee records, attendance, schedules, leave requests, and payroll in one central system, so the business no longer needs paper records or separate spreadsheets. Admins and employees have their own access, so each person only sees the pages and tools that fit their role.",
    caseStudy:
      "This project helps a small business run its daily HR work without paper records or spreadsheets. Admins can add employees, set schedules, track attendance through a QR code kiosk, approve leave requests, and generate payroll and reports. Employees log in to their own portal to see their attendance, schedule, payslips, and profile, and to file leave requests.",
    image: veriscan1,
    detailImage: veriscan2,
    siteUrl: "#",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "MariaDB",
    ],
    highlights: [
      "Two roles: Admin and Employee",
      "Employee management",
      "QR attendance kiosk",
      "Schedules and leave",
      "Payroll and payslips",
      "Reports and audit trail",
    ],
  },

  {
    title: "DocuMind",
    department: "AI-Powered Document Assistant",
    date: "2025",
    description:
      "DocuMind AI is an AI-powered document management and knowledge assistant designed to help users efficiently organize, search, and interact with their digital documents. It combines document processing, semantic search, embeddings, and artificial intelligence to understand the content of uploaded files and provide relevant answers to user questions.",
    caseStudy:
      "DocuMind AI is a full-stack application built with React, TypeScript, Python, and FastAPI. Users can upload documents, manage their files, search their content, and ask questions through an AI chat. The system uses Ollama, Gemma 3 1B, and nomic-embed-text to process documents, find relevant information, and generate answers locally. It also uses RAG (Retrieval-Augmented Generation) to help the AI give answers based on the user's documents.",
    image: documind1,
    detailImage: documind2,
    siteUrl: "https://documind-ai-eosin-ten.vercel.app/",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Python",
      "Ollama",
      "Gemma 3 1B",
      "Docker",
    ],
    highlights: [
      "Document Management",
      "AI Chat Assistant",
      "Smart Document Search",
      "RAG Technology",
      "Local AI",
    ],
  },

  {
    title: "CampusFlow",
    department: "Student Companion Mobile App",
    date: "2025",
    description:
      "CampusFlow is a student companion mobile application designed to help students manage their academic activities in one place. It provides useful tools for checking schedules, managing tasks, viewing grades, reading announcements, receiving notifications, and managing personal settings.",
    caseStudy:
      "CampusFlow is an Ionic and Angular-based student productivity app that helps students stay organized with their school responsibilities. It combines important academic information into a simple and user-friendly interface, allowing students to easily track their classes, assignments, grades, and announcements while managing their personal account and app settings.",
    image: campusflow1,
    detailImage: campusflow2,
    siteUrl: "https://campus-flow-azure.vercel.app/",
    techStack: [
      "Ionic",
      "Angular",
      "TypeScript",
      "HTML5",
      "SCSS",
    ],
    highlights: [
      "Academic Dashboard",
      "Schedule Management",
      "Task Management",
      "Grades & Announcements",
      "Notifications & Settings",
    ],
  },

  {
    title: "EduSync",
    department: "Student Management System",
    date: "2024",
    description:
      "The Student Management System is a desktop application designed to help schools manage student records, courses, and user accounts in one system. It allows authorized users to add, edit, search, view, and delete student information while storing the data in a MySQL database.",
    caseStudy:
      "This project is a Java-based Student Management System with a graphical user interface made using JavaFX and FXML. It includes login and account management, student record management, course management, audit logs, dashboard statistics, and CSV export. The system also uses different user roles, such as Admin and Staff, to control access to certain features.",
    image: edusync1,
    detailImage: edusync2,
    siteUrl: "#",
    techStack: [
      "Java",
      "JavaFX",
      "FXML",
      "MySQL",
      "Maven",
    ],
    highlights: [
      "Student Record Management",
      "User Login and Role Management",
      "Course Management",
      "Dashboard and Reports",
    ],
  },

  {
    title: "LumiCart",
    department: "Philippine E-Commerce Website",
    date: "2023",
    description:
      "LumiCart is a Philippine e-commerce website designed for online shopping. It allows users to browse products, view product details, add items to a cart, and proceed to checkout. The website focuses on everyday products such as electronics, fashion, accessories, and lifestyle items.",
    caseStudy:
      "The project is made to provide a simple and user-friendly online shopping experience for Filipino customers. It includes Philippine-based features such as prices in Philippine Peso, local delivery information, Metro Manila shipping rates, and payment options like GCash, Maya, cards, and Cash on Delivery. The website also uses a dark theme with a clean and modern design.",
    image: lumicart1,
    detailImage: lumicart2,
    siteUrl: "#",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    highlights: [
      "Philippine E-Commerce Design",
      "Product Catalog",
      "Checkout System",
    ],
  },
];

function Projects() {
  const [activeProject, setActiveProject] =
    useState<Project | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    document.body.style.overflow = activeProject
      ? "hidden"
      : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const activeIndex = activeProject
    ? projects.indexOf(activeProject)
    : -1;

  return (
    <section id="projects" className="projects-page">
      <div className="projects-container">

        <ScrollReveal>
          <div className="projects-header">
            <p className="section-label">
              SELECTED WORK
            </p>

            <h1>Projects</h1>

            <p className="projects-intro">
              A selection of projects that demonstrate how I approach real development work from interfaces and mobile apps to full-stack systems and practical software solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 120}
            >
              <article
                className={`project-row ${
                  index % 2 === 1 ? "reverse" : ""
                }`}
              >

                <div className="project-content">

                  <div className="project-top">

                    <div className="project-title-group">

                      <h2>{project.title}</h2>

                      {project.subtitle && (
                        <h3>{project.subtitle}</h3>
                      )}

                    </div>

                    <span className="project-date">
                      {project.date}
                    </span>

                  </div>

                  <div className="project-line" />

                  <p className="project-department">
                    {project.department}
                  </p>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech-tags">
                    {project.techStack.map((tech) => (
                      <span
                        className="project-tech-tag"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">

                    {project.siteUrl && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="case-study-link"
                      >
                        <span>View Site</span>

                        <span
                          className="certificate-arrow"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </a>
                    )}

                    {project.certificateUrl && (
                      <a
                        href={project.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="certificate-link"
                      >
                        <span>
                          View Certificate
                        </span>

                        <span
                          className="certificate-arrow"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </a>
                    )}

                  </div>

                </div>

                <div
                  className="project-image"
                  onClick={() =>
                    setActiveProject(project)
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setActiveProject(project);
                    }
                  }}
                >

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-image-overlay">
                    <span>View Details</span>
                  </div>

                </div>

              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveProject(null)}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="project-modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close case study"
            >
              ×
            </button>

            <div className="project-preview-chrome">

              <span className="preview-dots">
                <i />
                <i />
                <i />
              </span>

              <span className="preview-label">
                CASE STUDY PREVIEW
              </span>

              <span className="preview-number">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

            </div>

            <div className="project-modal-image">

              <img
                src={
                  activeProject.detailImage ??
                  activeProject.image
                }
                alt={activeProject.title}
              />

            </div>

            <div className="project-modal-body">

              <span className="project-date">
                {activeProject.date}
              </span>

              <h2>{activeProject.title}</h2>

              {activeProject.subtitle && (
                <h3>{activeProject.subtitle}</h3>
              )}

              <p className="project-department">
                {activeProject.department}
              </p>

              <p className="project-modal-description">
                {activeProject.caseStudy ??
                  activeProject.description}
              </p>

              <h4 className="project-modal-subhead">
                Key Highlights
              </h4>

              <ul className="project-modal-highlights">
                {activeProject.highlights.map(
                  (highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  )
                )}
              </ul>

              <div className="project-tech-tags">

                {activeProject.techStack.map(
                  (tech) => (
                    <span
                      className="project-tech-tag"
                      key={tech}
                    >
                      {tech}
                    </span>
                  )
                )}

              </div>

              {activeProject.siteUrl && (
                <a
                  href={activeProject.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link modal-certificate-link"
                >
                  <span>View Site</span>

                  <span
                    className="certificate-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              )}

              {activeProject.certificateUrl && (
                <a
                  href={activeProject.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link modal-certificate-link"
                >
                  <span>View Certificate</span>

                  <span
                    className="certificate-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              )}

            </div>

          </div>

        </div>
      )}
    </section>
  );
}

export default Projects;