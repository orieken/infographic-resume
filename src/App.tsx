// src/App.tsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Code, BarChart3, Star, Zap, Users, Trophy, GraduationCap, Globe, Shield } from 'lucide-react';

// Custom hooks
import { useCountUp } from '@/hooks/useCountUp';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Components
import LoadingScreen from '@/components/layout/LoadingScreen';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StatsSection from '@/components/sections/StatsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import InnovationsSection from '@/components/sections/InnovationsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import EducationSection from '@/components/sections/EducationSection';
import AdditionalInfoSection from '@/components/sections/AdditionalInfoSection';
import ThemeToggle from '@/components/common/ThemeToggle';

// Data and types
import { resumeData } from '@/data/resumeData';
import type { ResumeData } from '@/data/types';

// Styles
import './styles/globals.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(true);
  const { visibleItems, registerElement } = useIntersectionObserver();

  // Initialize app
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1500);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    return () => clearTimeout(timer);
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 min-h-screen">

        {/* Theme Toggle */}
        <ThemeToggle theme={theme} onToggle={toggleTheme} />

        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}
          <Header personalInfo={resumeData.personalInfo} />

          {/* Stats Section */}
          <StatsSection
            stats={resumeData.stats}
            visibleItems={visibleItems}
            registerElement={registerElement}
          />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left Column */}
            <div className="bg-gray-50 dark:bg-gray-800 p-12">

              {/* Skills */}
              <SkillsSection
                skillCategories={resumeData.skillCategories}
                visibleItems={visibleItems}
                registerElement={registerElement}
              />

              {/* Innovations */}
              <InnovationsSection
                innovations={resumeData.innovations}
                visibleItems={visibleItems}
                registerElement={registerElement}
              />

              {/* Education */}
              <EducationSection
                education={resumeData.education}
                visibleItems={visibleItems}
                registerElement={registerElement}
              />

            </div>

            {/* Right Column */}
            <div className="bg-white dark:bg-gray-900 p-12">

              {/* Experience Timeline */}
              <ExperienceSection
                experience={resumeData.experience}
                visibleItems={visibleItems}
                registerElement={registerElement}
              />

              {/* Achievements */}
              <AchievementsSection
                achievements={resumeData.achievements}
                visibleItems={visibleItems}
                registerElement={registerElement}
              />

              {/* Additional Info */}
              <AdditionalInfoSection />

            </div>
          </div>

          {/* Footer */}
          <Footer />

        </div>
      </div>
    </div>
  );
};

export default App;

