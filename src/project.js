import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Link as RouterLink } from "react-router-dom";

class Project extends Component {
  state = {};
  render() {
    return (
      <Fade bottom>
        <div className="project">
          <span
            style={{ fontSize: "20px", fontWeight: "600", color: "darkgray" }}
          >
            {this.props.type}
          </span>
          <h1 style={{ fontWeight: "bolder" }}>
            {this.props.titlepart1}
            <span style={{ fontWeight: "300" }}>{this.props.titlepart2}</span>
          </h1>
          <br></br>
          <br></br>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <RouterLink to={this.props.url}>
              <img
                style={{ borderRadius: "20px", border: "0.2px solid black" }}
                src={this.props.imageSrc}
                alt={this.props.title}
              ></img>
            </RouterLink>
            <img
              className="flag"
              style={{ maxWidth: "30%", alignSelf: "center" }}
              src={this.props.country}
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
    );
  }
}

export default Project;
