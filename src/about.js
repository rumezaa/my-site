import React from "react";
import Typical from "react-typical";
import Fade from "react-reveal";
import "./styles.css";

function About() {
  return (
    <div className = "home">
      <Fade bottom>
      
      <table>
        <tr>
          <td>
      <h1 className="abt">About</h1>
      <br/>
      <h4 id="about">
        I'm a students who is passionate about coding and works to integrate
        this passion into solving real world issues!
      </h4>
      <h4>
        <a
          className="link"
          href="https://github.com/rumezaa?tab=repositories"
          target="_blank"
        >
          Github 😺|
        </a>
        <a
          className="link"
          href="www.linkedin.com/in/rumeza-fatima-899101229"
          target="_blank"
        >
          LinkedIn 💻
        </a>
      </h4>
      </td>
      <td>
        <img src={require("./img/avatar.gif")}/>
        </td>
      </tr>
      </table>
      </Fade>
    </div>
  );
}

export default About;
