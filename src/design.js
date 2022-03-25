import Floater from "react-floaterjs";
import React from "react";
import "./styles.css";

function DesignElement(){
  return(
  <div>
  <div className="vl"/>

<Floater>
  <button className="img"
  style = {{top: 10}}
type="button">
  <img src={require("./img/python.png")}/>
  </button></Floater>
  
  <Floater>
  <button className="img"
  style = {{top: 200}}
type="button">
  <img src={require("./img/ij.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 360}}
type="button">
  <img src={require("./img/css.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 570}}
type="button">
  <img src={require("./img/html.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 800}}
type="button">
  <img src={require("./img/sql.png")}/>
  </button></Floater>


  <Floater>
  <button className="img"
  style = {{top: 1020}}
type="button">
  <img src={require("./img/react.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 1200}}
type="button">
  <img src={require("./img/js.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 1450}}
type="button">
  <img src={require("./img/mongo.png")}/>
  </button></Floater>

  <Floater>
  <button className="img"
  style = {{top: 1650}}
type="button">
  <img src={require("./img/java.png")}/>
  </button></Floater>

  </div>
  );
}


  export default DesignElement;