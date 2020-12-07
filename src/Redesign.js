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
          <br />
          <h1 class="projecth1">Responsive Redesign</h1>
          <p class="text">
            <br />
            IMDb is a popular online website that acts as an online database of
            information related to films, TV shows, and other video content.
            These includes cast, production crew, plot summaries,
            ratings/reviews, and news related to the content. I chose to
            redesign IMDb's website because of it is accessible everywhere in
            the world, and fosters an online community around video
            entertainment, which is a medium that transcends diffefrent cultures
            and languages. Unlike most widely accessible community-driven
            websites though, IMDB's stood out to me as one that doesn't
            incoporate as many of the usability concepts mentioned in class.
            Hence, I felt that if designed properly, IMDb could have an even
            greater impact in bringing people together.
            <br />
            <br />
            In particular, for this project, I analyzed IMDb’s movie page, which
            is the page that shows information for one specific movie.
            <br />
            <br />I evaluated the usability of the current design of the movie
            page using three criteria: Learnability, Memorability, and
            Efficiency. I then created both lo-fi and hi-fi prototypes of a
            redesigned version of the movie page, that addresses the usability
            issues I identified. Finally, I re-created the page with my new
            design using HTML and CSS. The responsive page is redesigned for
            desktop, mobile, and tablet views.
          </p>
          <br />
          <br />
          <h2>Part 1: Preparation and Interface Selection</h2>
          <p class="text">
            Before identifying usability problems with IMDb’s movie page, I
            first wanted to survey my friends to get a sense of what parts of
            the page are typically used. I did not get the chance to survey a
            wide range of people; but I did my best to get some sort of
            understanding of what people tend to go to IMDb for. Here are the
            most common use cases I identified:
          </p>
          <ol class="list">
            <li class="bullet">Learn more about the cast</li>
            <li class="bullet">Read plot summary or synopsis</li>
            <li class="bullet">Read reviews and scan ratings</li>
            <li class="bullet">Learn about box office and budget stats</li>
            <li class="bullet">
              Read news related to favorite and recently watched movies
            </li>
          </ol>
          <p class="text">
            Next, we’ll take a look at the page and identify usability problems.
            The page I analyzed is linked below. Since the page was very long
            (lots of scrolling), I only included screenshots related to the
            common use cases I identified, since screenshooting everything would
            take up a lot of space.
          </p>

          <a
            style={{ backgroundColor: "#2e6d79" }}
            href="https://www.imdb.com/title/tt6723592/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=f9f31d04-fc22-4d12-86b4-f46e25aa2f6f&pf_rd_r=TYTRW3SWCHEVWTF6DZ8W&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=boxoffice&ref_=cht_bo_2"
            class="btn text-light table-text btn-lg"
          >
            Link to Original Website
          </a>
          <br />
          <br />
          <br />
          <br />
          <h5 className="mb-5">Original Design Screenshots:</h5>

          <div class="row text-center justify-content-center">
            <div class="col mb-5">
              <h5>Top of Page: Title and News</h5>
              <img class="headshot" src="og-1.png" />
            </div>
            <div class="col mb-5">
              <h5>Photos and Videos Sections</h5>
              <img class="headshot" src="og-2.png" />
            </div>
            <div class="col mb-5">
              <h5>Cast Section</h5>
              <img class="headshot" src="og-3.png" />
            </div>
            <div class="col mb-5">
              <h5>Summary and Synopsis Section</h5>
              <img class="headshot" src="og-4.png" />
            </div>
            <div class="col mb-5">
              <h5>User Reviews Section</h5>
              <img class="headshot" src="og-5.png" />
            </div>
            <div class="col mb-5">
              <h5>Box Office Section</h5>
              <img class="headshot" src="og-6.png" />
            </div>
          </div>
          <br />
          <br />
          <p class="text">
            Below are the usability problems I identified, categorized by the
            criteria that I evaluated the page on:
          </p>
          <br />
          <br />

          <h4>Usability Problems</h4>
        </div>

        <div class="d-flex container">
          <table class="table table-hover table-text">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Issue Type(s)</th>
                <th scope="col">Issue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Efficiency, Memorability</td>
                <td>
                  Four of the five common use cases identified (1-4) are located
                  in the same column, even though the webpage uses a two-column
                  layout. Many of the common uses cannot be found near the top
                  of the page, wihch is occupied by ads and links to unrelated
                  articles. A lot of scrolling is required to find the content
                  desired.
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Learnability, Memorability</td>
                <td>
                  There is a lack of hierarchy in terms of font. Most text,
                  whether they are headers, buttons, categories, or content, are
                  very similar in terms of font size. Headers are harder to
                  find, and thus also harder to recall for casual users as well.
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Learnability</td>
                <td>
                  There is a lack of color contrast on the header, which hinders
                  readability.
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Efficiency, Learnability</td>
                <td>
                  Related photos and videos are shown in rows, with very
                  unappealing, pixelated photos lined up as sort of a "preview".
                  These sections occupy a lot of space that forces the user to
                  scroll more to get to desired parts of the website, and the
                  preview photos definitely don't inform the users of anything.
                  Thihs is confusing for first time users, and cumbersome for
                  experienced users.
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Efficiency</td>
                <td>
                  There is an unnecessary amount of preview for the list of cast
                  members, with 15 cast members listed in a table. This takes up
                  lots of space and further adds to the scrolling issue. Also,
                  cast members are listed in credits order, which is probably
                  not what users typically want to see as part of a preview.
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Efficiency</td>
                <td>
                  The User Review section lists one full review. This might not
                  be the best use of space, since if users want to read full
                  reviews, they can go to the specific page for that.
                </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Learnability, Memorability</td>
                <td>
                  First-time or casual users may not know that the Plot Summary
                  is spoiler free, and that the Full Synopsis contains spoilers.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container">
          <h4>Accessibility</h4>
          <p class="text">
            I used WebAIM WAVE to test for any potential accessibility issues in
            the original website. There were two reoccuring themes. First, there
            were many places where there was very low contrast between text
            colors and background colors, which raises clear accessibility
            issues. Second, a lot of images didn't contain alternative text,
            which could make it hard for people who can't load images to
            interpret the website.
            <br />
            <br />I also used a screen reader to test for accessibility issues.
            Images that didn't have alternative text were obviously not read,
            which was a problem for a website which heavily relies on images to
            communicate content.
          </p>

          <h2 className="mb-5 mt-5">Part 2: Virtual Redesign</h2>

          <h4>Low-Fidelity Wire-Framing</h4>

          <p class="text">
            Here are my low-fidelity wireframes, each representing a different
            view (Desktop, mobile, tablet). I annotated the desktop version
            based on the usability problems identified above. Each of the
            annotations are labeled with the corresponding usability problem.
          </p>

          <div class="row text-center justify-content-center">
            <div class="col">
              <h5>Tablet View</h5>
              <img class="tablet" src="lofi-tablet.png" />
            </div>
            <div class="col">
              <h5>Mobile View</h5>
              <img class="mobile" src="lofi-mobile.png" />
            </div>
            <div class="col">
              <h5>Desktop View</h5>
              <img class="desktop" src="lofi-desktop.png" />
            </div>
          </div>

          <h4>High-Fidelity Prototyping</h4>

          <p class="text">
            Here are my high-fidelity prototypes. There is one for each view,
            and then an annotated version of the Desktop view. The annotations
            for the high-fidelity prototype are of HTML/CSS elements, so someone
            could produce the design without additional explanation. There are
            also annotations related to how the design changes in mobile view.
          </p>

          <div class="row text-center justify-content-center">
            <div class="col">
              <h5>Desktop View</h5>
              <img class="hifidesktop" src="hifi-desktop.png" />
            </div>
            <div class="col">
              <h5>Tablet View</h5>
              <img class="hifitablet" src="hifi-tablet.png" />
            </div>
            <div class="col">
              <h5>Mobile View</h5>
              <img class="doublephone" src="hifi-mobile.png" />
            </div>
            <div class="col">
              <h5>Annotated Desktop View</h5>
              <img class="hifiannotate" src="hifi-annotated.png" />
            </div>
          </div>
          <h4>Visual Design Style Guide</h4>

          <p class="text">
            Here is a Visual Design Style Guide I made that explains the main
            colors, typography, and reusable components in different states
            (like hover and click). My design did not have many interactive
            components, since I thought that as a database website, it wasn’t
            helpful to have many interactive components.
          </p>
          <div class="col">
            <h5>Visual Design Guide</h5>
            <img class="guide" src="guide.png" />
          </div>
          <br />
          <br />

          <h2>Part 3: Responsive Redesign</h2>

          <p class="text">
            Using my prototypes, I created the page using HTML and CSS. The link
            to the website can be found here:
          </p>

          <a
            style={{ backgroundColor: "#2e6d79" }}
            href="https://boiling-escarpment-99445.herokuapp.com/"
            class="btn text-light table-text btn-lg"
          >
            Link to Redesigned Website
          </a>

          <p class="text">
            The following are some observations I had about this redesign:
          </p>

          <ul class="list">
            <li class="bullet">
              It's harder to control layout when the dimensions in the
              in-between regions of mobile, tablet, desktop
            </li>
            <li class="bullet">
              Changing the font size initially brought out some parts of the
              website that weren't responsive
            </li>
            <li class="bullet">
              After learning flex displays, it became a lot easier to organize
              elements while ensuring they were responsive
            </li>
          </ul>

          <h2>Afterthoughts</h2>

          <p class="text">
            I really enjoyed this project. Through the strugggles of actually
            implementing my design, I feel like I now have a good grasp on
            responsive CSS. This project also made me think critically about the
            usability issues of a website that I come across quite often, which
            was quite interesting. In the future, I think it will be more
            natural for me to think about usability issues when coming across
            different websites.
          </p>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Redesign;
