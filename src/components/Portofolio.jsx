import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const projects = [
  {
    title: 'Dark Mode',
    description: 'Proyek Dark Mode Logic yang menggunakan HTML, CSS & Javascript.',
    imageUrl: '/projek/dark-mode.png',
    webUrl: 'https://www.example.com/',
    sourceCodeUrl: 'https://github.com/example/project1',
  },
  {
    title: 'Website Sederhana',
    description: 'Proyek Website Sekolah Sederhana dengan menggunakan HTML & CSS.',
    imageUrl: '/projek/school-wk.png',
    webUrl: 'https://www.example.com/',
    sourceCodeUrl: 'https://github.com/example/project2',
  },
  // Tambahkan proyek-proyek lainnya di sini
];

const Portfolio = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageUrl) => {
    setPopupImage(imageUrl);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <section id="projects" className="mt-20 mb-12 bg-slate-300 dark:bg-slate-800 p-5 rounded-md mx-2 lg:mx-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-slate-800 transform transition">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div className="mb-4 flex-shrink-0">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto cursor-pointer"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl text-sky-400 font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Deskripsi: {project.description}
                  </p>
                </div>
                <div className="flex justify-between">
                  <a
                    onClick={() => openPopup(project.imageUrl)}
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Lihat
                  </a>
                  <a
                    href={project.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded"
                  >
                    Demo
                  </a>
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popupImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative max-w-2xl mx-auto p-4">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
              onClick={closePopup}
            >
              <AiFillCloseCircle />
            </button>
            <img src={popupImage} alt="Popup" className="w-full h-auto max-h-96" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
