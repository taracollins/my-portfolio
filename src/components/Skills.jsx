import React from "react";
import { skills } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faCertificate } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
        <FontAwesomeIcon
            icon={faMicrochip}
            className="fa-2xl mx-auto inline-block w-8 mb-8 text-blue"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            To give you an idea of some of the technologies I've worked with.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gunmetal rounded flex p-4 h-full items-center">
                <FontAwesomeIcon icon={faCertificate} className="text-blue w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
