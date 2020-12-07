import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Work from "./work";
import React, { Component } from "react";

class Redesign extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <br />
          <br />
          <h1 class="projecth1">Pincast - Hackathon Project</h1>

          <h2 className="mb-5 mt-5">Inspiration</h2>
          <p class="text">
            As avid podcast listeners, especially in the times of COVID-19, my
            team and I identified two main problems with the current podcast
            experience:
          </p>
          <ol class="list">
            <li class="bullet">
              Though a lot of users we know seem to listen to podcasts for an
              educational experience, the nature of how the audio files are
              presented makes it hard for users to actually reflect on and
              engage with the content that they consume. Once the podcast is
              over, there’s no way for users to remember key facts, book
              recommendations, big ideas, and even funny jokes from the podcast.{" "}
            </li>
            <li class="bullet">
              Podcasts feel quite intimate, and that’s one of the best parts
              about listening to them. However, with the lack of spaces for
              podcast communities, it becomes hard for listeners to respond to
              the podcasters, given feedback, and engage with other community
              members. Even though the listening part feels intimate, there’s no
              place to further that connection with the community after the
              podcast is over.
            </li>
          </ol>

          <h2 className="mb-5 mt-5">Idea</h2>

          <p class="text">
            To address the problems explained above, we created Pincast. Pincast
            uses Google Speech-to-Text api to transcribe audio recording between
            multiple speakers to get the entire conversation in a text format
            with start and end times marked for each word. Furthermore, the
            diarization API also marks different speakers and the MeaningCloud
            topic response API finds key words in the conversation and provides
            categorization for key words. Utilizing the information provided by
            the aforementioned APIs and a combination of a dynamic front end, we
            are able to allow the user to pin different parts of the podcast.
            These pins provide the user the ability to go back and reflect,
            discuss, and learn about the different concepts talked about in the
            podcasts.
          </p>

          <h2 className="mb-5 mt-5">Design</h2>

          <p class="text">
            Since it was hackathon project, we didn’t have time to work on
            low-fidelity wireframes. We also didn’t have time to design
            iteratively, so we jumped straight into our high-fidelity prototype
            for both mobile and desktop browser. Here were our prototypes:
          </p>
          <div class="row text-center justify-content-center">
            <div class="col mb-5">
              <h5>Mobile Podcast Page</h5>
              <img
                class="mobile"
                src="/assets/imgs/pincast-mobile-episodes.jpg"
              />
            </div>
            <div class="col mb-5">
              <h5>Mobile Reflection Page</h5>
              <img
                class="mobile"
                src="/assets/imgs/pincast-mobile-reflection.jpg"
              />
            </div>
            <div class="col mb-5">
              <h5>Mobile Live Page</h5>
              <img class="mobile" src="/assets/imgs/pincast-mobile-live.jpg" />
            </div>
          </div>
          <div class="row text-center justify-content-center">
            <div class="col mb-5">
              <h5>Desktop Home Page</h5>
              <img
                class="desktop"
                src="/assets/imgs/pincast-desktop-home.jpg"
              />
            </div>
            <div class="col mb-5">
              <h5>Desktop Listening Page</h5>
              <img
                class="desktop"
                src="/assets/imgs/pincast-desktop-listen.jpg"
              />
            </div>
          </div>

          <p class="text">
            In the future, we hope to come back to this project, and work on the
            following:
          </p>

          <ul class="list">
            <li class="bullet">
              Conduct user interviews to identify what features would better the
              podcast experience
            </li>
            <li class="bullet">
              Create low-fidelity wireframes to makes sure said features
              consistently displayed within our app
            </li>
            <li class="bullet">
              Conduct user-testing after an iteration of high-fidelity
              prototypes, and make changes to our design based on feedback
            </li>
            <li class="bullet">
              Make sure our features directly address the two main problems we
              defined above
            </li>
          </ul>

          <h2 className="mb-5 mt-5">Final Product</h2>
          <h4>Tech used</h4>
          <p class="text">
            Python, Google Cloud Speech to Text API, MeaningCloud API,
            BeautifulSoup, Flask, Express.JS, MongoDB, React, Figma,
            AfterEffects
          </p>
          <br />
          <h4>Links</h4>

          <p class="text">
            Here is a link to a Youtube video that further explains the
            technology we used, and also demos our product:
          </p>

          <a
            style={{ backgroundColor: "#2e6d79" }}
            href="https://www.youtube.com/watch?v=CEmAggG7AzM"
            class="btn text-light table-text btn-lg"
          >
            Link to Youtube Video
          </a>
          <br />
          <br />
          <br />

          <p class="text">And here's a link to our Github Repository</p>

          <a
            style={{ backgroundColor: "#2e6d79" }}
            href="https://github.com/chrislh9000/yhack-2020-react/"
            class="btn text-light table-text btn-lg"
          >
            Link to Github Repo
          </a>
          <br />
          <br />
          <br />
          <h4>What's next for Pincast</h4>
          <p class="text">
            In addition to the points listed under the Design section above, we
            hope to develop a version of the app on mobile as that’s where a lot
            of individuals listen to podcasts. Additionally, we hope to improve
            the community-aspect of the app, allowing for a greater degree of
            knowledge sharing (sharing pins, the ability to see the pins of
            other users).
          </p>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Redesign;
