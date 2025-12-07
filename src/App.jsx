import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";



export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Skills />
      <Experience />
      <Contact />
      
    </div>
  );
}
