'use client';

import { motion } from 'framer-motion';
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperiencesSection,
  AboutSection,
} from './sections';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🎬 Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  // 📄 Download CV
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/dokumen/CV_T.Rifal Aulia.pdf';
    link.download = 'Teuku-Rifal-Aulia-CV.pdf';
    link.click();
  };

  // ✅ Deterministic floating shapes data
  const floatingShapes = [
    { id: 1, size: 120, x: 10, y: 20, color: 'blue', delay: 0, duration: 8 },
    { id: 2, size: 80, x: 85, y: 15, color: 'indigo', delay: 2, duration: 10 },
    { id: 3, size: 100, x: 15, y: 70, color: 'cyan', delay: 4, duration: 12 },
    { id: 4, size: 60, x: 90, y: 65, color: 'blue', delay: 1, duration: 9 },
    { id: 5, size: 140, x: 70, y: 80, color: 'indigo', delay: 3, duration: 11 },
  ];

  const gridDots = Array.from({ length: 64 }, (_, i) => ({
    id: i,
    x: (i % 8) * 12.5,
    y: Math.floor(i / 8) * 12.5,
  }));

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/30 text-gray-900 selection:bg-blue-200 selection:text-blue-900 overflow-hidden">
      {/* Professional Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main Gradient Orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-200/15 to-purple-200/15 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        {mounted && floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute rounded-2xl opacity-10 backdrop-blur-sm border ${shape.color === 'blue'
                ? 'bg-blue-400/20 border-blue-300/20'
                : shape.color === 'indigo'
                  ? 'bg-indigo-400/20 border-indigo-300/20'
                  : 'bg-cyan-400/20 border-cyan-300/20'
              }`}
            style={{
              width: shape.size,
              height: shape.size,
              top: `${shape.y}%`,
              left: `${shape.x}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle Grid Dots Animation */}
        {mounted && gridDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-1 h-1 bg-blue-300/20 rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              delay: (dot.id * 0.1) % 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {mounted && (
            <>
              <motion.path
                d="M10 20 Q 200 50, 400 100"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.path
                d="M800 50 Q 600 150, 400 300"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              />
            </>
          )
          }
        </svg>

        {/* Binary Rain Effect (Subtle) */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {mounted && Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/30 font-mono text-sm"
              style={{
                left: `${(i * 5) % 100}%`,
              }}
              initial={{ y: -100 }}
              animate={{ y: '100vh' }}
              transition={{
                duration: 15 + (i % 10),
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            >
              {i % 2 === 0 ? '1' : '0'}
            </motion.div>
          ))}
        </div>

        {/* Pulse Rings */}
        {mounted && (
          <>
            <motion.div
              className="absolute top-1/3 left-1/3 w-4 h-4 border-2 border-blue-300/30 rounded-full"
              animate={{
                scale: [1, 30, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-4 h-4 border-2 border-cyan-300/30 rounded-full"
              animate={{
                scale: [1, 25, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeOut",
                delay: 2,
              }}
            />
          </>
        )}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-32 md:gap-40 relative z-10"
      >
        <motion.div variants={itemVariants}>
          <HeroSection downloadCV={downloadCV} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SkillsSection />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProjectsSection />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ExperiencesSection />
        </motion.div>

        <motion.div variants={itemVariants}>
          <AboutSection downloadCV={downloadCV} />
        </motion.div>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}