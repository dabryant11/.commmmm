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
import Thanks from "./ThankYou";
import Amerikkka from "./Amerikkka";
import Nom from "./Nom";
import Transit from "./Transit";
import Sportz from "./Sportz";
import Music from "./Music";
import Experiences from "./Experiences";
import Reality from "./Reality";
import Cross from "./Cross";
import Simplicity from "./Simplicity";
import Chase from "./Chase";
import Regulate from "./Regulate";
import Psychologist from "./Psychologist";
import Sauce from "./Sauce";
import { Switch, Route, Link, Router, BrowserRouter } from "react-router-dom";

// import "./App.css";

function App() {
  return (
    <div>
      <Header />

      {/* <Home /> */}
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
          <Route path="/thanks">
            <Thanks />
          </Route>
          <Route path="/amerikkka">
            <Amerikkka />
          </Route>
          <Route path="/nom">
            <Nom />
          </Route>
          <Route path="/transit">
            <Transit />
          </Route>
          <Route path="/sportz">
            <Sportz />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/experiences">
            <Experiences />
          </Route>
          <Route path="/reality">
            <Reality />
          </Route>
          <Route path="/cross">
            <Cross />
          </Route>
          <Route path="/simplicity">
            <Simplicity />
          </Route>
          <Route path="/chase">
            <Chase />
          </Route>
          <Route path="/regulate">
            <Regulate />
          </Route>
          <Route path="/psychologist">
            <Psychologist />
          </Route>
          <Route path="/sauce">
            <Sauce />
          </Route>
        </Switch>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
