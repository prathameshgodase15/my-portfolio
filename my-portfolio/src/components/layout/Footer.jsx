import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative py-12 overflow-hidden"
            style={{
                background: "#030712",
                borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                        >
                            PG
                        </div>
                        {/* <span className="text-white font-semibold">
                            Prathamesh Godase <span className="text-violet-400">.</span>
                        </span> */}
                    </div>

                    {/* Nav links */}
                    {/* <div className="flex gap-6 text-sm text-gray-500">
                        {["home", "about", "skills", "projects", "contact"].map((s) => (
                            <a
                                key={s}
                                href={`#${s}`}
                                className="capitalize hover:text-violet-400 transition-colors"
                            >
                                {s}
                            </a>
                        ))}
                    </div> */}

                    {/* Copyright */}
                    <p className="text-gray-600 text-sm text-center">
                        © {currentYear} Prathamesh Godase. Built with{" "}
                        <span className="text-violet-400">React</span> &{" "}
                        <span className="text-cyan-400">❤️</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
