import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import type { Education } from '@/data/types';

interface EducationSectionProps {
  education: Education[];
  visibleItems: Set<string>;
  registerElement: (element: Element | null) => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({
                                                             education,
                                                             visibleItems,
                                                             registerElement
                                                           }) => {
  return (
    <section>
      <SectionTitle>Education & Certifications</SectionTitle>
      <div
        id="education"
        ref={registerElement}
        className="space-y-4"
      >
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`bg-white dark:bg-gray-700 border-2 border-blue-500 dark:border-blue-400 rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${
              visibleItems.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h3 className="font-bold text-gray-800 dark:text-white mb-1">{edu.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.school}</p>
            <p className="text-red-600 dark:text-red-400 text-sm italic">{edu.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
