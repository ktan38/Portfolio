import React, { Component } from "react";
import Project from "./project";
import Fade from "react-reveal/Fade";
// import data from "../yourdata";
import { Link, animateScroll as scroll } from "react-scroll";

class ScrollButton extends Component {
  state = {};
  render() {
    return (
      <Link
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        className="link"
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img
          style={{
            width: "7%",
            height: "7%",
            alignSelf: "center",
            marginTop: "180px",
          }}
          src="/assets/imgs/scroll-down.jpg"
        ></img>
      </Link>
    );
  }
}

export default ScrollButton;
