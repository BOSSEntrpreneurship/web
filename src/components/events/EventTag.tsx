import React from 'react';
import { EventStatus, EventCategory } from '../../types/event';

interface EventTagProps {
  type: EventStatus | EventCategory;
}

export function EventTag({ type }: EventTagProps) {
  const getTagStyle = () => {
    switch (type) {
      case 'past':
        return 'bg-gray-600 text-white';
      case 'future':
        return 'bg-green-600 text-white';
      case 'Bake Sales':
        return 'bg-blue-600 text-white';
      case 'Workshops':
        return 'bg-purple-600 text-white';
      case 'Competitions':
        return 'bg-orange-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getTagStyle()}`}>
      {type}
    </span>
  );
}