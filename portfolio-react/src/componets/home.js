import React from "react";
import img from "../img/img.jpeg";
import { Mortarboard } from "react-bootstrap-icons";

import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={img} alt="me" />
        <h1>Hi, I am Akash Chanara</h1>
        <p>A full stack developer and like to learn new technologies </p>
      </div>
      <h1>Education</h1>
      <div className="school"></div>

      <p>
        <Mortarboard /> -- Bachelor in Information technology ---- University of
        Wolverhampton(UK)
      </p>

      <p>
        <Mortarboard />
        -- High School ------ Kathmandu Bernhardt Secondary School
      </p>

      <p>
        <Mortarboard />
        -- Coding Booting Camp ---- uc berkeley extension
      </p>
    </div>
  );
}

export default Home;
