import React from 'react';
import type { Skill } from '@/data/types';

interface SkillBarProps {
  skill: Skill;
  index: number;
  isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index, isVisible }) => {
  return (
    <div
      className={`mb-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${
          skill.category === 'expert' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
            skill.category === 'proficient' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
        }`}>
          {skill.years}
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000 relative overflow-hidden"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 150}ms`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
