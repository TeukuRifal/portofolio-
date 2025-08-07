import { Skill, Project, Testimonial, NavItem } from '../../types/types';
import React from 'react';

import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDocker,
  FaShoppingCart,
  FaAws
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiKotlin,
  SiFlutter
} from 'react-icons/si';


import { MdHealthAndSafety, MdSchool, MdMedicalServices } from 'react-icons/md';
import { HiOutlineAcademicCap, HiOutlineBookOpen } from 'react-icons/hi';
export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const SKILLS: Skill[] = [
  {
    id: '1',
    name: 'React',
    level: 'Expert',
    icon: <FaReact className="text-blue-500" size={24} />,
    description: 'Building interactive UIs with React hooks and context API',
  },
  {
    id: '2',
    name: 'PHP',
    level: 'Expert',
    icon: <FaPhp className="text-purple-600" size={24} />,
    description: 'Building dynamic websites and web applications',
  },
  {
    id: '3',
    name: 'Laravel',
    level: 'Expert',
    icon: <FaLaravel className="text-red-500" size={24} />,
    description: 'Building robust backend systems and APIs',
  },
  {
    id: '4',
    name: 'Node.js',
    level: 'Advanced',
    icon: <FaNodeJs className="text-green-500" size={24} />,
    description: 'Building server-side applications and APIs',
  },
  {
    id: '5',
    name: 'JavaScript',
    level: 'Expert',
    icon: <FaJs className="text-yellow-400" size={24} />,
    description: 'Full-stack JavaScript development',
  },
  {
    id: '6',
    name: 'TypeScript',
    level: 'Advanced',
    icon: <SiTypescript className="text-blue-600" size={24} />,
    description: 'Type-safe JavaScript development',
  },
  {
    id: '7',
    name: 'Next.js',
    level: 'Advanced',
    icon: <SiNextdotjs className="text-black" size={24} />,
    description: 'Building SSR and static web applications',
  },
  {
    id: '8',
    name: 'HTML5',
    level: 'Expert',
    icon: <FaHtml5 className="text-orange-500" size={24} />,
    description: 'Semantic web markup',
  },
  {
    id: '9',
    name: 'CSS3',
    level: 'Expert',
    icon: <FaCss3Alt className="text-blue-400" size={24} />,
    description: 'Modern styling and animations',
  },
  {
    id: '10',
    name: 'Tailwind CSS',
    level: 'Expert',
    icon: <SiTailwindcss className="text-cyan-400" size={24} />,
    description: 'Utility-first CSS framework',
  },
  {
    id: '11',
    name: 'MySQL',
    level: 'Advanced',
    icon: <SiMysql className="text-blue-600" size={24} />,
    description: 'Relational database management',
  },
  {
    id: '12',
    name: 'MongoDB',
    level: 'Beginner',
    icon: <SiMongodb className="text-green-600" size={24} />,
    description: 'NoSQL database solutions',
  },
  {
    id: '13',
    name: 'Git',
    level: 'Advanced',
    icon: <FaGitAlt className="text-orange-600" size={24} />,
    description: 'Version control system',
  },
  {
    id: '14',
    name: 'Docker',
    level: 'Beginner',
    icon: <FaDocker className="text-blue-400" size={24} />,
    description: 'Containerization and deployment',
  },
  {
    id: '15',
    name: 'Figma',
    level: 'Intermediate',
    icon: <FaFigma className="text-purple-500" size={24} />,
    description: 'UI/UX design and prototyping',
  },
  {
    id: '16',
    name: 'Kotlin',
    level: 'Intermediate',
    icon: <SiKotlin className="text-purple-500" size={24} />,
    description: 'Android development using Kotlin',
  },
  {
    id: '17',
    name: 'Flutter',
    level: 'Beginner',
    icon: <SiFlutter className="text-blue-500" size={24} />,
    description: 'Android development using Kotlin',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EDU Test Market',
    description: 'Comprehensive platform for selling practice tests for CPNS/CAT/TWK and other competitive exams',
    tags: ['Laravel', 'Node.js', 'PHP', 'MySQL', 'web'],
    imageUrl: '/eduTestmarket.png',
    projectUrl: 'https://edutestmarket.com/',
    githubUrl: '#',
    icon: <MdSchool className="text-blue-600" size={24} />,
    features: [
      'User authentication and authorization',
      'Payment gateway integration',
      'Test scoring system',
      'Admin dashboard',
      'Responsive design'
    ],
    year: 2023
  },
  {
    id: '2',
    title: 'Electronic Medical Records for Elderly',
    description: 'Comprehensive health record system for elderly residents in Kopelma Darussalam village',
    tags: ['Laravel', 'Vue.js', 'PHP', 'MySQL', 'web'],
    imageUrl: '/projek/remela.png',
    projectUrl: 'https://remela.id/',
    githubUrl: '#',
    icon: <MdMedicalServices className="text-green-600" size={24} />,
    features: [
      'Patient health tracking',
      'Medical history records',
      'Appointment scheduling',
      'Reporting and analytics',
      'Role-based access control'
    ],
    year: 2022
  },
  {
    id: '3',
    title: 'Electronic Medical Records for Children',
    description: 'Comprehensive health record system for elderly residents in Kopelma Darussalam village',
    tags: ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'web'],
    imageUrl: '/projek/remeta.png',
    projectUrl: 'https://remela.site',
    githubUrl: '#',
    icon: <HiOutlineBookOpen className="text-purple-600" size={24} />,
    features: [
      'Book catalog management',
      'User borrowing system',
      'Late fee calculation',
      'Search and filtering',
      'Admin reporting'
    ],
    year: 2021
  },
  {
    id: '4',
    title: 'SIDARA ACEH',
    description: 'Aplikasi Sistem Informasi dan Data Program Merdeka Belajar Provinsi Aceh',
    tags: ['Kotlin','mobile'],
    imageUrl: '/projek/sidara.jpg',
    projectUrl: '',
    githubUrl: '#',
    icon: <HiOutlineBookOpen className="text-purple-600" size={24} />,
    features: [
      'Data MBKM Provinsi Aceh',
      'Grafik MBKM Provinsi Aceh',
    ],
    year: 2021
  },

];
