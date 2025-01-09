import React from 'react';
import { ScaleIn } from '../animations/ScaleIn';

const teamMembers = [
  {
    name: 'Krish Shah',
    role: 'Club President',
    bio: 'xxx',
  },
  {
    name: 'Darren Nadarajah',
    role: 'Co-Vice President',
    bio: 'Darren is an innovative leader that loves action. He loves working with others and is open to new ideas and concepts.',
  },
  {
    name: 'Enoch Tang',
    role: 'Co-Vice President',
    bio: 'Enoch is an independent, courageous, and loyal individual who enjoys adventure and activities',
  },
  {
    name: 'Morris Hokan Yung',
    role: 'Head of Departments',
    bio: 'Morris is a motivated, resilient, and reliable person who you can always depend on.',
  },
  {
    name: 'Isabella Victorino',
    role: 'Head of Marketing',
    bio: 'xxx',
  },
  {
    name: 'Elise Woo',
    role: 'Head of Logistics',
    bio: 'xxx',
  },
  {
    name: 'Awsaf Syed',
    role: 'Head of Treasuary',
    bio: 'Awsaf is reliable and driven. He loves sharing and exploring new ideas and concepts.',
  },
];

export function Team() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-gray-900 dark:text-white">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <ScaleIn key={member.name} delay={index * 50} threshold={0}>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {member.bio}
                  </p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
