import React from "react";
import * as emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", message: "" };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <h1 className="contact-h1 mb-5">
          <Fade bottom cascade>
            Contact Me!
          </Fade>
        </h1>
        <form className="mb-4">
          <div>
            <textarea
              onChange={this.handleChangeName}
              placeholder="Name"
              required
              value={this.state.name}
              style={{ width: "40%", height: "50px" }}
            />
          </div>
        </form>
        <form className="mb-4">
          <div>
            <textarea
              onChange={this.handleChangeEmail}
              placeholder="Email"
              required
              value={this.state.email}
              style={{ width: "40%", height: "50px" }}
            />
          </div>
        </form>
        <form className="mb-4">
          <div>
            <textarea
              onChange={this.handleChangeMessage}
              placeholder="Message"
              required
              value={this.state.message}
              style={{ width: "40%", height: "50px" }}
            />
          </div>
        </form>
        <div>
          <Button
            onClick={this.handleSubmit}
            style={{ height: "55px", alignText: "center" }}
          >
            <a> Submit </a>
          </Button>
        </div>
      </div>
    );
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "template_gea6ibd";

    this.sendFeedback(templateId, {
      message: this.state.message,
      from_name: this.state.name,
      from_email: this.state.email,
    });
  }

  sendFeedback(templateId, variables) {
    emailjs
      .send("service_65flofa", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}
