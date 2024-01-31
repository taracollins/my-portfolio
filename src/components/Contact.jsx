import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-3/4 md:w-3/4 bg-gunmetal rounded-lg overflow-hidden sm:mr-10 p-20 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Dublin,+Ireland&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <div>
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <div className="lg:w-1/2 px-1 pt-4 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-blue tracking-widest text-xs">
              EMAIL
            </h2>
            <a
              href="mailto:tarafcollins@gmail.com"
              className="text-indigo-400 leading-relaxed"
            >
              tarafcollins@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
