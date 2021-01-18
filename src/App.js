import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Work from "./work";
import Redesign from "./Redesign";
import Personas from "./Personas";
import Iterative from "./Iterative";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollButton from "./ScrollButton";
import Pincast from "./Pincast";
import ScrollToTop from "./ScrollToTop";
import Form from "./Form";
import { init } from "emailjs-com";

function App() {
  init("user_1Ip5uVuHpO9ECnizYa166");
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/Redesign" component={Redesign} />
          <Route path="/Personas" component={Personas} />
          <Route path="/Iterative" component={Iterative} />
          <Route path="/Pincast" component={Pincast} />
          <div className="App container">
            <div className="topbar">
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Kendrick Tan
              </p>
              <Navbar></Navbar>
            </div>
            <div className="App-header mt-5">
              <Header></Header>
              <ScrollButton></ScrollButton>
            </div>
            <div className="About">
              <About></About>
            </div>
            <div className="work">
              <Work></Work>
            </div>
            <div className="contactform">
              <Form></Form>
            </div>
          </div>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
