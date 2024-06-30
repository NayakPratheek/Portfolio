import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./component/js/Navbar.jsx";
import Home from "./component/js/Home.jsx";
import About from "./component/js/About.jsx";
import Skills from "./component/js/Skills.jsx";
import Project from "./component/js/Project.jsx";
import Connect from "./component/js/Connect.jsx";
function App() {
  return (
    <>
      <div className="navbar">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/projects" element={<Project />}></Route>
            <Route path="/connect" element={<Connect />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
