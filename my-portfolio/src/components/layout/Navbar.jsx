import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(section); },
        { threshold: 0.4 }
      );
      if (element) observer.observe(element);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 shadow-xl shadow-black/30"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <span className="text-white font-bold text-sm">PG</span>
            </div>
            <span className="font-bold text-white text-lg hidden sm:block">
              Prathamesh<span className="text-violet-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-xl group"
              >
                {active === item.id && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${active === item.id ? "text-white" : "text-gray-400 group-hover:text-white"
                    }`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 transition-shadow duration-300"
            >
              Hire Me
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white origin-center transition-all"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-4 right-4 z-40 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-violet-500/10 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 ${active === item.id
                    ? "bg-gradient-to-r from-violet-600/20 to-cyan-500/20 text-white border border-violet-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl text-sm font-semibold text-white text-center"
            >
              Hire Me 🚀
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;