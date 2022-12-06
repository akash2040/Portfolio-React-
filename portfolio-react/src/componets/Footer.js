import React from "react";
import "../styles/Footer.css";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Medium } from "react-bootstrap-icons";
function Footer() {
  return (
    <div className="footer">
      <div id="icon1 ">
        <a href="https://github.com/akash2040">
          <Github />
        </a>

        <a href="https://www.linkedin.com/in/akash-chanara-087b531ab">
          <Linkedin />
        </a>

        <a href="https://medium.com/@akashchanara">
          <Medium />
        </a>
      </div>
    </div>
  );
}

export default Footer;
