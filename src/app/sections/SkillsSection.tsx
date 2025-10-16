'use client';
import { motion } from 'framer-motion';
import { SKILLS } from '@/app/utils/constants';
import SkillCard from '@/components/SkillCard';
import Section from '@/components/Section';
import { easeOut, easeInOut } from 'framer-motion'; // ✅ tambahkan ini

export default function SkillsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 30,
            opacity: 0,
            scale: 0.9
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: easeOut // ✅ pakai fungsi easing, bukan string
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeOut
            }
        }
    };

    return (
        <Section id="skills" className="relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: easeInOut
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-100/30 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: easeInOut
                    }}
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Section Content */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: easeOut }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {SKILLS.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.05,
                                transition: { duration: 0.2, ease: easeOut }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="flex justify-center"
                        >
                            <SkillCard
                                {...skill}
                                className="hover:shadow-lg hover:border-blue-200/50 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    );
}
