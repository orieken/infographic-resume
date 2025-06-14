import React from 'react';
import SkillBar from '@/components/ui/SkillBar';
import SectionTitle from '@/components/common/SectionTitle';
import type { SkillCategory } from '@/data/types';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  visibleItems: Set<string>;
  registerElement: (element: Element | null) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
                                                       skillCategories,
                                                       visibleItems,
                                                       registerElement
                                                     }) => {
  return (
    <section className="mb-12">
      <SectionTitle>Technical Skills</SectionTitle>

      {skillCategories.map((category) => (
        <div key={category.id} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
            <category.icon className="w-6 h-6 text-blue-500 mr-3" />
            {category.title}
          </h3>
          <div
            id={`skills-${category.id}`}
            ref={registerElement}
          >
            {category.skills.map((skill, skillIndex) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={skillIndex}
                isVisible={visibleItems.has(`skills-${category.id}`)}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
