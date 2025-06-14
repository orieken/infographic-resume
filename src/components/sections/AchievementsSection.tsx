import React from 'react';
import AchievementCard from '@/components/ui/AchievementCard';
import SectionTitle from '@/components/common/SectionTitle';
import type { Achievement } from '@/data/types';

interface AchievementsSectionProps {
  achievements: Achievement[];
  visibleItems: Set<string>;
  registerElement: (element: Element | null) => void;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
                                                                   achievements,
                                                                   visibleItems,
                                                                   registerElement
                                                                 }) => {
  return (
    <section className="mb-12">
      <SectionTitle>Major Achievements</SectionTitle>
      <div
        id="achievements"
        ref={registerElement}
      >
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            index={index}
            isVisible={visibleItems.has('achievements')}
          />
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
