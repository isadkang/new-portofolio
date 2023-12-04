import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className="mx-2 lg:mx-16 ">
      <div className="flex items-center flex-col lg:flex-row p-20 gap-5 rounded-md bg-slate-300  dark:bg-slate-800 transform transition">
        <div className=" text-gray-800 dark:text-sky-50 flex-1">
          <h2 className="text-3xl font-extrabold text-sky-600">Muhammad Irsyad Nataprawira</h2>
          <p className="mt-4 line-clamp-6 lg:line-clamp-none">
            Halo! Perkenalkan, saya adalah seorang pelajar yang bersemangat dan berdedikasi dari SMK Wikrama Bogor. Dalam perjalanan pendidikan saya, saya telah mengeksplorasi berbagai bidang dan menemukan minat yang kuat di dunia teknologi. Saya memiliki keinginan yang besar dalam mengembangkan keterampilan pemrograman dan merancang solusi kreatif untuk masalah dunia nyata. <br></br><br></br>
            Dalam website ini, saya ingin berbagi karya-karya saya, pengalaman belajar, dan proyek-proyek yang telah saya selesaikan.
            Saya berharap dapat menginspirasi orang lain dan menciptakan dampak positif melalui teknologi. Terima kasih telah meluangkan waktu untuk mengunjungi halaman about saya. Selamat menjelajahi dan semoga Anda menemukan inspirasi di sini.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            className="mx-auto rounded-md"
            src="/foto1.jpg"
            alt="Your Photo"
            width={500}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
