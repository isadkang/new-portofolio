import React from 'react';

const HeroSection = () => {
  return (
    <div className=" mt-24 flex items-center justify-center py-20 w-full">
      <div className="max-w-2xl mx-5">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-sky-600 font-semibold dark:text-sky-500">
          Hi, Selamat datang di Personal Website saya.
        </h1>
        <h2 className="text-4xl md:text-6xl mb-2 text-indigo-500 font-bold dark:text-indigo-400">
          Muhammad Irsyad Nataprawira
        </h2>
        <p className="text-md md:text-xl mb-3 text-gray-600 dark:text-gray-300">
          I'm a student from Vocational High School SMK Wikrama Bogor and majoring in Software Development.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border-transparent 
            text-base font-medium rounded-md text-white bg-indigo-500 
            hover:bg-indigo-600 md:text-md"
        >
          Go
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
