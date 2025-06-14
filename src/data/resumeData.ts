import { MapPin, Mail, Phone, Code, BarChart3, Star } from 'lucide-react';
import type { ResumeData } from '@/data/types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Oscar Rieken",
    tagline: "Principal SDET | AI/ML Integration Specialist | Automation Architect",
    contacts: [
      { icon: MapPin, text: "New Orleans, LA | Butler, PA" },
      { icon: Mail, text: "oriekenjr@gmail.com", href: "mailto:oriekenjr@gmail.com" },
      { icon: Phone, text: "+1 504 723 4720", href: "tel:+15047234720" }
    ]
  },
  stats: [
    { id: 'experience', number: '18+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
    { id: 'teams', number: '90+', label: 'Teams Mentored', color: 'from-green-500 to-emerald-500' },
    { id: 'sdets', number: '12', label: 'SDETs Led', color: 'from-purple-500 to-violet-500' },
    { id: 'languages', number: '7', label: 'Programming Languages', color: 'from-orange-500 to-red-500' }
  ],
  skillCategories: [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 95, years: '10+ years', category: 'expert' },
        { name: 'TypeScript', level: 90, years: '5+ years', category: 'expert' },
        { name: 'Ruby', level: 90, years: '10+ years', category: 'expert' },
        { name: 'Python', level: 80, years: '4+ years', category: 'proficient' },
        { name: 'Java', level: 75, years: '6+ years', category: 'proficient' }
      ]
    },
    {
      id: 'testing',
      title: 'Testing & Automation',
      icon: BarChart3,
      skills: [
        { name: 'Playwright', level: 95, years: 'Expert', category: 'expert' },
        { name: 'Cypress', level: 90, years: 'Expert', category: 'expert' },
        { name: 'Selenium', level: 95, years: '10+ years', category: 'expert' },
        { name: 'API Testing', level: 85, years: 'Expert', category: 'proficient' }
      ]
    },
    {
      id: 'aiml',
      title: 'AI/ML & Analytics',
      icon: Star,
      skills: [
        { name: 'RAG Models', level: 85, years: 'Expert', category: 'proficient' },
        { name: 'GPT Integration', level: 80, years: 'Advanced', category: 'proficient' },
        { name: 'Prometheus/Grafana', level: 75, years: 'Proficient', category: 'proficient' }
      ]
    }
  ],
  innovations: [
    {
      id: 'ai-dashboard',
      icon: '🤖',
      title: 'AI-Powered Dashboard',
      description: 'ML-driven test analytics with RAG models and GPT integration'
    },
    {
      id: 'telemetry',
      icon: '📊',
      title: 'Real-time Telemetry',
      description: 'Live test results with automated failure prediction'
    },
    {
      id: 'migration',
      icon: '🔄',
      title: 'Framework Migration',
      description: 'Seamless Protractor → Cypress/Playwright transition'
    },
    {
      id: 'a11y',
      icon: '♿',
      title: 'A11y Integration',
      description: 'Automated accessibility testing with Playwright + Axe'
    }
  ],
  experience: [
    {
      id: 'rieken-consulting',
      title: 'Principal SDET',
      company: 'Rieken Consulting',
      date: 'August 2023 - Present',
      highlights: [
        'Built ML-powered testing platform with RAG integration',
        'Created custom Playwright framework with real-time analytics',
        'Mentored 7 development teams and 4 SDETs',
        'Developed unified Grafana dashboards with AI insights'
      ]
    },
    {
      id: 'adp',
      title: 'Principal SDET',
      company: 'ADP',
      date: 'June 2016 - August 2023',
      highlights: [
        'Influenced 90+ product teams across MyADP ecosystem',
        'Led Protractor → Cypress/Playwright migration',
        'Implemented accessibility testing with Playwright + Axe',
        'Established quality gates and metrics standardization'
      ]
    },
    {
      id: 'home-depot',
      title: 'Lead Software Engineer',
      company: 'The Home Depot',
      date: 'June 2015 - March 2017',
      highlights: [
        'Led AngularJS migration from proprietary framework',
        'Established TDD/BDD and CI/CD best practices',
        'Mentored 5 engineers in automation excellence'
      ]
    }
  ],
  achievements: [
    {
      id: 'transformation',
      icon: '🏆',
      title: 'Enterprise Transformation',
      description: 'Successfully transformed 90+ product teams to modern automation practices, reducing deployment time by 60%'
    },
    {
      id: 'top-app',
      icon: '🚀',
      title: 'Top 5 App Store Ranking',
      description: 'Accessibility integration work contributed to ADP mobile apps reaching top 5 business apps'
    },
    {
      id: 'ai-pioneer',
      icon: '💡',
      title: 'AI Innovation Pioneer',
      description: 'First to integrate ML/RAG models with traditional testing frameworks'
    },
    {
      id: 'leadership',
      icon: '👥',
      title: 'Leadership Excellence',
      description: 'Mentored 90+ teams and 12 direct SDETs, establishing industry-leading SDET playbooks'
    }
  ],
  education: [
    {
      id: 'masters',
      title: "Master's - ML & AI",
      school: 'Heriot-Watt University',
      status: 'In Progress - 2025'
    },
    {
      id: 'ibm-fullstack',
      title: 'IBM Full Stack Developer',
      school: 'IBM Professional Certificate',
      status: 'In Progress - March 2025'
    },
    {
      id: 'ibm-ai',
      title: 'IBM AI Developer',
      school: 'IBM Professional Certificate',
      status: 'In Progress - March 2025'
    }
  ]
};
