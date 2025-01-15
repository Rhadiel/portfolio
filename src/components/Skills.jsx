import React from 'react';

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "MUI"] },
    { category: "Backend", items: ["Python", "PHP"] },
    { category: "Database", items: ["Supabase", "MySQL"] },
    { category: "Tools", items: ["VS Code", "Git", "GitHub", "Postman", "Netlify"] },
  ];

  return (
    <section
    id="skills"
    className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center"
  >

      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-gray-100">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-lg font-medium text-gray-600 dark:text-gray-300"
                  >
                    <span className="inline-block w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
