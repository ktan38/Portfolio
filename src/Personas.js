import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Work from "./work";
import React, { Component } from "react";

class Personas extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <br />
          <br />
          <br />
          <h1 class="projecth1">Personas and Storyboarding</h1>
          <br />
          <br />
          <br />
          Over 10 million people use the Shanghai subway system on an average
          workday. Thus, the Shanghai Transportation Card, which allows users to
          conveniently swipe in and out of stations, is a must-have in the city.
          Using a transportation card also means having to top-up the card,
          which brings us to the machine most commonly used for topping-up
          transportation cards in Shanghai. These machines are located in every
          subway station, and are exactly the same.
          <h3 class="mt-5 mb-5">1. Preparation and Interface Selection</h3>
          <p class="text">
            In this project, I evaluate Shanghai’s Transportation Card
            Management Machine by observing users using the machine,
            interviewing a subset of those users, creating personas based on
            these users, and then plotting the journey of one of these personas
            by illustrating a storyboard.
            <br />
            <br />
            First, let’s take a look at Shanghai’s Transportation Card
            Management Machine:
          </p>
          <img class="sketch" src="sketch.jpg" />
          <br />
          <br />
          <p class="text">
            This machine allows users to top-up their transportation cards in a
            self-service fashion. Though the machine also allows users to buy
            and return transportation cards, they are very rare use cases, and
            so I chose topping-up as the only use case for analysis. The machine
            has a message board across the top for any announcements, and a
            touch screen below the message board which allows the user to make
            selections. Below the touch screen, there is a QR code scanner for
            mobile payment, and a number keypad for entering bank information.
            Across the left, there are two slots: one for receiving receipts and
            one for inserting bank cards. Finally, on the bottom right side of
            the machine, there is a compartment with a transparent flap, which
            holds the transportation card. The flap locks itself once the top-up
            process begins and only unlocks when the process is over or is
            canceled.
            <br />
            <br />
          </p>
          <br />
          <br />
          <h3>2. Recording Observations</h3>
          <p class="text">
            I observed about 40 users using this machine, across six different
            subway stations, at different points during the day. I picked subway
            stations that varied in terms of the wealthiness of the neighborhood
            where the station was located, the crowdedness of the station, and
            how close the station was to downtown Shanghai. This was to ensure
            that I was observing people from as wide of a range of backgrounds
            as possible.
            <br />
            <br />
            I also collected data at three main times: during rush hour on the
            weekdays, during regular hours on the weekdays, and on the
            weekends/holidays, to try to run into people who were using the
            machine for varying purposes. Here were my key takeaways from my
            observations:
            <br />
            <br />
            <ul class="list">
              <li class="bullet">
                Not a single user I observed chose to use the bank card payment
                method
              </li>
              <li class="bullet">
                Though I saw a couple machines that were “Out of Service”, I
                never saw people waiting or lining up to use the machine. This
                was the case even during rush hour and on the weekends, which
                are the busiest subway hours.{" "}
              </li>
              <li class="bullet">
                Most users come to the machine after attempting to swipe into
                the station and realizing that their balance is too low
              </li>
              <li class="bullet">
                Users who spent more time on the machine often forgot/didn’t
                know where to put their transportation card. Instead of placing
                their card in the compartment, they typically tried placing it
                under the red scanner, or into the bank card slot, first.{" "}
              </li>
            </ul>
            <br />
            <br />
          </p>
          <p class="text">
            I generated the following list of questions to find out more about
            the users’ thoughts, motivations, intentions, and emotions while
            using the interface. I interviewed a total of five users. Note that
            both the questions were first written in English, but were asked in
            Chinese. The answers were given in Chinese, and then translated to
            English. Here are the questions, as well as a summary of the
            responses collected from the five interviewed users:
            <br />
            <br />
            <ol class="list">
              <li class="bullet">How often do you use the subway?</li>
              <p>
                Three of the users interviewed use the subway every day. Another
                takes the subway a couple times a month, and another came from
                another province, and thus hasn’t taken the subway in almost a
                year
              </p>
              <li class="bullet">
                How often do you use the Transportation Card Management Machine,
                and for what?
              </li>
              <p>
                The frequency ranged from every week to every couple months to
                one interviewed user being a first time user of the machine.
                They all have only used the machine to top-cup their cards.
              </p>

              <li class="bullet">What payment option do you typically use?</li>
              <p>
                All users said that they’ve only used the mobile payment method,
                since it’s by far the most common payment method throughout
                China. A couple the users laughed at the fact that a bank card
                option even existed.
              </p>
              <li class="bullet">
                What was the first thing you did when you used the machine
                today?{" "}
              </li>
              <p>
                All four users who have experience with the machine said that
                interacting with the touch screen was the first thing they did,
                since they knew that was the first part of the process. The new
                user described observing the machine first, and then attempting
                to read the instructions drawn on top.
              </p>
              <li class="bullet">
                How long did your experience with the machine take today?
              </li>
              <p>
                Three of the users said their experience lasted about 1-2
                minutes. The other two users said theirs lasted about 4-5
                minutes. The amount of time that a user spent on the machine was
                inversely correlated with the amount of experience a user had
                with the machine.{" "}
              </p>
              <li class="bullet">
                When did you realize today that you needed to use this machine?
              </li>
              <p>
                All users mentioned that they typically don’t remember needing
                to top-up their transportation cards when entering the subway
                station. They realize that their balances are too low after
                attempting to swipe into the station, and have to walk back out
                to access this machine. Two of the frequent subway users
                mentioned that this could be really irritating especially during
                rush hour, when there is sometimes a long line through the
                security checkpoint that separates the machine and the swiping
                area.{" "}
              </p>
              <li class="bullet">
                What are the main issues that you face when using the machine?{" "}
              </li>
              <p>
                An issue that multiple users brought up was the fact that the
                transportation card had to be placed inside a compartment during
                the entire process. This was something that users didn’t feel
                was very intuitive, especially since there were also two card
                slots, as well as a scanner, on the machine, which are more
                common methods of reading cards. One user mentioned that the
                instructions on the machine further complicated this issue,
                since the comic-like drawings depict the transportation card
                being inserted into a slot.
                <br />
                <br />
                One of the users mentioned that the compartment flap was at
                times an annoyance, since it would get stuck from time to time.
                This sometimes made it hard for the user to retrieve the card
                after the process.
                <br />
                <br />
                Finally, one user brought up the fact that since there is
                already so much going on on the machine, the variety of colors
                on the machine adds to the perceived complexity of the machine,
                making it feel harder to use.
              </p>
              <li class="bullet">
                If you could improve one thing about the interface, what would
                it be?
              </li>
              <p>
                One user suggested completely removing the option of bank card
                payment, because “everyone in China is most used to mobile
                payment” and because removing this option would drastically
                reduce the complexity of the machine. Another user suggested
                updating the comic-drawings on the instructions to be more
                accurate.
                <br />
                <br />
                One user felt very strongly about the compartment, criticizing
                its unintuitive “look and feel” that made the machine confusing,
                especially for new users. The user also mentioned the
                occasionally faulty compartment flap, which frustrated more
                frequent users, especially when they were in a rush.
                <br />
                <br />
                Two users mentioned moving the machine so that it is located
                after the security checkpoint, which would eliminate the
                inconvenience caused by having to walk out and back in of the
                security checkpoint after swiping and realizing that your
                transportation card doesn’t have enough funds.
              </p>
            </ol>
          </p>
          <br />
          <br />
          <h3>3. Personas</h3>
          <p class="text">
            Using the information I gathered from observations and interviews, I
            constructed two personas that represented the users I saw and spoke
            with. I constructed two four-quadrant empathy maps illustrating
            these personas. These are shown below, with accompanying
            descriptions of the personas below each empathy map.
          </p>
          <br />
          <br />
          <div class="row">
            <div class="column">
              <img class="personas" src="brian.jpg" style={{ width: "100%" }} />
            </div>
            <div class="column">
              <h4 class="text" id="brian">
                Persona 1: Busy Brian
              </h4>
              <p class="text">
                Busy Brian is a young banker working a 9-5 in Shanghai’s
                Financial District. Having grown up in the city, he is familiar
                with its subway system, and takes the subway on his way to and
                from work every weekday, during rush hour.
                <br />
                <br />
                Though Brian is familiar with the interface, he is often
                irritated by the fact that there is a security checkpoint
                between the subway’s swiping area and the transportation card
                machine. Having to walk out and back in of this checkpoint
                causes unexpected delays on his way to work, when rush hour
                often means a long line at the security checkpoint. Already
                often frustrated when using the machine to begin with, Brian
                sometimes also has to deal with the faulty compartment flap,
                which adds a couple frustrating minutes to his commute.
                <br />
                <br />
                Brian represents the frequent subway user already very familiar
                with the machine, who made up more than half of the users I
                observed and interviewed. These users prioritize speed and
                convenience. Though their familiarity with the machine lessens
                the average time they spend on it, unexpected inconveniences
                become especially irritating.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <img class="personas" src="vicky.jpg" style={{ width: "100%" }} />
            </div>
            <div class="column">
              <h4 class="text" id="vicky">
                Persona 2: Vacationing Vicky
              </h4>
              <p class="text">
                Vacationing Vicky is visiting Shanghai for the third time this
                year. Knowing that taking the subway Shanghai is the most
                convenient way to get around, Vicky remembered to bring her
                transportation card that she purchased on her last visit. She
                passes security and attempts to swipe into the station, only to
                realize that her balance is too low, and so goes to use the
                machine for the first time.
                <br />
                <br />
                Completely unfamiliar with the interface, Vicky reads the
                instructions on the machine, which seems to have very helpful
                drawings. The drawings depict a card being inserted into a slot,
                so Vicky tries inserting her transportation card in each of the
                two slots, confused to find out that her card fits in neither.
                After waving her card under the red light, hoping that the light
                meant that her card would be scanned, Vicky finally realizes
                that her card needs to go into the compartment with a
                transparent flap.
                <br />
                <br />
                Vicky represents the new or very infrequent user of this
                machine. There are over 10 million people who take the subway
                each day, and nearly each of these people have had a “first
                interaction” with the machine at some point in their life, so
                the problems that Vicky faces in this interaction with the
                machine have been faced by many. The lack of affordances guiding
                a new user to the transportation card compartment, compounded by
                the confusion caused by the bank card slots and inaccurate
                drawings in the instructions, cause new users to struggle during
                their first experience with the machine. These users may not
                necessarily prioritize efficiency and speed, but simply wish to
                learn how to use the machine as fast as possible.
              </p>
            </div>
          </div>
          <br />
          <br />
          <h3>4. Storyboarding</h3>
          <p class="text">
            Using the Vacationing Vicky persona, I used Plot to create a
            storyboard plotting Vacationing Vicky’s user journey from start to
            end.
            <br />
            <br />
            For context, Vacationing Vicky is topping-up her transportation card
            for the first time, and successfully does so after a slight
            struggle.
          </p>
          <img class="storyboard" src="Storyboard1.jpg" />
          <img class="storyboard" src="Storyboard2.jpg" />
          <br />
          <br />
          <br />
          <h3>5. Afterthoughts</h3>
          <p class="text">
            What I was most interested in about among my findings was the
            general negative attitude towards the card compartment. Placing the
            card inside a compartment unintuitive, especially next to two slots
            that seemed like they could welcome a transportation card.
            <br />
            <br />
            Some initial thoughts I had about the compartment were:
            <br />
            <br />
            <ul class="list">
              <li class="bullet">
                The scanner is the bottom of the compartment, which resembles
                how Shanghai transportation cards are scanned. Inserting the
                card into a slot would make much less sense, since that's now
                how these cards are scanned
              </li>
              <li class="bullet">
                I guess cards are put inside a locked compartment so the card
                stays in place throughout the entire transaction?{" "}
              </li>
              <li class="bullet">
                Something about the compartment being in the lower right-hand
                corner might also contribute to its "unintuitive feel". Maybe
                such an integral part of the machine should be placed closer to
                the middle?
              </li>
              <li class="bullet">
                Though this is an inconvenience for new users, I wonder how long
                this issue persists for users. Maybe this doesn't need a fix,
                since people figure it out quickly anyway after struggling the
                first time{" "}
              </li>
            </ul>
          </p>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Personas;
