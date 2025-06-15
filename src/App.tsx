import React, { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme'; // Use the custom useTheme hook
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
  const { theme, toggleTheme } = useTheme(); // Use the useTheme hook to get the theme and toggle function
  const [isLoading, setIsLoading] = useState(true);
  const { visibleItems, registerElement } = useIntersectionObserver();

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Debugging: Log the theme and theme changes
  useEffect(() => {
    console.log('Current theme:', theme); // Log the current theme whenever it changes
    console.log('Toggling dark mode class');
    document.documentElement.classList.toggle('dark', theme === 'dark'); // Ensure the dark class is toggled on the html element
  }, [theme]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 min-h-screen">

        {/* Theme Toggle */}
        {/*<ThemeToggle theme={theme} onToggle={toggleTheme} />*/}

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
