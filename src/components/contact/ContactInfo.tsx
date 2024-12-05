import React from 'react';
import { MapPin, Clock, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    details: [
      'Bur Oak Secondary School',
      '933 Bur Oak Ave',
      'Markham, ON L6E 1G4',
    ],
  },
  {
    icon: Clock,
    title: 'Meeting Times',
    details: ['Every Wednesday', '2:55 PM - 4:30 PM', 'Room 1035'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['buroakentrepreneurship@gmail.com'],
  },
];

export function ContactInfo() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
