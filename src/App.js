import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Skill from "./componets/Skill";
import Contact from "./componets/Contact";
import Project from "./componets/Project";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Portfolio-React-/" element={<Home />} />
          <Route path="/Portfolio-React-/skill" element={<Skill />} />
          <Route path="/Portfolio-React-/contact" element={<Contact />} />
          <Route path="/Portfolio-React-/project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
