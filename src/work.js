import React, { Component } from "react";
import Project from "./project";
import Fade from "react-reveal/Fade";
// import data from "../yourdata";

class Work extends Component {
  projects = [
    {
      id: 1,
      titlepart1: "IMDb — ",
      titlepart2: "Redesigning the movie page",
      type: "RESPONSIVE REDESIGN",
      imageSrc: "redesign.png",
      url: "/Redesign",
      country: "/assets/imgs/global.png",
    },
    {
      id: 2,
      titlepart1: "Pincast — ",
      titlepart2: "Podcasts with an emphasis on community and education",
      type: "HACKATHON PROJECT",
      imageSrc: "pincast.png",
      url: "/Pincast",
      country: "/assets/imgs/global.png",
    },
    {
      id: 3,
      titlepart1: "Shanghai Metro Top-up Machine — ",
      titlepart2: "Creating Personas",
      type: "PERSONAS AND STORYBOARDING",
      imageSrc: "personas.png",
      url: "/Personas",
      country: "/assets/imgs/china.jpg",
    },
    {
      id: 3,
      titlepart1: "Electry — ",
      titlepart2: "Designing iteratively for blue-collar workers",
      type: "ITERATIVE DESIGN",
      imageSrc: "iterative.png",
      url: "/Iterative",
      country: "/assets/imgs/germany.jpg",
    },
  ];

  state = {};
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h1 className="heading mb-5">
          <Fade bottom cascade>
            Work
          </Fade>
        </h1>
        <div className="work-content">
          {this.projects.map((project) => (
            <Project
              key={project.id}
              titlepart1={project.titlepart1}
              titlepart2={project.titlepart2}
              type={project.type}
              imageSrc={project.imageSrc}
              url={project.url}
              country={project.country}
            ></Project>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
