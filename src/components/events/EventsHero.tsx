import React from 'react';
import { Calendar } from 'lucide-react';
export function EventsHero() {
  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
          <Calendar className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Upcoming and Past Events
        </h1>
        <p className="text-xl text-purple-100 max-w-3xl mx-auto">
          Join us for upcoming workshops, bake sales, and competitions and look back on succesful past events.
        </p>
      </div>
    </div>
  );
}
