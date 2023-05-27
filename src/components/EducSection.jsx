import React from 'react';

const EducSection = () => {
  return (
    <section id="education" className="mt-20 mb-12 bg-slate-300 dark:bg-slate-800 p-5 rounded-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800 dark:text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Education</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Sekolah Dasar</h3>
            <p className="mb-2">SD Negeri 3 Cicurug</p>
            <p className="text-gray-600">2013 - 2019</p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Sekolah Menengah Pertama</h3>
            <p className="mb-2">MTs. Assa'adah Cicurug</p>
            <p className="text-gray-600">2019 - 2022</p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Sekolah Menengah Kejuruan</h3>
            <p className="mb-2">SMK Wikrama Bogor</p>
            <p className="text-gray-600">2022 - 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducSection;
