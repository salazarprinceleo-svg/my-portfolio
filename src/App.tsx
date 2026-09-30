import Navbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Timeline from "./sections/Timeline";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Certificates from "./sections/Certificates";
import BackToTop from "./components/BackToTop";
import "./theme-overrides.css";

function App() {
  return (
    <>
      <Spotlight />
      <Navbar />
      <BackToTop />

      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}

export default App;