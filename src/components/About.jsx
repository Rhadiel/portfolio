import React from 'react';
import profileImage from '../assets/images/aboutrad.png';

const About = () => {
  const skills = [
    { name: 'PHP', description: 'Backend development with dynamic server-side logic.' },
    { name: 'JavaScript', description: 'Dynamic web interactions and functionality.' },
    { name: 'React', description: 'Building scalable and reusable UI components.' },
    { name: 'MySQL', description: 'Database management for structured data.' },
    { name: 'Supabase', description: 'Backend-as-a-service for modern apps.' },
    { name: 'HTML & CSS', description: 'Structuring and styling responsive web pages.' },
    { name: 'MUI (Material-UI)', description: 'React UI framework for modern designs.' },
    { name: 'Python', description: 'Scripting, automation, and backend tasks.' },
    { name: 'Java', description: 'Object-oriented programming and robust backend solutions.' },
  ];

  return (
    <section
      id="about"
      className="py-16 min-h-screen bg-gradient-to-r from-blue-50 via-gray-50 to-blue-100 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12 mt-12 text-gray-900 dark:text-gray-100"
            data-aos="fade-down"
          >
            About Me
          </h2>
          <div
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div className="text-center">
              <img
                src={profileImage}
                alt="Your Portrait"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-600 dark:border-blue-400"
                data-aos="flip-left"
                data-aos-duration="1000"
              />
              <p
                className="text-lg mb-6 text-gray-700 dark:text-gray-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Hi! I'm a fresh graduate passionate about web development and aspiring to become a skilled full-stack developer. With a strong foundation in programming and problem-solving, I am eager to contribute to impactful projects while enhancing my skills.
                </p>

            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3
            className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
            data-aos="fade-down"
          >
            My Skills
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            data-aos="fade-up"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {skill.name}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
