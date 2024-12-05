import { Target, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To foster entrepreneurial mindsets and equip students with the skills, knowledge, and network they need to succeed in the business world.'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Innovation, collaboration, integrity, and continuous learning are at the core of everything we do.'
  },
  {
    icon: Users,
    title: 'Our Community',
    description: 'A diverse group of passionate students, dedicated mentors, and industry professionals working together to create meaningful impact.'
  }
];

export function Mission() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}