import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import type { Stat } from '@/data/types';

interface StatCardProps {
  stat: Stat;
  index: number;
  isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, isVisible }) => {
  const animatedNumber = useCountUp(stat.number, 2000, isVisible);

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-full h-1 bg-gradient-to-r ${stat.color} rounded-full mb-6`}></div>
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          {animatedNumber}
        </div>
        <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
      </div>
    </div>
  );
};

export default StatCard;
