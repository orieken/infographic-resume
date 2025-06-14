import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-3xl font-bold text-gray-800 dark:text-white mb-8 relative ${className}`}>
      {children}
      <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
    </h2>
  );
};

export default SectionTitle;
