import React from "react";
// import { Link } from "react-router-dom";
import home from "./HOME_FILL.png";
import Culture from "./Culture";
import { Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <a href="/home">
        <img class="icon" height="32px" src={home} padding="20px" />
      </a>

      <div class="dropdown">
        <button class="dropbtn">Culture</button>
        <div class="dropdown-content">
          <a href="/normal">The New Normal</a>
          {/* <Link to="/normal">Normal</Link> */}
          <a href="/ten">Click Bait Top 10 List Article</a>
          <a href="/trump">"I'm Thankful for Trump"</a>
          <a href="/cya">See You Next Time</a>
          <a href="/gap">Bridging the Gap</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Marketing</button>
        <div class="dropdown-content">
          <a href="/ten">Distinguishing Cultural {"&"} Universal Experiences</a>
          <a href="/ten">Merging Sci-Fi {"&"} Reality</a>
          <a href="/ten">Look Before You Cross</a>
          <a href="/ten">Revolution of Simplicity</a>
          <a href="/ten">The Chase</a>
          <a href="/ten">Innovation or Regulation</a>
          <a href="/ten">Rise of the Cyber Psychologist</a>
          <a href="/ten">Lost in the Sauce</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Travel</button>
        <div class="dropdown-content">
          <a href="/ten">Thank You</a>
          <a href="/ten">Amerikkka</a>
          <a href="/ten">nomMmmmm</a>
          <a href="/ten">Transit</a>
          <a href="/ten">SportZ</a>
          <a href="/ten">Music</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Software</button>
        <div class="dropdown-content">
          <a href="/pair">Pair Programming</a>
          <a href="/yourself">creating_yourself {">"} finding_yourself</a>
          <a href="/pain">No Pain No Gain</a>
          <a href="/fined">“I’m Just Here So I Won’t Get Fined”</a>
          <a href="/mirror">Mirror Mirror on the Wall</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
