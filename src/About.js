import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import data from "../yourdata";

class About extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginBottom: "100px" }} className="about">
        <div className="about-content">
          <h1>
            <Fade bottom cascade>
              About
            </Fade>
          </h1>
          <Fade bottom>
            <p className="mt-5">
              Coming from an international background, I've always been
              fascinated by the uniqueness and intersections between different
              cultures. Many elements of design are able to bridge the gaps
              between people all over the world, and can be powerful tools that
              foster better communication and mutual understanding. My work
              focuses either on products that attempt to bring the world
              together, or specific ideas that are inspired by the many cultures
              that exist in the world. Through my work, I hope people can
              experience a piece of my international background, and look at
              design from a more globlly-oriented persepective.
            </p>
          </Fade>
        </div>
        <img src="/me.png" alt="about image"></img>
      </div>
    );
  }
}

export default About;
