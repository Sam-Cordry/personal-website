// import react
import React from "react";

// import stylesheet
import "./index.css";

// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resumé from "./pages/Resumé";
import Contact from "./pages/Contact";

// import react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import fonts
import "./fonts/Rosario-Bold.ttf";
import "./fonts/Rosario-BoldItalic.ttf";
import "./fonts/Rosario-Italic.ttf";
import "./fonts/Rosario-Light.ttf";
import "./fonts/Rosario-LightItalic.ttf";
import "./fonts/Rosario-Medium.ttf";
import "./fonts/Rosario-MediumItalic.ttf";
import "./fonts/Rosario-Regular.ttf";
import "./fonts/Rosario-SemiBold.ttf";
import "./fonts/Rosario-SemiBoldItalic.ttf";

export default function App() {
  console.log(`process.env.PUBLIC_URL: ${process.env.PUBLIC_URL}`);
  return (
    <div className="app">
      <Router>
        <div className="page-content">
          <div className="content-wrap">
            <Navbar />
            <Routes>
              <Route exact path={`${process.env.PUBLIC_URL}/`} element={<About />} />
              <Route path={`${process.env.PUBLIC_URL}/projects`} element={<Projects />} />
              <Route path={`${process.env.PUBLIC_URL}/resume`} element={<Resumé />} />
              <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}