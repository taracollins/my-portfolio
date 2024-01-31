import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl">
            Tara Collins
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-2xl hover:text-white">
            Projects
          </a>
          <a href="#experience" className="mr-5 text-2xl hover:text-white">
            Experience
          </a>
          <a href="#skills" className="mr-5 text-2xl hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="https://www.linkedin.com/in/tara-d-collins/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gunmetal rounded text-base mt-4 md:mt-0"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 ml-1 pr-1" />
          LinkedIn
        </a>
        <a
          href="https://github.com/taracollins"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gunmetal rounded text-base mt-4 md:mt-0"
        >
          <FontAwesomeIcon icon={faGithub} className="w-7 h-7 ml-1 pr-1" />
          GitHub
        </a>
        <a
          href="https://registry.jsonresume.org/taracollins"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gunmetal rounded text-base mt-4 md:mt-0"
        >
          <FontAwesomeIcon icon={faFile} className="w-7 h-7 ml-1 pr-1" />
          Résumé
        </a>
        <a
          href="mailto:tarafcollins@gmail.com"
          className="text-2xl inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gunmetal rounded text-blue mt-4 md:mt-0"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7 ml-1 pr-1" />
          Say Hello
        </a>
      </div>
    </header>
  );
}
