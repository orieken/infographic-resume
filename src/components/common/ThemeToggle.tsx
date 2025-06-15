import React from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';  // Current theme passed as a prop
  onToggle: () => void;     // Function to toggle the theme passed as a prop
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const handleClick = () => {
    console.log(`Current theme: ${theme}, Toggling theme...`); // Log theme before toggling
    onToggle();  // Call the passed toggle function
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
