import React from "react";
import "./styles.css";
import Pdf from "./rumezaResume.pdf";

function NavBar() {
  return (
    <div>
      <ul id="nav">
        <li>
          <a href="#Home">Rumeza's Portfolio</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href={Pdf} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
