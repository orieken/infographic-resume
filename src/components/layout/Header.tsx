import React from 'react';
import type { PersonalInfo } from '@/data/types';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='25' cy='25' r='1' fill='white'/%3E%3Ccircle cx='75' cy='75' r='1' fill='white'/%3E%3C/svg%3E")`,
        backgroundSize: '50px 50px'
      }}></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
        <p className="text-xl mb-6 text-gray-200">{personalInfo.tagline}</p>
        <div className="flex justify-center space-x-8 flex-wrap gap-4">
          {personalInfo.contacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-2">
              <contact.icon className="w-5 h-5 text-blue-400" />
              {contact.href ? (
                <a href={contact.href} className="text-lg hover:text-blue-300 transition-colors">
                  {contact.text}
                </a>
              ) : (
                <span className="text-lg">{contact.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
