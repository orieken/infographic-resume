import React from 'react';
import type { Innovation } from '@/data/types';

interface InnovationCardProps {
  innovation: Innovation;
  index: number;
  isVisible: boolean;
}

const InnovationCard: React.FC<InnovationCardProps> = ({ innovation, index, isVisible }) => {
  return (
    <div
      className={`bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 rounded-2xl text-center relative overflow-hidden transition-all duration-700 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="relative z-10">
        <div className="text-4xl mb-4">{innovation.icon}</div>
        <h3 className="font-bold text-lg mb-2">{innovation.title}</h3>
        <p className="text-sm opacity-90">{innovation.description}</p>
      </div>
    </div>
  );
};

export default InnovationCard;
