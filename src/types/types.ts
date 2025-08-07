import { ReactNode } from 'react';
import React from 'react';

export type Skill = {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: ReactNode;
  description: string;
  className?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  icon?: React.ReactNode;
  features: string[];
  year: number;
  className?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
};

export type NavItem = {
  name: string;
  href: string;
  icon?: string;
};