import React from "react";
import "../styles/Skill.css";
import img3 from "../img/img3.webp";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img7 from "../img/img7.png";
import img8 from "../img/img8.png";
import img9 from "../img/img9.webp";
import img10 from "../img/img10.png";
import resume from "../img/Akash_Chanara_Resume .pdf";

function Skill() {
  return (
    <div className="skill">
      <div className="resume">
        <a href={resume} download="Akash_Chanara_Resume .pdf">
          Click here download Resume
        </a>
      </div>
      <div className="list">
        <div>Python</div>
        <div>Java </div>
        <div>Visual Studio</div>
        <div> Android Studio</div>
        <div> MySQL</div>
        <div>HTML/CSS </div>
        <div>Hadoop</div>
        <div>CUDA</div>
        <div>Moment.js</div>
        <div>Bootstrap</div>
        <div>Node.js</div>
        <div>MS Visio</div>
        <div>Ubuntu</div>
        <div>Oracle</div>
        <div>JavaScript</div>
        <div> Fetch/Ajax</div>
        <div>Unit Testing/Jest </div>
        <div>Server side</div>
        <div>API</div>
        <div>ES6</div>
        <div>Microsoft Office</div>
        <div>MongodB</div>
        <div>REST API </div>
        <div>Express</div>
        <div>Heroku</div>
        <div>Git/GitHub</div>
        <div>GrapghQl</div>
        <div>Third party API</div>
        <div>Relational Database jQuery</div>
      </div>
      <div className="imgall">
        <img src={img3} alt="me" />
        <img src={img4} alt="me" />
        <img src={img5} alt="me" />
        <img src={img6} alt="me" />
        <img src={img7} alt="me" />
        <img src={img8} alt="me" />
        <img src={img9} alt="me" />
        <img src={img10} alt="me" />
      </div>
    </div>
  );
}

export default Skill;
