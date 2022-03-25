import React from "react";
import {useState} from "react";
import Floater from "react-floaterjs";
import "./styles.css"


function Skills() {
  const skill=[
    "python",
    "java",
    "javascript",
    "CSS",
    "HTML",
    "SQL",
    "NoSQL",
    "Node",
    "Pandas",
    "Numpy",
    "SKlearn",
    "React"
  ];

    const [count, choose_count] = useState(0);


    function increase(){
      choose_count(count+1);
      if(count==11){
      choose_count(count-11); 
      }
    }



  return (
    <div className="filler" id="Skills">
      
      <hr className="divider"/>
      <br/>
     <h1 id="skill">{skill[count]}</h1>
      <br/>
      <hr className="divider"/>

      


      <Floater>
        <button id="button"
      type="button"
        onClick={increase}>🚀</button></Floater>

    </div>
  );
}

export default Skills;
