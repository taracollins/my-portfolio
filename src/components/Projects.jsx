import React from "react";
import { projects } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-100">
        <div className="flex flex-col w-full mb-20">
        <FontAwesomeIcon
            icon={faCode}
            className="fa-2xl mx-auto inline-block w-9 mb-8 text-blue"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Personal Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A short but sweet section that is currently under construction.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-10 py-40 relative z-10 w-full border-4 border-blue bg-gunmetal opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
