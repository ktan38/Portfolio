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

function App() {
  return (
    <Router>
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
        </div>
      </Switch>
    </Router>
  );
}

export default App;
