import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-white">
            Hey, I'm Tara -
            <br className="hidden lg:inline-block" />A Software Engineer from
            Dublin.
          </h1>
          <h4 className="title-font sm:text-s text-s mb-8 font-medium text-blue">
            Nice to meet you :)
          </h4>
          <p className="mb-8 leading-relaxed">
            I started my journey in university when I enrolled in a course
            (almost) entirely unrelated to software development. While studying
            Multimedia, I picked up a web dev module. It wasn't long before I
            transferred to study Computer Science. After graduating, I went
            straight into backend development, with a particular interest in
            functional programming languages.
          </p>
          <p className="mb-8 leading-relaxed">
            I've developed features for 50+ millions users across 25 markets for
            Zalando, Europe's leading online platform for fashion and lifestyle.
            I've worked on analytical software that provides intelligence on
            signalling security attacks within telecommunications networks for
            AdaptiveMobile Security.
          </p>
          <p className="mb-8 leading-relaxed">
            I've recently relocated to Vancouver, British Columbia, and I'm currently in search of new opportunities.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./avatar.svg"
          />
        </div>
      </div>
    </section>
  );
}
