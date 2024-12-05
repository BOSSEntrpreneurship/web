import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Event } from '../../types/event';
import { EventTag } from './EventTag';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <EventTag type={event.status} />
          <EventTag type={event.category} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          {event.title}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {event.description}
        </p>
        {event.status === 'future' && (
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Register Now
          </button>
        )}
      </div>
    </div>
  );
}