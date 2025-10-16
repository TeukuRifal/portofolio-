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

export default function HomePage() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState('all');

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

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 selection:bg-blue-100 selection:text-blue-700">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-32 md:gap-40 overflow-hidden"
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

      {/* Soft Gradient Accent Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[15%] left-[60%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[160px]" />
        <div className="absolute bottom-[5%] right-[30%] w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[180px]" />
      </div>
    </div>
  );
}
