import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Inventory Management System",
    description:
      "A scalable inventory system with authentication, product tracking, role-based access control, and real-time analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    icon: "📦",
    gradient: "from-violet-600/20 to-purple-900/20",
    border: "rgba(124,58,237,0.3)",
    glow: "rgba(124,58,237,0.15)",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce platform with cart system, Stripe payment integration, admin dashboard, and order tracking.",
    tech: ["React", "Express", "Stripe", "PostgreSQL"],
    icon: "🛒",
    gradient: "from-cyan-600/20 to-blue-900/20",
    border: "rgba(6,182,212,0.3)",
    glow: "rgba(6,182,212,0.15)",
    liveUrl: "#",
    githubUrl: "#",
    category: "E-Commerce",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Feature-rich real-time messaging application with socket.io, typing indicators, online status, and media sharing.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    icon: "💬",
    gradient: "from-amber-600/20 to-orange-900/20",
    border: "rgba(245,158,11,0.3)",
    glow: "rgba(245,158,11,0.15)",
    liveUrl: "#",
    githubUrl: "#",
    category: "Real-Time",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Kanban-style project management tool with drag-and-drop, team collaboration, deadlines, and progress tracking.",
    tech: ["React", "TypeScript", "PostgreSQL", "DnD"],
    icon: "📋",
    gradient: "from-green-600/20 to-emerald-900/20",
    border: "rgba(16,185,129,0.3)",
    glow: "rgba(16,185,129,0.15)",
    liveUrl: "#",
    githubUrl: "#",
    category: "Productivity",
  },
];

const ProjectCard = ({ project, i, isInView }) => {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouse({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      className="project-card-wrapper relative cursor-pointer group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{
          rotateX: hovered ? -mouse.y * 8 : 0,
          rotateY: hovered ? mouse.x * 8 : 0,
          translateZ: hovered ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`relative overflow-hidden rounded-2xl h-full`}
        style={{
          background: `linear-gradient(135deg, ${project.gradient.replace("from-", "").replace("to-", "")})`,
          border: `1px solid ${hovered ? project.border : "rgba(255,255,255,0.06)"}`,
          boxShadow: hovered ? `0 20px 60px ${project.glow}, 0 0 0 1px ${project.border}` : "none",
          transformStyle: "preserve-3d",
          transition: "border 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Glass layer */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(10px)" }}
        />

        {/* Glow on hover */}
        {hovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${50 + mouse.x * 30}% ${50 + mouse.y * 30}%, ${project.glow} 0%, transparent 70%)`,
            }}
          />
        )}

        <div className="relative z-10 p-7">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: `${project.border.replace("0.3", "0.15")}` }}
            >
              {project.icon}
            </div>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: project.border.replace("0.3", "0.1"),
                border: `1px solid ${project.border}`,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {project.category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white text-center transition-all"
              style={{ background: `linear-gradient(135deg, #7c3aed, #06b6d4)` }}
            >
              Live Demo ↗
            </motion.a>
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-2.5 rounded-xl text-sm font-medium text-gray-300 text-center"
              style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}
            >
              GitHub ⌥
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #030712 0%, #06091a 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.25)",
              color: "#fcd34d",
            }}
          >
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            A selection of real-world projects built with modern technologies.
            Each one crafted with attention to detail and performance.
          </p>
          <div
            className="w-20 h-1 mx-auto rounded-full mt-6"
            style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
          />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} isInView={isInView} />
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-14"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white"
            style={{
              border: "1px solid rgba(124,58,237,0.4)",
              background: "rgba(124,58,237,0.08)",
            }}
          >
            View All on GitHub
            <span className="text-lg">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;