import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold mb-2">Loading Resume</h2>
        <p className="text-blue-200">Initializing AI-powered experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
