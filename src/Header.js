import React from "react";
import home from "./HOME_FILL.png";
import Culture from "./Culture";
import { Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <a href="/home">
        <img
          class="icon"
          height="32px"
          src={home}
          style={{ marginBottom: "-10px", marginLeft: "10px" }}
        />
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
          <a href="/experiences">
            Distinguishing Cultural {"&"} Universal Experiences
          </a>
          <a href="/reality">Merging Sci-Fi {"&"} Reality</a>
          <a href="/cross">Look Before You Cross</a>
          <a href="/simplicity">Revolution of Simplicity</a>
          <a href="/chase">The Chase</a>
          <a href="/regulate">Innovation or Regulation</a>
          <a href="/psychologist">Rise of the Cyber Psychologist</a>
          <a href="/sauce">Lost in the Sauce</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Travel</button>
        <div class="dropdown-content">
          <Link to="/thanks"> Thank You</Link>
          {/* <a href="/thanks">Thank You</a> */}
          <a href="/amerikkka">Amerikkka</a>
          <a href="/nom">nomMmmmm</a>
          <a href="/transit">Transit</a>
          <a href="/sportz">SportZ</a>
          <a href="/music">Music</a>
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
      <div class="dropdown">
        <button class="dropbtn">Resume</button>
        <div class="dropdown-content">
          <a
            href="https://drive.google.com/file/d/1cnpZmagYbZo5DtfMnPkllCipPpzMxZvQ/view?ts=60921b91"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
