import React, { useState } from 'react';
import { EventCard } from './EventCard';
import { events } from '../../data/events';
import { EventCategory, EventStatus } from '../../types/event';

const categories: ('All' | EventCategory)[] = ["All", "Bake Sales", "Competitions", "Workshops"];
const statuses: ('All' | EventStatus)[] = ["All", "future", "past"];

export function EventsList() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | EventCategory>("All");
  const [selectedStatus, setSelectedStatus] = useState<'All' | EventStatus>("All");

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === "All" || event.category === selectedCategory;
    const statusMatch = selectedStatus === "All" || event.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="text-gray-700 dark:text-gray-300 self-center">Category:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="text-gray-700 dark:text-gray-300 self-center">Status:</span>
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {filteredEvents.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400 py-12">
            No events found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}