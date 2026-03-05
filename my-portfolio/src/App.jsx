import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

// Custom cursor component
const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let followerX = -100;
    let followerY = -100;
    let animId;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(
        el?.tagName === "A" || el?.tagName === "BUTTON" || el?.closest("a") || el?.closest("button")
      );
    };

    const animate = () => {
      followerX += (pos.x - followerX) * 0.12;
      followerY += (pos.y - followerY) * 0.12;
      setFollower({ x: followerX, y: followerY });
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y]);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? "20px" : "12px",
          height: hovering ? "20px" : "12px",
          background: hovering ? "#06b6d4" : "#7c3aed",
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: follower.x,
          top: follower.y,
          width: hovering ? "48px" : "38px",
          height: hovering ? "48px" : "38px",
          borderColor: hovering ? "rgba(6,182,212,0.5)" : "rgba(124,58,237,0.5)",
          opacity: hovering ? 0.8 : 0.6,
        }}
      />
    </>
  );
};

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="skills" className="min-h-screen">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;