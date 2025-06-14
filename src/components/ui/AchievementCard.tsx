import React from 'react';
import type { Achievement } from '@/data/types';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  isVisible: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index, isVisible }) => {
  return (
    <div
      className={`bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-2xl mb-4 relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 opacity-20 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpolygon points='50,15 61,35 85,35 67,50 73,74 50,59 27,74 33,50 15,35 39,35' fill='white'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }}></div>
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2">
          <span className="mr-2">{achievement.icon}</span>
          {achievement.title}
        </h3>
        <p className="text-sm opacity-90">{achievement.description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
