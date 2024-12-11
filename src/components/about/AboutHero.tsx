import React from 'react';

export function AboutHero() {
  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About BOSS Entrepreneurship
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Empowering students to become the next generation of innovative leaders and successful entrepreneurs through hands-on experience and mentorship.
        </p>
      </div>
    </div>
  );
}
