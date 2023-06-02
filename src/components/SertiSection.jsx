import React, { useState } from 'react';

const SertiSection = () => {
  const certificates = [
    {
      title: 'Belajar Bahasa Pemrograman Web',
      organization: 'Dicoding',
      date: '26 November 2022',
      image: '/sertifikat/s1.png'
    },
    {
      title: 'E-Learning Kesehatan dan Keselamatan Kerja',
      organization: 'International Labour Organization',
      date: '08 November 2022',
      image: '/sertifikat/s2.png'
    },
    {
      title: 'SQL Introduction',
      organization: 'Sololearn',
      date: '25 Januari 2023',
      image: '/sertifikat/s3.png'
    },
    {
      title: 'Responsive Web Design',
      organization: 'Sololearn',
      date: '02 Februari 2023',
      image: '/sertifikat/s4.png'
    },
    {
      title: 'PHP Development',
      organization: 'Sololearn',
      date: '28 Desember 2022',
      image: '/sertifikat/s5.png'
    },
    {
      title: 'Javascript Introdunction',
      organization: 'Sololearn',
      date: '30 Januari 2023',
      image: '/sertifikat/s6.png'
    },
    {
      title: 'HTML Introduction',
      organization: 'Sololearn',
      date: '05 Januari 2023',
      image: '/sertifikat/s7.png'
    },
    {
      title: 'Css Introduction',
      organization: 'Sololearn',
      date: '27 Januari 2023',
      image: '/sertifikat/s8.png'
    },
    // Tambahkan sertifikat-sertifikat lainnya
  ];

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCertificates = certificates.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="sertifikat" className="mt-20 mb-12 bg-slate-300 hover:bg-slate-200 dark:bg-slate-800
    dark:hover:bg-slate-700 hover:-translate-y-2 transform transition p-5
    rounded-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center mb-8">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCertificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-xl text-sky-400 font-semibold mb-2">{certificate.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Organization: {certificate.organization}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Date: {certificate.date}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-300 text-gray-800'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SertiSection;
