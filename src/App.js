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
import { Switch, Route, Link, Router } from "react-router-dom";

// import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Footer />
      <Culture />
      {/* <Trump />
      <Cya />
      <Ten />
      <Gap /> */}
      <Normal />

      {/* <Router>
        <Switch>
          <Route exact path="/culture">
            <Culture />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
