import React from 'react';
import { EventsHero } from '../components/events/EventsHero';
import { EventsList } from '../components/events/EventsList';

export function Events() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      <EventsHero />
      <EventsList />
    </div>
  );
}