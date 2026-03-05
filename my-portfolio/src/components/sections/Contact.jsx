import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "prathameshgodase15@gmail.com",
    href: "mailto:prathameshgodase15@gmail.com",
    color: "#7c3aed",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#",
    color: "#06b6d4",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/prathamesh-godase-169b10244",
    href: "https://linkedin.com/in/prathamesh-godase-169b10244",
    color: "#0a66c2",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/prathameshgodase15",
    href: "https://github.com/prathameshgodase15",
    color: "#f0f0f0",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06091a 0%, #030712 100%)" }}
    >
      {/* Background glows */}
      <div
        className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)",
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
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.25)",
              color: "#a78bfa",
            }}
          >
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            I'm currently open to full-time opportunities. Whether you have a
            project idea or just want to say hi, my inbox is always open!
          </p>
          <div
            className="w-20 h-1 mx-auto rounded-full mt-6"
            style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to bring your ideas to life? 🚀
            </h3>
            <p className="text-gray-400 leading-relaxed mb-10">
              Whether you need a stunning frontend, a robust backend API, or a complete full-stack
              application — I'm here to help make it happen.
            </p>

            {/* Contact card items */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-2xl group transition-all"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">{item.label}</div>
                    <div className="text-white text-sm font-medium group-hover:text-violet-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                  <div className="ml-auto text-gray-600 group-hover:text-violet-400 transition-colors">→</div>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">
                Available for new projects starting March 2025
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 mb-6">
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="px-6 py-3 rounded-xl text-sm font-semibold"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", color: "white" }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs mb-2 ml-1">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl text-sm input-glow"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-2 ml-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl text-sm input-glow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-2 ml-1">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    className="w-full px-4 py-3.5 rounded-xl text-sm input-glow"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-2 ml-1">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3.5 rounded-xl text-sm input-glow resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold text-white relative overflow-hidden"
                  style={{
                    background: loading ? "rgba(124,58,237,0.5)" : "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    boxShadow: "0 0 20px rgba(124,58,237,0.3)",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message ✦"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;