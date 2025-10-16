import { Skill, Project, Experience, NavItem } from '../../types/types';
import React from 'react';

import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaDocker,
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


import { MdSchool, MdMedicalServices } from 'react-icons/md';
import { HiOutlineBookOpen } from 'react-icons/hi';
export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const SKILLS: Skill[] = [
  // {
  //   id: '1',
  //   name: 'React',
  //   level: 'Intermediate',
  //   icon: <FaReact className="text-blue-500" size={24} />,
  //   description: 'Building interactive UIs with React hooks and context API',
  // },
  {
    id: '1',
    name: 'PHP',
    level: 'Intermediate',
    icon: <FaPhp className="text-purple-600" size={24} />,
    description: 'Building dynamic websites and web applications',
  },
  {
    id: '2',
    name: 'Laravel',
    level: 'Intermediate',
    icon: <FaLaravel className="text-red-500" size={24} />,
    description: 'Building robust backend systems and APIs',
  },
  {
    id: '3',
    name: 'Node.js',
    level: 'Intermediate',
    icon: <FaNodeJs className="text-green-500" size={24} />,
    description: 'Building server-side applications and APIs',
  },
  {
    id: '4',
    name: 'JavaScript',
    level: 'Intermediate',
    icon: <FaJs className="text-yellow-400" size={24} />,
    description: 'Full-stack JavaScript development',
  },
  {
    id: '5',
    name: 'TypeScript',
    level: 'Intermediate',
    icon: <SiTypescript className="text-blue-600" size={24} />,
    description: 'Type-safe JavaScript development',
  },
  {
    id: '6',
    name: 'Next.js',
    level: 'Intermediate',
    icon: <SiNextdotjs className="text-black" size={24} />,
    description: 'Building SSR and static web applications',
  },
  {
    id: '7',
    name: 'HTML5',
    level: 'Intermediate',
    icon: <FaHtml5 className="text-orange-500" size={24} />,
    description: 'Semantic web markup',
  },
  // {
  //   id: '8',
  //   name: 'CSS3',
  //   level: 'Intermediate',
  //   icon: <FaCss3Alt className="text-blue-400" size={24} />,
  //   description: 'Modern styling and animations',
  // },
  {
    id: '8',
    name: 'Tailwind CSS',
    level: 'Intermediate',
    icon: <SiTailwindcss className="text-cyan-400" size={24} />,
    description: 'Utility-first CSS framework',
  },
  {
    id: '9',
    name: 'MySQL',
    level: 'Intermediate',
    icon: <SiMysql className="text-blue-600" size={24} />,
    description: 'Relational database management',
  },
  // {
  //   id: '12',
  //   name: 'MongoDB',
  //   level: 'Beginner',
  //   icon: <SiMongodb className="text-green-600" size={24} />,
  //   description: 'NoSQL database solutions',
  // },
  {
    id: '10',
    name: 'Git',
    level: 'Intermediate',
    icon: <FaGitAlt className="text-orange-600" size={24} />,
    description: 'Version control system',
  },
  // {
  //   id: '14',
  //   name: 'Docker',
  //   level: 'Beginner',
  //   icon: <FaDocker className="text-blue-400" size={24} />,
  //   description: 'Containerization and deployment',
  // },
  {
    id: '11',
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
  // {
  //   id: '17',
  //   name: 'Flutter',
  //   level: 'Beginner',
  //   icon: <SiFlutter className="text-blue-500" size={24} />,
  //   description: 'Android development using Kotlin',
  // },
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
    projectUrl: '',
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
    projectUrl: '',
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
    tags: ['Kotlin', 'mobile'],
    imageUrl: '/projek/sidara.jpg',
    projectUrl: 'https://play.google.com/store/apps/details?id=id.bpmpaceh.sidara&pcampaignid=web_share',
    githubUrl: '#',
    icon: <HiOutlineBookOpen className="text-purple-600" size={24} />,
    features: [
      'Data MBKM Provinsi Aceh',
      'Grafik MBKM Provinsi Aceh',
    ],
    year: 2021
  },

];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "KKN – Pembuatan Aplikasi Rekam Medis Elektronik Lansia",
    description:
      "Selama kegiatan KKN di Desa Kopelma Darussalam, saya mengembangkan aplikasi rekam medis elektronik lansia berbasis web menggunakan Laravel. Aplikasi ini membantu petugas posyandu dalam mencatat dan memantau data kesehatan lansia secara digital.",
    image: "/experiences/kkn.jpg",
  },
  {
    id: 2,
    title: "Magang di BPMA – WebGIS Hulu Migas Aceh",
    description:
      "Selama magang di Badan Pengelola Migas Aceh (BPMA), saya berkontribusi dalam pengembangan WebGIS untuk visualisasi data wilayah kerja dan produksi migas. Proyek ini menggunakan teknologi Next.js, Express.js, dan Google Cloud Platform untuk mendukung efisiensi operasional.",
    image: "/experiences/BPMA.jpg",
  },
  {
    id: 3,
    title: "MBKM Kampus Merdeka - Bangkit Mobile Development Batch 2",
    description:
      "Sebagai bagian dari program MBKM Kampus Merdeka, saya mengikuti pelatihan intensif Bangkit Mobile Development Batch 2. Program ini memperdalam pengetahuan saya dalam pengembangan aplikasi mobile menggunakan Kotlin, serta meningkatkan keterampilan teknis dan kolaborasi tim.",
    image: "/experiences/bangkit.jpg",
  },
]
