import React from 'react';
import { Calendar } from 'lucide-react';
import { PageHero } from '../shared/PageHero';

export function EventsHero() {
  return (
    <PageHero
      icon={Calendar}
      title="Upcoming and Past Events"
      description="Join us for upcoming workshops, bake sales, and competitions and look back on successful past events."
      gradientFrom="purple-600"
      gradientTo="blue-600"
    />
  );
}
