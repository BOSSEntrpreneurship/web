import React from 'react';

const teamMembers = [
  {
    name: 'Krish Shah',
    role: 'Club President',
    bio: 'xxx',
  },
  {
    name: 'Darren Nadarajah',
    role: 'Co-Vice President',
    bio: 'xxx',
  },
  {
    name: 'Enoch Tang',
    role: 'Co-Vice President',
    bio: 'Enoch is an independent, courageous, and loyal individual who enjoys adventure and activities',
  },
  {
    name: 'Morris Hokan Yung',
    role: 'Head of Departments',
    bio: 'Mark.',
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
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
