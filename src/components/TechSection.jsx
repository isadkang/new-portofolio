import React from 'react';

const TechSection = () => {
  const technologies = ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'];

  return (
    <section id="tech" className="mb-12 bg-slate-300 dark:bg-slate-800 p-5 rounded-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center mb-8">
          Technologies Used
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="hover:-translate-y-2 transform transition bg-gray-200 dark:bg-gray-600 py-2 px-4 rounded-lg text-gray-800 dark:text-white text-sm font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechSection;
