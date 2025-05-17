import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Bharath Kumar Talasila</div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`md:flex md:space-x-6 ${isOpen ? "block mt-4" : "hidden"} md:block`}>
          <a href="#home" className="block mt-2 md:mt-0 hover:text-purple-400">Home</a>
          <a href="#about" className="block mt-2 md:mt-0 hover:text-purple-400">About</a>
          <a href="#projects" className="block mt-2 md:mt-0 hover:text-purple-400">Projects</a>
          <a href="#experience" className="block mt-2 md:mt-0 hover:text-purple-400">Experience</a>
          <a href="#skills" className="block mt-2 md:mt-0 hover:text-purple-400">Skills</a>
          <a href="#contact" className="block mt-2 md:mt-0 hover:text-purple-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
