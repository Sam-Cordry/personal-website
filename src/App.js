import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './pages/About';
import Projects from './pages/Projects';
import Resumé from './pages/Resumé';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resumé />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}