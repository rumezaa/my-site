import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./nav.js";
import Home from "./home.js";
import About from "./about.js";
import Projects from "./projects.js";
import Skills from "./skills.js";
import Floater from "react-floaterjs";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div background-color="#271d46">
    <NavBar />
    <Home />

    <About />

    <Projects />

    <Skills />
  </div>,
  rootElement
);
