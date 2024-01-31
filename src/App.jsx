import React from "react";

//components
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-black body-font">
    <Navbar />
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Contact />
  </main>
  );
}
