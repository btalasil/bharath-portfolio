import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <h1 className="text-xl font-bold">Bharath Kumar Talasila</h1>
      <div className="space-x-6">
        <a href="#home" className="hover:text-purple-400">Home</a>
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#experience" className="hover:text-purple-400">Experience</a>
        <a href="#skills" className="hover:text-purple-400">Skills</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>
    </nav>
  );
}
