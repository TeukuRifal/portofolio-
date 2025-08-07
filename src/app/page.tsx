'use client'
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { SKILLS, PROJECTS } from '@/app/utils/constants';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter, FiExternalLink } from 'react-icons/fi';

export default function App() {
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, []);
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.tags.includes(activeTab));

  const downloadCV = () => {
    // Replace with actual CV download logic
    const link = document.createElement('a');
    link.href = '/dokumen/CV_T.Rifal Aulia.pdf';
    link.download = 'Teuku-Rifal-Aulia-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation - Applying Visibility and Feedback */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gray-900 flex items-center">
              <span className="bg-blue-600 text-white p-2 rounded mr-2">TR</span>
              <span>Teuku Rifal</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button
                variant="primary"
                size="sm"
                onClick={downloadCV}
                className="flex items-center gap-2"
              >
                <FiDownload /> Download CV
              </Button>
            </div>

            {/* Mobile Menu Button - Applying Affordance */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu - Applying Consistency */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >About</a>
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >Skills</a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >Projects</a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >Contact</a>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  downloadCV();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 mt-2"
              >
                <FiDownload /> Download CV
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Applying Emotional Design */}
      <Section bg="gray" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-32 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="lg:w-1/2"
              variants={itemVariants}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Hi, I'm <span className="text-blue-600">Teuku Rifal Aulia</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Passionate Full Stack Developer creating intuitive digital experiences with modern technologies
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  href="#projects"
                  className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                  aria-label="View my projects"
                > 
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="mailto:your.trifalaulia@gmail.com"
                  className="group border-2 border-gray-300 hover:border-blue-500"
                  aria-label="Contact me"
                >
                  <span className="flex items-center gap-2">
                    Contact Me
                    <FiMail className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <a
                    href="https://github.com/rifall"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-100 rounded-full"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/teukurifal03/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-100 rounded-full"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter profile"
                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-100 rounded-full"
                  >
                    <FiTwitter className="w-5 h-5" />
                  </a>
                </div>
                <span className="h-0.5 w-8 bg-gray-300"></span>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available for opportunities
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative lg:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-xl">
                  <Image
                    src="/rifal.jpeg"
                    alt="Teuku Rifal Aulia"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <button
                  onClick={downloadCV}
                  className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  aria-label="Download resume"
                >
                  <div className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                    <FiDownload className="text-blue-600 w-5 h-5" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Skills Section - Applying Constraints */}
      <Section id="skills" title="My Expertise" subtitle="Technologies I Work With">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <SkillCard
                {...skill}
                className="hover:shadow-md hover:border-blue-200 transition-all duration-200"
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Selected Work</h2>
          <p className="text-gray-600 text-center mb-12">Featured Projects</p>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-white p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activeTab === 'all'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveTab('web')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activeTab === 'web'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Web Apps
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activeTab === 'mobile'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Mobile Apps
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.projectUrl}
                    className="text-blue-600 hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <FiExternalLink className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      {/* About Section - Applying Discoverability */}
      </section>

      {/* About Section - Applying Discoverability */}
      <Section id="about" title="About Me" subtitle="My Journey">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 md:p-10 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center md:justify-end">
                <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-xl overflow-hidden border-4 border-blue-100 shadow-md">
                  <Image
                    src="/rifal_pp.png"
                    alt="Working on laptop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">My Professional Journey</h3>
                <p className="text-gray-700 mb-3">
                  Computer Science graduate passionate about solving problems and building intuitive digital experiences. My journey started at 16, creating my first website and sparking a lifelong fascination with technology.
                </p>
                <p className="text-gray-700 mb-5">
                  Skilled in React, Next.js, and full-stack development, I combine technical expertise with creative solutions. I focus on writing clean, maintainable code and staying updated with industry trends.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    onClick={downloadCV}
                    className="flex items-center gap-2"
                    aria-label="Download my CV"
                  >
                    <FiDownload /> Download CV
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      

      <Footer />
    </div>
  );
}