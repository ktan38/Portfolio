import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import data from "../yourdata";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className="heading-background">KENDRICK</h1>
        <Fade bottom>
          <div className="header-title">
            Kendrick Tan
            <br></br>
            <p>
              I'm a software developer and a UI/UX designer passionate about
              bringing the world together through design.
            </p>
            <Button style={{ height: "55px", alignText: "center" }}>
              <a href={`mailto:$hello@gmail.com`} rel="noopener noreferrer">
                Contact
              </a>
            </Button>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Header;
