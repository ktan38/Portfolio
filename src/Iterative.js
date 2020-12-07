import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Work from "./work";
import React, { Component } from "react";

class Iterative extends Component {
  render() {
    return (
      <div>
        <section data-aos="fade-up" data-aos-duration="1000" class="title">
          <h1 style={{ fontWeight: "bold" }}>
            Iterative Design of Electry (a YC '20 startup)
          </h1>
        </section>
        <section
          id="Overview"
          data-aos="fade-up"
          data-aos-duration="1000"
          class="overview"
        >
          <h2>Overview</h2>
          <div>
            <p>
              <span class="hl-yellow">
                Electry is pitched as “LinkedIn for skilled blue-collar
                workers.”
              </span>
            </p>
            <p>
              We{" "}
              <span class="hl-yellow">
                iteratively designed Electry's web interface
              </span>
              , beginning with low-fi designs and culminating in user testing.
            </p>
            <p>
              We chose Electry, because we liked the idea of exploring a
              familiar problem — finding employment — in a different industry —
              blue-collar work.
            </p>
            <p>
              As for me, I was particularly interested in Electry because it's a
              Germany-based company. Populist sentiments are not as prominent in
              Germany as they have been in other Western countries like France
              and the U.K., and I've read that a large part of that is due to
              the fact that blue collar workers in Germany are not as
              disgruntled as those in the aforementioned countries. Thus, it was
              fascinating to me that a start-up would focus on a job network
              tool specifically for blue-collar workers, since it provides a
              little insight into the importance of blue-collar workers in
              Germnay, and how they might be valued more than those in other
              countries on both a political and societal level.
            </p>
          </div>
        </section>

        <section
          id="Low-Fi"
          data-aos="fade-up"
          data-aos-duration="1000"
          class="grey"
        >
          <h4>Part 1</h4>
          <h2>Low-Fi Designs</h2>
          <p>
            Essentially,{" "}
            <span class="hl-yellow">
              Electry is a job board to connect blue-collar workers with
              companies looking to hire
            </span>{" "}
            them. Companies publish job openings on the platform, workers to
            find opportunities that match their qualifications and preferences,
            then the companies can follow-up with applicants off-platform.
          </p>
          <h3>Sketches</h3>
          <div class="grid">
            <h4 class="gr1 gc1 text-center">Design 1</h4>
            <div class="gr1 gc2 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch1-1.JPG"
                alt="first sketch set"
              />
              <span class="grid-caption">
                Home (logged in): social feed of posts
              </span>
            </div>
            <div class="gr1 gc3 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch1-2.JPG"
                alt="first sketch set"
              />
              <span class="grid-caption">
                Search Results: people/companies, connect/follow
              </span>
            </div>
            <div class="gr1 gc4 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch1-3.JPG"
                alt="first sketch set"
              />
              <span class="grid-caption">
                User Profile: about, experience, skils, stats
              </span>
            </div>

            <h4 class="gr2 gc1 text-center">Design 2</h4>
            <div class="gr2 gc2 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch2-1.jpg"
                alt="second sketch set"
              />
              <span class="grid-caption">
                Home (not logged in): register, departments, partners, etc.
              </span>
            </div>
            <div class="gr2 gc4 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch2-3.jpg"
                alt="second sketch set"
              />
              <span class="grid-caption">
                Sign Up: step-by-step progression
              </span>
            </div>
            <div class="gr2 gc3 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch2-2.jpg"
                alt="second sketch set"
              />
              <span class="grid-caption">
                Search Results: jobs, mark interested
              </span>
            </div>

            <h4 class="gr3 gc1 text-center">Design 3</h4>
            <div class="gr3 gc2 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch3-1.jpg"
                alt="third sketch set"
              />
              <span class="grid-caption">
                Home (not logged in): different user types to get started
              </span>
            </div>
            <div class="gr3 gc3 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch3-2.jpg"
                alt="third sketch set"
              />
              <span class="grid-caption">Sign Up: circular web diagram</span>
            </div>
            <div class="gr3 gc4 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch3-3.jpg"
                alt="third sketch set"
              />
              <span class="grid-caption">
                Home (logged in): profile and job search progress
              </span>
            </div>

            <h4 class="gr4 gc1 text-center">Design 4</h4>
            <div class="gr4 gc2 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch4-1.jpg"
                alt="fourth sketch set"
              />
              <span class="grid-caption">
                Home (not logged in): description, register
              </span>
            </div>
            <div class="gr4 gc3 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch4-2.jpg"
                alt="fourth sketch set"
              />
              <span class="grid-caption">
                Company POV Search: type of worker
              </span>
            </div>
            <div class="gr4 gc4 flex-col">
              <img
                class="sketch-img"
                src="./assets/imgs/sketch4-3.jpg"
                alt="fourth sketch set"
              />
              <span class="grid-caption">
                Company POV Search Results: filters, candidates
              </span>
            </div>
          </div>

          <div class="diversity-div">
            <p>Diversity across sketches:</p>
            <ul>
              <li>
                Design <span class="hl-yellow">1</span>: heavily inspired by{" "}
                <span class="hl-yellow">LinkedIn</span>, includes social aspect
                and detailed profiles
              </li>
              <li>
                Design <span class="hl-yellow">2</span>: not-signed-in Home
                page, <span class="hl-yellow">step-by-step Sign Up</span>
              </li>
              <li>
                Design <span class="hl-yellow">3</span>: different user types
                Home page, <span class="hl-yellow">web-diagram Sign Up</span>
              </li>
              <li>
                Design <span class="hl-yellow">4</span>: from a{" "}
                <span class="hl-yellow">company's point of view</span>
              </li>
            </ul>
          </div>

          <h3>Wireframes</h3>
          <div class="grid shared-grid"></div>

          <div class="grid">
            <h4 class="gr1 gc1 text-center">Shared</h4>
            <div class="gr1 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/wireframe1.png" />
              <span class="grid-caption">
                Home (not logged in): from Design 3
              </span>
            </div>
            <div class="gr1 gc3 flex-col">
              <img class="wf-img" src="./assets/imgs/wireframe2.png" />
              <span class="grid-caption">
                Home (not logged in): from Design 2
              </span>
            </div>

            <h4 class="gr2 gc1 text-center">Employee POV</h4>
            <div class="gr2 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/wireframe3.png" />
              <span class="grid-caption">
                Home (logged in): social feed of posts
              </span>
            </div>
            <div class="gr2 gc3 flex-col">
              <img class="wf-img" src="./assets/imgs/wireframe4.png" />
              <span class="grid-caption">
                Search Results: people/companies, connect/follow
              </span>
            </div>
            <div class="gr2 gc4 flex-col">
              <img class="wf-img" src="./assets/imgs/wireframe5.png" />
              <span class="grid-caption">
                User Profile: about, experience, skils, stats
              </span>
            </div>

            <h4 class="gr3 gc1 text-center">Employer POV</h4>
            <div class="gr3 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/wireframe6.png" />
              <span class="grid-caption">
                Home (not logged in): register, departments, partners, etc.
              </span>
            </div>
            <div class="gr3 gc3 flex-col">
              <img class="wf-img" src="./assets/imgs/wireframe7.png" />
              <span class="grid-caption">
                Search Results: jobs, mark interested
              </span>
            </div>
            <div class="gr3 gc4 flex-col">
              <img class="wf-img" src="./assets/imgs/wireframe8.png" />
              <span class="grid-caption">
                Company Profile: description, jobs, links
              </span>
            </div>
          </div>
        </section>

        <section id="Hi-Fi" data-aos="fade-up" data-aos-duration="1000">
          <h4>Part 2</h4>
          <h2>Hi-Fi Mockups</h2>
          <p>
            Based on the wireframes from Part 1, we created hi-fi prototypes via
            Figma.
          </p>
          <p>
            <b>Notable Design Choices:</b>
          </p>
          <ul>
            <li>
              <span class="hl-yellow">Streamlines the job search process</span>{" "}
              for both job seekers and recruiters
            </li>
            <li>
              Emphasizes <span class="hl-yellow">essential information</span>{" "}
              about each job through a{" "}
              <span class="hl-yellow">succint profile building process</span>
            </li>
            <li>
              Provides <span class="hl-yellow">personalized experience</span>{" "}
              through onboarding, exploring job openings, and expressing
              interest
            </li>
          </ul>
          <h3>Initial Mockup</h3>
          <div class="grid">
            <h4 class="gr1 gc1 text-center">Home</h4>
            <div class="gr1 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/pre_home1.jpg" />
              <span class="grid-caption">Main home page</span>
            </div>
            <div class="gr1 gc3 flex-col">
              <img class="wf-img" src="./assets/imgs/pre_home2.jpg" />
              <span class="grid-caption">Sign up page</span>
            </div>
            <div class="gr1 gc4 flex-col">
              <img class="wf-img" src="./assets/imgs/pre_login.jpg" />
              <span class="grid-caption">Login page</span>
            </div>

            <h4 class="gr2 gc1 text-center">Onboarding and Profile Building</h4>
            <div class="gr2 gc2 flex-col">
              <img
                class="wf-img"
                src="./assets/imgs/pre_onboarding_employee.jpg"
              />
              <span class="grid-caption">Employee version</span>
            </div>
            <div class="gr2 gc3 flex-col">
              <img
                class="wf-img"
                src="./assets/imgs/pre_onboarding_employer.jpg"
              />
              <span class="grid-caption">Employer version</span>
            </div>
            <div class="gr2 gc4 flex-col">
              <img class="wf-img" src="./assets/imgs/pre_modal.jpg" />
              <span class="grid-caption">Modal for each category</span>
            </div>

            <h4 class="gr3 gc1 text-center">Jobs Search</h4>
            <div class="gr3 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/pre_search_employee.jpg" />
              <span class="grid-caption">Employee version</span>
            </div>
            <div class="gr3 gc3 flex-col">
              <img class="wf-img" src="./assets/imgs/pre_search_employer.jpg" />
              <span class="grid-caption">Employer version</span>
            </div>
            <div class="gr3 gc4 flex-col">
              <img class="wf-img" src="./assets/imgs/pre_companypage.jpg" />
              <span class="grid-caption">Company profile</span>
            </div>
          </div>

          <h3>Critique Feedback</h3>
          <ol>
            <li>
              Onboarding can be done{" "}
              <span class="hl-yellow">sequentially and gamified</span>;{" "}
              <span class="hl-yellow">emphasizing progress through flow</span>{" "}
              makes it more engaging and less overwhelming
              <ul>
                <li>
                  <b>Solution:</b> show{" "}
                  <span class="hl-yellow">progress bar</span> at top, making
                  questions simple as possible
                </li>
              </ul>
            </li>
            <li>
              Onboarding modals feel <span class="hl-yellow">disconnected</span>{" "}
              from the main onboarding page
              <ul>
                <li>
                  <b>Solution:</b>{" "}
                  <span class="hl-yellow">manipulate opacity</span> to show the
                  initial screen as the background
                </li>
              </ul>
            </li>
            <li>
              <span class="hl-yellow">Unintuitive</span> that clicking a job
              posting opens the Company Profile
              <ul>
                <li>
                  <b>Solution:</b> clicking on the job title{" "}
                  <span class="hl-yellow">takes user to a modal</span> with job
                  posting details
                </li>
              </ul>
            </li>
            <li>
              <span class="hl-yellow">Unclear flow</span> after user expresses
              interest in a job
              <ul>
                <li>
                  <b>Solution:</b> <span class="hl-yellow">Save feature</span>{" "}
                  that populates jobs that the user has shared profiles to
                </li>
              </ul>
            </li>
            <li>
              <b>Overall:</b> not enough pages to communicate both types of user
              experiences clearly
              <ul>
                <li>
                  <b>Solution:</b>{" "}
                  <span class="hl-yellow">
                    focus on the experience of job-seekers only
                  </span>
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Based on the feedback, we chose to{" "}
            <span class="hl-yellow">
              <b>
                focus on employees and improve their job seeking experience.
              </b>
            </span>
          </p>

          <h3>Final Mockup</h3>
          <div class="grid">
            <h4 class="gr1 gc1 text-center">Home</h4>
            <div class="gr1 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/post_home.jpg" />
              <span class="grid-caption">Main home page</span>
            </div>
            <div class="gr1 gc3 flex-col">
              <img class="wf-img" src="./assets/imgs/post_login.jpg" />
              <span class="grid-caption">Login Page</span>
            </div>

            <h4 class="gr2 gc1 text-center">Onboarding</h4>
            <div class="gr2 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/post_onboarding1.jpg" />
              <span class="grid-caption">Profile builder</span>
            </div>
            <div class="gr2 gc3 flex-col">
              <img class="wf-img" src="./assets/imgs/post_onboarding2.jpg" />
              <span class="grid-caption">
                End of the flow, leads to personalized job results
              </span>
            </div>

            <h4 class="gr3 gc1 text-center">Jobs Search</h4>
            <div class="gr3 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/post_search_none.jpg" />
              <span class="grid-caption">Recommended jobs page</span>
            </div>
            <div class="gr3 gc3 flex-col">
              <img class="wf-img" src="./assets/imgs/post_search_full.jpg" />
              <span class="grid-caption">
                Share profile to companies of interest
              </span>
            </div>

            <h4 class="gr4 gc1 text-center">Job and Company Profile</h4>
            <div class="gr4 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/post_modal.jpg" />
              <span class="grid-caption">
                Modal of job description: shown when the job title is clicked
              </span>
            </div>
            <div class="gr4 gc3 flex-col">
              <img class="wf-img" src="./assets/imgs/post_company.jpg" />
              <span class="grid-caption">
                Company profile: opened when company name is clicked
              </span>
            </div>
            <h4 class="gr5 gc1 text-center">Saved Jobs</h4>
            <div class="gr5 gc2 flex-col">
              <img class="wf-img" src="./assets/imgs/post_myjobs.jpg" />
              <span class="grid-caption">
                My jobs page: lists all the jobs that user expressed interest
              </span>
            </div>
          </div>
          <br />
          <br />
          <a href="https://www.figma.com/proto/9zWE6x0mnCTVEiDNhrxkcu/Electry-Mockup?node-id=269%3A74&scaling=scale-down">
            Click here to check out our interative prototype!
          </a>
        </section>

        <section
          id="User Testing"
          data-aos="fade-up"
          data-aos-duration="1000"
          class="grey"
        >
          <h4>Part 3</h4>
          <h2>User Testing</h2>

          <h3>Task</h3>
          <p>
            We asked users to{" "}
            <span class="hl-yellow">complete the onboarding process</span> and{" "}
            <span class="hl-yellow">share their profile</span> with an employer
            that matched their preferences. Specifically, our instructions were:
          </p>
          <p>
            <b>Scenario:</b> You are a trained blue-collar worker looking for a
            job.
          </p>
          <ul>
            <li>
              <b>Subtask 1:</b> Sign up by{" "}
              <span class="hl-yellow">completing the onboarding process.</span>{" "}
              Be sure to answer every question in the survey.
            </li>
            <li>
              <b>Subtask 2:</b> Now that you have gotten a list of employers
              that match your preferences,{" "}
              <span class="hl-yellow">explore your recommended jobs</span> and{" "}
              <span class="hl-yellow">
                share your profile with one employer
              </span>
            </li>
          </ul>

          <h3>Post-Test Questions</h3>
          <ol>
            <li>
              Were you <b>successful</b> at completing the task? How difficult
              was it?
            </li>
            <li>
              What <b>frustrated</b> you most about this site?
            </li>
            <li>
              If you had a <b>magic wand</b>, how would you improve this site?
            </li>
            <li>
              What did you <b>like about the site</b>?
            </li>
          </ol>
          <h3>User Videos</h3>

          <div class="gr1 gc2 flex-col">
            <video class="wf-img" controls>
              <source src="./videos/Video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span class="grid-caption">User Testing Video </span>
          </div>
          {/* <div class="gr1 gc2 flex-col">
            <video class="wf-img" controls>
              <source src="./videos/Video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span class="grid-caption">User Testing Video 2</span>
          </div>
          <div class="gr1 gc2 flex-col">
            <video class="wf-img" controls>
              <source src="./videos/Video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span class="grid-caption mb-4">User Testing Video 3</span>
          </div> */}

          <h3>Analysis of Results</h3>
          <p>
            {" "}
            Based on the Tasks + Subtasks, the UserTesting results show that
            users were{" "}
            <span class="hl-yellow">
              generally able to complete the tasks without any issues.
            </span>{" "}
            The results reveal that users{" "}
            <span class="hl-yellow">
              enjoyed how the interface was simple to use
            </span>
            , concise and effectively indicated progress with visual cues.{" "}
          </p>
          <h3>Expectations </h3>
          <ul>
            <li>
              <b>Completing Profile + Sharing Profile Task:</b> Since this was
              an assigned task, we expected that the users would be able to
              complete their profile successfully, which all the users did.{" "}
            </li>
            <li>
              <b>Navigated to My Jobs Page: </b>This was not in the assigned
              task, however we expected that users would navigate to the My Jobs
              page, at least to confirm that their job application went through.
              All the users checked the “My Jobs” page once they completed the
              tasks.{" "}
            </li>
            <li>
              <b>Editing Profile:</b> We expected that users would attempt to
              edit their profile. However, only User 3 went back to edit their
              profile.{" "}
            </li>
          </ul>
          <p>
            Overall, user behaviour was{" "}
            <span class="hl-yellow">mostly in line with expectation.</span>{" "}
            Users completed tasks successfully and navigated to the “My Jobs”
            page. However,{" "}
            <span class="hl-yellow">
              not all users went back to edit their profile
            </span>{" "}
            as we expected them to.{" "}
          </p>

          <h3>Errors</h3>
          <p>
            Users{" "}
            <span class="hl-yellow">
              couldn’t always figure out how to navigate away from the “My Jobs”
              page
            </span>
            . User 3 was particularly confused by the ambiguity of which page
            clicking on the logo would take them to.{" "}
          </p>

          <h3>Future changes based on results</h3>
          <ul>
            <li>
              On the “My Jobs” page,{" "}
              <span class="hl-yellow">add a go back button</span> to navigate
              back to recommended jobs (As user 3 suggested)
            </li>
            <li>
              When editing profiling, allow users to{" "}
              <span class="hl-yellow">click between profile sections</span> (As
              user 3 suggested)
            </li>
          </ul>
        </section>

        <section id="Takeaways" data-aos="fade-up" data-aos-duration="1000">
          <h2>Takeaways</h2>
          <p>
            Overall, we learned a lot from this project. Being able to get
            feedback from a formal critique and from user testing was extremely
            important and helped us create a mockup that we are proud of.{" "}
          </p>
        </section>
      </div>
    );
  }
}

export default Iterative;
