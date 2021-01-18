import React, { Component } from "react";
import Project from "./project";
import Fade from "react-reveal/Fade";
// import data from "../yourdata";
import HoverVideoPlayer from "react-hover-video-player";
import { Link as RouterLink } from "react-router-dom";

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
    // {
    //   id: 2,
    //   titlepart1: "Pincast — ",
    //   titlepart2: "Podcasts with an emphasis on community and education",
    //   type: "HACKATHON PROJECT",
    //   imageSrc: "pincast.png",
    //   url: "/Pincast",
    //   country: "/assets/imgs/global.png",
    // },
    {
      id: 2,
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
        <Fade bottom>
          <div className="project">
            <span
              style={{ fontSize: "20px", fontWeight: "600", color: "darkgray" }}
            >
              HACKATHON PROJECT
            </span>
            <h1 style={{ fontWeight: "bolder" }}>
              Pincast -
              <span style={{ fontWeight: "300" }}>
                Podcasts with an emphasis on community and education
              </span>
            </h1>
            <br></br>
            <br></br>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <RouterLink to="/Pincast">
                <HoverVideoPlayer
                  videoSrc="/videos/PincastVid.mp4"
                  pausedOverlay={
                    <img
                      style={{ width: "100%", borderRadius: "20px" }}
                      src="pincast.png"
                      alt=""
                    />
                  }
                  loadingOverlay={<div className="loading-spinner-overlay" />}
                  style={{
                    borderRadius: "20px",
                    border: "0.2px solid black",
                    width: "90%",
                  }}
                  videoStyle={{
                    borderRadius: "20px",
                    border: "0.2px solid black",
                  }}
                />
                {/* <img
                  style={{ borderRadius: "20px", border: "0.2px solid black" }}
                  src={this.props.imageSrc}
                  alt={this.props.title}
                ></img> */}
              </RouterLink>
              <img
                className="flag"
                style={{ maxWidth: "30%", alignSelf: "center" }}
                src="assets/imgs/global.png"
              ></img>
            </div>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Fade>
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
