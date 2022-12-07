import React from "react";
import { Github } from "react-bootstrap-icons";
import projcet2 from "../img/2.PNG";
import projcet3 from "../img/home.JPG";
import projcet4 from "../img/Capture.PNG";
import projcet5 from "../img/loaaa1.png";
import projcet6 from "../img/cap2.PNG";
import projcet7 from "../img/77.PNG";
import "../styles/Project.css";
import "bootstrap/dist/css/bootstrap.css";
function Project() {
  return (
    <div>
      <div class="card-group ale">
        <div class="card aada">
          <img class="card-img-top" src={projcet2} alt="pro" />
          <a href="https://github.com/akash2040/Weather-Dashboard">
            <Github />
          </a>
          <a href="https://akash2040.github.io/Weather-Dashboard/">Deploy</a>
        </div>
        <div class="card aada">
          <img class="card-img-top" src={projcet3} alt="pro" />
          <a href="https://github.com/akash2040/project-2">
            <Github />
          </a>
          <a href="https://animeone3.herokuapp.com/">Deploy</a>
        </div>
        <div class="card aada">
          <img class="card-img-top" src={projcet4} alt="pro" />
          <a href=" https://github.com/akash2040/password-Generate-">
            <Github />
          </a>
          <a href="https://akash2040.github.io/password-Generate-/">Deploy</a>
        </div>
      </div>
      <br></br> <br></br>
      <div class="card-group ale">
        <div class="card aaba">
          <img class="card-img-top" src={projcet5} alt="pro" />
          <a href="https://github.com/akash2040/TextEditor">
            <Github />
          </a>
          <a href="https://text-editor3.herokuapp.com/">Deploy</a>
        </div>
        <div class="card aaba">
          <img class="card-img-top" src={projcet6} alt="pro" />
          <a href="https://github.com/akash2040/Code-Quiz">
            <Github />
          </a>
          <a href="https://akash2040.github.io/Code-Quiz/">Deploy</a>
        </div>
        <div class="card aaba">
          <img class="card-img-top" src={projcet7} alt="pro" />
          <a href="https://github.com/akash2040/Note_Taker-">
            <Github />
          </a>
          <a href="https://note-taker-akash.herokuapp.com/notes">Deploy</a>
        </div>
      </div>
    </div>
  );
}
export default Project;
