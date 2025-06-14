import React from 'react';
import TimelineItem from '@/components/ui/TimelineItem';
import SectionTitle from '@/components/common/SectionTitle';
import type { Experience } from '@/data/types';

interface ExperienceSectionProps {
  experience: Experience[];
  visibleItems: Set<string>;
  registerElement: (element: Element | null) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
                                                               experience,
                                                               visibleItems,
                                                               registerElement
                                                             }) => {
  return (
    <section className="mb-12">
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>
        <div
          id="timeline"
          ref={registerElement}
        >
          {experience.map((job, index) => (
            <TimelineItem
              key={job.id}
              job={job}
              index={index}
              isVisible={visibleItems.has('timeline')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
