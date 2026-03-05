import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
    { name: "React", level: 90, icon: "⚛️", color: "#61dafb" },
    { name: "JavaScript", level: 88, icon: "🟨", color: "#f7df1e" },
    { name: "TypeScript", level: 78, icon: "🔷", color: "#3178c6" },
    { name: "Node.js", level: 82, icon: "🟢", color: "#68a063" },
    { name: "Java", level: 75, icon: "☕", color: "#f89820" },
    { name: "Angular", level: 70, icon: "🔴", color: "#dd0031" },
    { name: "MongoDB", level: 80, icon: "🍃", color: "#4db33d" },
    { name: "PostgreSQL", level: 74, icon: "🐘", color: "#336791" },
];

const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Java", icon: "☕" },
    { name: "Angular", icon: "🔴" },
    { name: "Git", icon: "🔧" },
    { name: "Docker", icon: "🐳" },
    { name: "REST APIs", icon: "🌐" },
];

const SkillBar = ({ skill, isInView }) => {
    return (
        <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
                <span className="text-gray-400 text-sm font-semibold">{skill.level}%</span>
            </div>
            <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)" }}
            >
                <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    style={{ background: `linear-gradient(90deg, #7c3aed, ${skill.color})` }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                            animation: "shimmerBar 2s ease-in-out infinite",
                            backgroundSize: "200% 100%",
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="skills"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ background: "#060a1a" }}
        >
            {/* Background glows */}
            <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)",
                    filter: "blur(60px)",
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
                            background: "rgba(6,182,212,0.1)",
                            border: "1px solid rgba(6,182,212,0.25)",
                            color: "#67e8f9",
                        }}
                    >
                        My Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div
                        className="w-20 h-1 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
                    />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Skill bars */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-violet-500" /> Proficiency Levels
                        </h3>
                        {skills.map((skill) => (
                            <SkillBar key={skill.name} skill={skill} isInView={isInView} />
                        ))}
                    </motion.div>

                    {/* Radar-style visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="glass-card p-8 flex flex-col justify-between"
                    >
                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-500" /> Experience Overview
                        </h3>

                        {/* Concentric circle visual */}
                        <div className="relative flex items-center justify-center h-64 mb-8">
                            {[100, 80, 60, 40, 20].map((size, i) => (
                                <div
                                    key={size}
                                    className="absolute rounded-full border"
                                    style={{
                                        width: `${size}%`,
                                        height: `${size}%`,
                                        borderColor: `rgba(124,58,237,${0.05 + i * 0.05})`,
                                        background: i === 0 ? "rgba(124,58,237,0.02)" : "transparent",
                                    }}
                                />
                            ))}
                            {/* Central elements */}
                            {skills.slice(0, 6).map((skill, i) => {
                                const angle = (i / 6) * 360;
                                const rad = (angle * Math.PI) / 180;
                                const r = 38;
                                const x = 50 + r * Math.cos(rad);
                                const y = 50 + r * Math.sin(rad);
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                                        className="absolute flex flex-col items-center gap-1"
                                        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                                            style={{
                                                background: "rgba(255,255,255,0.05)",
                                                border: `1px solid ${skill.color}40`,
                                                boxShadow: `0 0 15px ${skill.color}33`,
                                            }}
                                        >
                                            {skill.icon}
                                        </div>
                                        <span className="text-gray-400 text-xs">{skill.name}</span>
                                    </motion.div>
                                );
                            })}
                            {/* Center badge */}
                            <div
                                className="absolute w-16 h-16 rounded-2xl flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                                    boxShadow: "0 0 30px rgba(124,58,237,0.5)",
                                }}
                            >
                                <span className="text-white font-bold text-xs text-center leading-tight">FULL STACK</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: "Frontend", value: "90%", color: "#7c3aed" },
                                { label: "Backend", value: "82%", color: "#06b6d4" },
                                { label: "Database", value: "78%", color: "#f59e0b" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="text-center p-3 rounded-xl"
                                    style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}
                                >
                                    <div className="font-bold text-xl mb-1" style={{ color: item.color }}>
                                        {item.value}
                                    </div>
                                    <div className="text-gray-400 text-xs">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Tech badges marquee */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <h3 className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">
                        Technologies I Work With
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                                className="tech-badge flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 cursor-default"
                            >
                                <span>{tech.icon}</span>
                                {tech.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
