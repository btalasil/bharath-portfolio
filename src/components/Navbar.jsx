import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl bg-[#101c18]/60 
        border-b border-white/10 shadow-lg
        flex items-center justify-between
        px-6 py-4
      "
    >
      {/* Logo / Name */}
      <h1 className="text-lg sm:text-xl font-bold text-white drop-shadow-sm">
        Bharath Kumar Talasila
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-white text-sm">
        <a href="#home" className="hover:text-[#8efcd7] transition">Home</a>
        <a href="#projects" className="hover:text-[#8efcd7] transition">Projects</a>
        <a href="#certifications" className="hover:text-[#8efcd7] transition">Certification</a>
        <a href="#skills" className="hover:text-[#8efcd7] transition">Skills</a>
        <a href="#experience" className="hover:text-[#8efcd7] transition">Experience</a>
        <a href="#contact" className="hover:text-[#8efcd7] transition">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            absolute top-full left-0 w-full
            bg-[#101c18]/95 backdrop-blur-xl
            shadow-lg border-b border-white/10
            flex flex-col items-start
            px-6 py-6 space-y-4
            text-white text-base
            md:hidden
          "
        >
          <a onClick={() => setOpen(false)} href="#home" className="hover:text-[#8efcd7] transition">Home</a>
          <a onClick={() => setOpen(false)} href="#projects" className="hover:text-[#8efcd7] transition">Projects</a>
          <a onClick={() => setOpen(false)} href="#certifications" className="hover:text-[#8efcd7] transition">Certification</a>
          <a onClick={() => setOpen(false)} href="#skills" className="hover:text-[#8efcd7] transition">Skills</a>
          <a onClick={() => setOpen(false)} href="#experience" className="hover:text-[#8efcd7] transition">Experience</a>
          <a onClick={() => setOpen(false)} href="#contact" className="hover:text-[#8efcd7] transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
