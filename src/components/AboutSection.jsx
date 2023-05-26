import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800
    dark:hover:bg-slate-700 hover:-translate-y-2 transform transition p-5
    rounded-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 text-gray-800 dark:text-sky-50">
            <h2 className="text-3xl font-extrabold text-sky-600">Muhammad Irsyad Nataprawira</h2>
            <p className="mt-4">
                Halo! Perkenalkan, saya adalah seorang pelajar yang bersemangat dan berdedikasi dari SMK Wikrama Bogor. Dalam perjalanan pendidikan saya, saya telah mengeksplorasi berbagai bidang dan menemukan minat yang kuat di dunia teknologi. Saya memiliki keinginan yang besar dalam mengembangkan keterampilan pemrograman dan merancang solusi kreatif untuk masalah dunia nyata. <br></br><br></br>
              Dalam website ini, saya ingin berbagi karya-karya saya, pengalaman belajar, dan proyek-proyek yang telah saya selesaikan. 
              Saya berharap dapat menginspirasi orang lain dan menciptakan dampak positif melalui teknologi. Terima kasih telah meluangkan waktu untuk mengunjungi halaman about saya. Selamat menjelajahi dan semoga Anda menemukan inspirasi di sini.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <img
              className="mx-auto rounded-md h-50 w-50"
              src="../../public/foto1.jpg"
              alt="Your Photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
