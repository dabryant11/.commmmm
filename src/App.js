import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Culture from "./Culture";
import Trump from "./Trump";
import Cya from "./Cya";
import Ten from "./Ten";
import Gap from "./Gap";
import Normal from "./Normal";
import Home from "./Home";
import Pain from "./Pain";
import Mirror from "./Mirror";
import Fined from "./Fined";
import Yourself from "./Yourself";
import PairProgramming from "./PairProgramming";
import { Switch, Route, Link, Router, BrowserRouter } from "react-router-dom";

// import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/normal">
            <Normal />
          </Route>
          <Route path="/ten">
            <Ten />
          </Route>
          <Route path="/trump">
            <Trump />
          </Route>
          <Route path="/cya">
            <Cya />
          </Route>
          <Route path="/pair">
            <PairProgramming />
          </Route>
          <Route path="/gap">
            <Gap />
          </Route>
          <Route path="/gap">
            <Gap />
          </Route>
          <Route path="/gap">
            <Gap />
          </Route>
          <Route path="/fined">
            <Fined />
          </Route>
          <Route path="/yourself">
            <Yourself />
          </Route>
          <Route path="/mirror">
            <Mirror />
          </Route>
          <Route path="/pain">
            <Pain />
          </Route>
        </Switch>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
