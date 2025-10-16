'use client';

import { motion, easeInOut, Variants } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import { useState, useEffect } from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

type HeroSectionProps = {
    downloadCV: () => void;
};

// ✅ Generate consistent particles based on seed
const generateParticles = (count: number = 15) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: ((i * 7) % 6) + 2, // Deterministic size based on index
        x: (i * 13) % 100, // Deterministic position
        y: (i * 17) % 100,
        delay: (i * 3) % 8,
        duration: 8 + ((i * 5) % 8),
    }));
};

export default function HeroSection({ downloadCV }: HeroSectionProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3, duration: 0.8 },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: easeInOut },
        },
    };

    const floatingVariants: Variants = {
        float: {
            y: [0, -20, 0],
            transition: { duration: 6, repeat: Infinity, ease: easeInOut },
        },
    };

    const imageGlowVariants: Variants = {
        animate: {
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.02, 1],
            transition: { duration: 8, repeat: Infinity, ease: easeInOut },
        },
    };

    const scrollIndicatorVariants: Variants = {
        animate: {
            y: [0, 10, 0],
            transition: { duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] },
        },
    };

    const scrollDotVariants: Variants = {
        animate: {
            y: [0, 12, 0],
            transition: { duration: 2, repeat: Infinity, ease: easeInOut },
        },
    };

    // ✅ FIXED: Use deterministic particles that are the same on server and client
    const [particles, setParticles] = useState<
        { id: number; size: number; x: number; y: number; delay: number; duration: number }[]
    >([]);

    useEffect(() => {
        // This will only run on client, but we need consistent initial state
        setParticles(generateParticles(15));
    }, []);

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/rifall', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/teukurifal03/', label: 'LinkedIn' },
        { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    ];

    return (
        <section
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-20"
            id="hero"
        >
            {/* Background Animations */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: easeInOut }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.6, 0.4],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: easeInOut }}
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
              linear-gradient(#00000010 1px, transparent 1px),
              linear-gradient(90deg, #00000010 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Floating Particles */}
                {particles.map((p) => (
                    <motion.span
                        key={p.id}
                        className="absolute bg-blue-300/30 rounded-full"
                        style={{
                            width: p.size,
                            height: p.size,
                            top: `${p.y}%`,
                            left: `${p.x}%`,
                            filter: 'blur(0.5px)',
                        }}
                        animate={{
                            y: [0, -60, 0],
                            x: [0, ((p.id * 5) % 20) - 10, 0], // Deterministic movement
                            opacity: [0, 0.8, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: easeInOut,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                className="relative max-w-7xl mx-auto px-6 xl:px-4 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Text Section */}
                <motion.div className="lg:w-1/2 space-y-8 text-center lg:text-left" variants={containerVariants}>
                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                        Hi, I&apos;m{' '}
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                            animate={{ backgroundPosition: ['0%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                            style={{ backgroundSize: '200% 100%' }}
                        >
                            Teuku Rifal Aulia
                        </motion.span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                        A passionate <span className="font-semibold text-gray-800 bg-yellow-100/50 px-1 rounded">Full Stack Developer</span>{' '}
                        dedicated to crafting exceptional digital experiences using modern technologies.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={itemVariants}>
                        <Button variant="primary" size="lg" href="#projects">
                            View My Work
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            href="mailto:your.trifalaulia@gmail.com"
                            className="border-gray-300 hover:border-gray-400"
                        >
                            <FiMail className="mr-2" />
                            Contact Me
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div className="flex items-center justify-center lg:justify-start gap-6 pt-6" variants={itemVariants}>
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
                                aria-label={social.label}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon size={22} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Image Section */}
                <motion.div className="relative lg:w-1/2 flex justify-center lg:justify-end" variants={floatingVariants} animate="float">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur-xl opacity-50"
                            variants={imageGlowVariants}
                            animate="animate"
                        />
                        <motion.div
                            className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Image
                                src="/rifal.jpeg"
                                alt="Teuku Rifal Aulia - Full Stack Developer"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 288px, 384px"
                            />
                            <motion.button
                                onClick={downloadCV}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute bottom-4 right-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 backdrop-blur-sm transition-all duration-300 group"
                                aria-label="Download CV"
                                title="Download CV"
                            >
                                <FiDownload className="text-blue-600 group-hover:text-indigo-600 transition-colors" size={20} />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="absolute -top-2 -left-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-gray-100"
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                        >
                            {/* <span className="text-sm font-semibold text-gray-700">🚀 3+ Years Experience</span> */}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" variants={scrollIndicatorVariants} animate="animate">
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                    <motion.div className="w-1 h-3 bg-blue-500 rounded-full mt-2" variants={scrollDotVariants} animate="animate" />
                </div>
            </motion.div>
        </section>
    );
}