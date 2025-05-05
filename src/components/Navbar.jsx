import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold">Bharath Kumar Talasila</h1>
        <ul className="flex space-x-6 text-sm font-medium">
        <li><a href="#home" className="hover:text-purple-400">Home</a></li>
  <li><a href="#about" className="hover:text-purple-400">About</a></li>
  <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
  <li><a href="#experience" className="hover:text-purple-400">Experience</a></li>
  <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
  <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}