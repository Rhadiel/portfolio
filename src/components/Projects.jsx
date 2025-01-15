import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Project1 from '../assets/images/landing.png'; // Importing image for CebuStay
import Project2 from '../assets/images/proj.png'; // Importing image for CebuStay
import Project3 from '../assets/images/proj1.png'; // Importing image for CebuStay


const Projects = () => {
  const projects = [
    {
      title: "CebuStay",
      description: "An accommodation booking website focused on providing a seamless user experience for Cebu tourists and accommodation owners.",
      image: Project1, // Image for CebuStay
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "PHP", "Vercel"],
      githubLink: "https://github.com", // Replace with actual GitHub link
      liveLink: "https://project.com" // Replace with actual live demo link
    },
    {
      title: "Hotel Booking System",
      description: "A Java-based hotel booking system built using MySQL and developed in Eclipse IDE.",
      image: Project2,
      technologies: ["Java", "MySQL", "Eclipse IDE"],
      githubLink: "https://github.com", // Replace with actual GitHub link
      liveLink: "#" // No live demo available
    },
    {
      title: "Unit Converter",
      description: "A user-friendly unit conversion application developed using Python and PySimpleGUI.",
      image: Project3,// Replace with actual image path if available
      technologies: ["Python", "PySimpleGUI"],
      githubLink: "https://github.com", // Replace with actual GitHub link
      liveLink: "#" // No live demo available
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      className="flex items-center hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
