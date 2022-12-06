import React from "react";
import img from "../img/img.jpeg";

import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={img} alt="me" />
        <h1>Hi, I am Akash Chanara</h1>
        <p>A full stack developer and like to learn new technologies </p>
      </div>
    </div>
  );
}

export default Home;
