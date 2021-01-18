import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import data from "../yourdata";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className="heading-background">KENDRICK</h1>
        <Fade bottom>
          <div className="header-title">
            Welcome!
            <br></br>
            <p>
              I'm a software developer and a UI/UX designer passionate about
              bringing the world together through design.
            </p>
            <Link
              to="contactform"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button style={{ height: "55px", alignText: "center" }}>
                <a>Contact</a>
              </Button>
            </Link>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Header;
