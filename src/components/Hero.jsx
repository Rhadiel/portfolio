import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/images/aboutrad.png';
import { Typewriter } from 'react-simple-typewriter'; // Import Typewriter effect

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-20"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Rhadiel Escario</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            <span className="text-blue-600">
              <Typewriter
                words={['Aspiring Full Stack Developer', 'Passionate About Learning', 'Ready to Build Amazing Projects']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          {/* <div className="flex space-x-4">
            <a href="https://github.com/Rhadiel" className="hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rhadiel-escario-569a18225" className="hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:escariorhad@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
