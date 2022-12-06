import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Skill from "./componets/Skill";
import Contact from "./componets/Contact";
import Project from "./componets/Project";
import Navbar from "./componets/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
