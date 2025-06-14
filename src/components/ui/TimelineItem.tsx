import React from 'react';
import type { Experience } from '@/data/types';

interface TimelineItemProps {
  job: Experience;
  index: number;
  isVisible: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ job, index, isVisible }) => {
  return (
    <div
      className={`relative mb-8 ml-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="absolute -left-8 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{job.title}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{job.company}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{job.date}</p>
        <ul className="space-y-2">
          {job.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-500 mr-2 mt-1">✦</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
