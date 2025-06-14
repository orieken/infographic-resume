import { LucideIcon } from 'lucide-react';

export interface PersonalInfo {
  name: string;
  tagline: string;
  contacts: ContactInfo[];
}

export interface ContactInfo {
  icon: LucideIcon;
  text: string;
  href?: string;
}

export interface Stat {
  id: string;
  number: string;
  label: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  years: string;
  category: 'expert' | 'proficient' | 'intermediate';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  highlights: string[];
}

export interface Innovation {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Education {
  id: string;
  title: string;
  school: string;
  status: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  stats: Stat[];
  skillCategories: SkillCategory[];
  innovations: Innovation[];
  experience: Experience[];
  achievements: Achievement[];
  education: Education[];
}