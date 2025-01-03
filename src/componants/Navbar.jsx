import React from "react";
import { FaLinkedin, FaGithub, FaInstagram,FaTwitter  } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </div>
        <div className="flex items-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/prathameshbankar/" target="_blank" className="text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com" target="_blank" className="text-red-600">
          <FaInstagram />
        </a>
        <a href="https://github.com/Prathameshbankar" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/BankarPratham45" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
