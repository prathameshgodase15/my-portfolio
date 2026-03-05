import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Particle system
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? "124,58,237" : "6,182,212",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

// 3D Floating Orb
const FloatingOrb = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center hero-3d-container mx-auto">
      {/* Main orb */}
      <motion.div
        animate={{ y: [0, -20, 0], rotateY: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(139, 92, 246, 0.9), rgba(6, 182, 212, 0.7), rgba(79, 70, 229, 0.4))",
          boxShadow: "0 0 60px rgba(124, 58, 237, 0.6), 0 0 120px rgba(6, 182, 212, 0.3), inset 0 0 40px rgba(255,255,255,0.05)",
        }}
      >
        {/* Inner shine */}
        <div className="absolute top-4 left-8 w-8 h-4 bg-white/30 rounded-full blur-md rotate-[-20deg]" />
        <div className="absolute top-8 left-10 w-4 h-2 bg-white/20 rounded-full blur-sm rotate-[-20deg]" />
        {/* Center initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/80 font-bold text-3xl md:text-4xl tracking-widest" style={{ textShadow: "0 0 30px rgba(255,255,255,0.8)" }}>
            PG
          </span>
        </div>
      </motion.div>

      {/* Ring 1 */}
      <motion.div
        animate={{ rotateX: 70, rotateY: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-violet-500/30"
        style={{ borderStyle: "dashed", transformStyle: "preserve-3d" }}
      />

      {/* Ring 2 */}
      <motion.div
        animate={{ rotateX: 20, rotateZ: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-cyan-500/25"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Orbiting dot 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-400 shadow-lg shadow-violet-400/60" />
      </motion.div>

      {/* Orbiting dot 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-3/4 h-3/4"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
      </motion.div>

      {/* Floating tech pills */}
      {["React", "Node.js", "Angular", "Java", "Postgresql", "MongoDB"].map((tech, i) => (
        <motion.div
          key={tech}
          animate={{
            y: [0, -10, 0],
            x: [0, i % 2 === 0 ? 5 : -5, 0],
          }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className="absolute"
          style={{
            top: `${10 + i * 30}%`,
            right: i % 2 === 0 ? "-10%" : "auto",
            left: i % 2 !== 0 ? "-10%" : "auto",
          }}
        >
          <div className="glass-card px-3 py-1.5 text-xs font-semibold text-white/80 whitespace-nowrap">
            {tech}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const typewriterWords = [
  "Mern Stack Developer",
  "Full Stack Engineer",
  "Tech Enthusiast",
  "Problem Solver",
];

const TypeWriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = typewriterWords[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        if (charIndex === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % typewriterWords.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? 50 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="gradient-text font-bold">
      {text}
      <span className="animate-pulse text-violet-400">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#030712" }}
    >
      <ParticleCanvas />

      {/* Background glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#a78bfa",
              }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3"
            >
              Hi, I'm{" "}
              <span
                className="gradient-text"
                style={{ WebkitTextStroke: "0px transparent" }}
              >
                Prathamesh
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-400 font-light mb-6 h-10"
            >
              <TypeWriter />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Passionate about building{" "}
              <span className="text-violet-400 font-medium">scalable</span>,{" "}
              <span className="text-cyan-400 font-medium">high-performance</span> web applications
              with modern technologies. Focused on creating experiences that{" "}
              <span className="text-amber-400 font-medium">wow</span> users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl font-semibold text-white relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.3)",
                }}
              >
                <span className="relative z-10">View Projects ✦</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, borderColor: "rgba(124,58,237,0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl font-semibold text-white/80 transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Get In Touch →
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "10+", label: "Projects Built" },
                { value: "5+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <FloatingOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-9 border border-gray-700 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2.5 bg-violet-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;