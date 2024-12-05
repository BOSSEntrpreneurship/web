import React from 'react';
import { Mail } from 'lucide-react';

export function ContactHero() {
  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-green-600 to-blue-600">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
          <Mail className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Have questions about BOSS Entrepreneurship? We'd love to hear from you!
        </p>
      </div>
    </div>
  );
}