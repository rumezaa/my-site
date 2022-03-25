import React from "react";
import "./styles.css";
import Floater from "react-floaterjs";


function Projects() {
  return (
    <div id="projects">

<div className="vl"/>

<Floater>
  <button className="img"
  style = {{top: -10}}
type="button">
  <img src={require("./img/python.png")}/>
  </button></Floater>
  
  <Floater>
  <button className="img"
  style = {{top: 170}}
type="button">
  <img src={require("./img/ij.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 340}}
type="button">
  <img src={require("./img/css.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 550}}
type="button">
  <img src={require("./img/html.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 750}}
type="button">
  <img src={require("./img/java.png")}/>
  </button></Floater>


  <Floater>
  <button className="img"
  style = {{top: 970}}
type="button">
  <img src={require("./img/react.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 1180}}
type="button">
  <img src={require("./img/js.png")}/>
  </button></Floater>



      <h2>Projects</h2>
      <br></br>

      <h3>Blu3Whale ED App</h3>
      <br />
      <br />
      <img src={require("./img/app.png")} />
      <br />
      <br />
      <h4 className="tech">
        An android app built in pure python to guide and assist those suffering
        from eating disorders. Includes progress tracking using natural langauge
        processing (NLP), realtime chat and recipe search engine
      </h4>
      <br />
      <br />
      <h4 className="tech">
        {" "}
        🎈 Using Python and Firebase <br></br>
        <a
          className="link"
          href="https://github.com/rumezaa/blu3whale_app"
          target="_blank"
        >
          Source Code 😺
        </a>
      </h4>
      <br />

      <hr className="divider"></hr>

      <br />
      <h3>BuyersClub App</h3>
      <br />
      <h4 className="tech">
        A ecommerce app using java in partner with the BuyersClub Startup
      </h4>
      <br />
      <h4 className="tech"> 🎈 (Under Development)</h4>
    </div>
  );
}

export default Projects;
