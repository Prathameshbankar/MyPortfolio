import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      {/* Logo / Title */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 text-2xl">
        <a href="https://www.linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.github.com" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
