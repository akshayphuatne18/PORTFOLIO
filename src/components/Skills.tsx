import React from 'react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Flask', 'Django'],
    },
    {
      title: 'Database & ORM',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma ORM'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS Lambda', 'Docker', 'Serverless Architecture'],
    },
    {
      title: 'AI & ML',
      skills: ['Machine Learning', 'Deep Learning', 'Anomaly Detection'],
    },
    {
      title: 'Other Technologies',
      skills: ['REST APIs', 'JWT Authentication', 'Zod Validation', 'Agile Methodologies'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}