import React from "react";
import Typical from "react-typical";
import { FallingEmojis } from "falling-emojis";
import "./styles.css";

function Home() {
  return (
    <div className="home">
      <FallingEmojis emoji={"✨"} />
      <h1>👋</h1>
      <br />
      <h1>
        <u>I'm Rumeza</u>
      </h1>
      <h2 id="intro"> fullstack developer</h2>
      <br />
      <br />
      <h3 id="type">
        I can code
        <Typical
          steps={[
            "Java",
            1000,
            "Python",
            1000,
            "Javascript",
            1000,
            "for you :)"
          ]}
        />
      </h3>
    </div>
  );
}

export default Home;
