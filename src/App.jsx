import React from 'react';
import ForestBackground from './components/ForestBackground';
import ErrorContent from './components/ErrorContent';

export default function App() {
  return (
    <main className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-x-hidden p-2 sm:p-4">
      {/* Surrounding Forest Elements (Trees on sides, corners, bottom tree line) */}
      <ForestBackground />

      {/* Main 404 Content (Center vertical stack) */}
      <ErrorContent />
    </main>
  );
}
