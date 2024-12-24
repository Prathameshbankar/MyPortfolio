import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      {/* Logo / Title */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </div>
      
      {/* Social Icons */}
      <div className="flex items-center gap-6 text-2xl">
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
        <FaFacebook />
        <button className='bg-yellow-300 rounded-lg text-black p-2 text-sm shadow-lg cursor-pointer hover:text-gray-800 '>Resume</button>
      </div>
    </nav>
  );
}

export default Navbar;
