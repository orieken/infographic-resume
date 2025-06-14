import React from 'react';
import StatCard from '@/components/ui/StatCard';
import type { Stat } from '@/data/types';

interface StatsSectionProps {
  stats: Stat[];
  visibleItems: Set<string>;
  registerElement: (element: Element | null) => void;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats, visibleItems, registerElement }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 p-12">
      <div
        id="stats-section"
        ref={registerElement}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => (
          <StatCard
            key={stat.id}
            stat={stat}
            index={index}
            isVisible={visibleItems.has('stats-section')}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
