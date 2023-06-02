import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src='/MYLOGO.png' width={80} height={80} alt='logosaya'></img>
          <p className="text-gray-400">irsyadnataprawira15@gmail.com</p>
        </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-sky-500">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-sky-500">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-sky-500">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2023 Your Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
