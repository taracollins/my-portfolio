import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <section id="experience" className="text-gray-400 bg-black body-font">
      <div className="container px-5 pt-10 py-10 mx-auto lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="fa-2xl mx-auto inline-block w-8 mb-8 text-blue"
          />
          <h1 className="sm:text-4xl text-3xl font-medium text-center title-font mb-4 text-white">
            Experience
          </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(85, 221, 224)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(85, 221, 224)",
              }}
              date="Jan. 2023 – Oct. 2023"
              iconStyle={{ background: "rgb(2, 43, 59)", color: "#fff" }}
            >
              <h2 className="font-bold vertical-timeline-element-title">
                Software Engineer
              </h2>
              <h4 className="vertical-timeline-element-subtitle">Zalando</h4>
              <p>Scala, Docker, Redis, DynamoDB, Postgres, Kubernetes, AWS</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2021 – Jan. 2023"
              iconStyle={{ background: "rgb(85, 221, 224)", color: "#fff" }}
            >
              <h2 className="vertical-timeline-element-title">
                Junior Software Engineer
              </h2>
              <h4 className="vertical-timeline-element-subtitle">Zalando</h4>
              <p>Scala, Docker, Redis, DynamoDB, Postgres, Kubernetes, AWS</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="March 2020 – Sept. 2020"
              iconStyle={{ background: "rgb(85, 221, 224)", color: "#fff" }}
            >
              <h2 className="vertical-timeline-element-title">
                Software Engineer
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                AdaptiveMobile Security
              </h4>
              <p> Clojure, Java, Kafka </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Sept. 2018 – May 2021"
              iconStyle={{ background: "rgb(85, 221, 224)", color: "#fff" }}
            >
              <h2 className="vertical-timeline-element-title">
                Software Engineer Tutor
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                Dublin City University
              </h4>
              <p>Python, Java, MIPS assembly language, computer architecture</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
