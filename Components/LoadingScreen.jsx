import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;