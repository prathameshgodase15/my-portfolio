import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

const highlights = [
  { icon: "🎓", label: "Master's of Computer Application" },
  { icon: "📍", label: "Pune, India" },
  { icon: "💼", label: "Open to Opportunities" },
  { icon: "⚡", label: "Fast Learner & Builder" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #030712 0%, #060a1a 50%, #030712 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.25)",
              color: "#a78bfa",
            }}
          >
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Decorative 3D Card */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="glass-card p-8 relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow inside card */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(124,58,237,0.3), transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />

                <div className="relative z-10">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center text-3xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                      boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                    }}
                  >
                    PG
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">Prathamesh Godase</h3>
                  <p className="text-violet-400 font-medium mb-4">Full Stack React Developer</p>

                  <div className="space-y-3">
                    {highlights.map((h) => (
                      <div key={h.label} className="flex items-center gap-3 text-gray-400 text-sm">
                        <span className="text-lg">{h.icon}</span>
                        <span>{h.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5 flex gap-3">
                    {["GitHub", "LinkedIn"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          background: "rgba(124,58,237,0.1)",
                          border: "1px solid rgba(124,58,237,0.2)",
                          color: "#a78bfa",
                        }}
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 text-sm font-semibold text-white"
              >
                🚀 Actively Looking For New Opportunities
              </motion.div>

              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-3"
              >
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Crafting Digital Experiences with{" "}
              <span className="gradient-text">Passion</span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a passionate software engineer specializing in building scalable and
              high-performance web applications using{" "}
              <span className="text-violet-400 font-medium">React</span>,{" "}
              <span className="text-cyan-400 font-medium">Node.js</span>, and modern JavaScript
              technologies. I love turning complex problems into elegant, simple solutions.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Currently focused on mastering advanced MERN architecture, performance
              optimization, and system design concepts to prepare for top product-based
              companies. I believe in writing{" "}
              <span className="text-amber-400 font-medium">clean, maintainable</span> code
              that scales.
            </p>

            {/* Experience timeline */}
            <div className="space-y-5">
              {[
                 {
                  year: "2026 - Present",
                  title: "Trainee Software Engineer ",
                  sub: "Sarvify Solutions Pvt. Ltd.",
                  color: "violet",
                },
                {
                  year: "2023 - 2025",
                  title: "Masters of Computer Application",
                  sub: "University of Pune",
                  color: "cyan",
                },
                {
                  year: "2022 - 2023",
                  title: "Trainee Software Engineer ",
                  sub: "Yash Technologies Pvt. Ltd.",
                  color: "violet",
                },
               
                {
                  year: "2021",
                  title: "Started Coding Journey",
                  sub: "Java, Spring Boot, MySQL, HTML, CSS, JavaScript",
                  color: "amber",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={3 + i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex gap-5 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                      style={{
                        background: item.color === "violet" ? "#7c3aed" : item.color === "cyan" ? "#06b6d4" : "#f59e0b",
                        boxShadow: `0 0 10px ${item.color === "violet" ? "rgba(124,58,237,0.6)" : item.color === "cyan" ? "rgba(6,182,212,0.6)" : "rgba(245,158,11,0.6)"}`,
                      }}
                    />
                    {i < 2 && <div className="w-px flex-1 my-1" style={{ background: "rgba(255,255,255,0.06)", minHeight: "30px" }} />}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">{item.year}</div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
