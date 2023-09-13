import './App.css';
import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> 
        <Route path="/" exact element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/skills"  element={<Skills />} />
        <Route path="/portfolio"  element={<Portfolio />} />
        <Route path="/resume"  element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
