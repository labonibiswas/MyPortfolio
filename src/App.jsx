import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Projects from "./components/project.jsx";
import HeroSection from "./components/HeroSection";
import Footer from "./components/end";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/resume" element={<Resume pdfUrl="/Resume.pdf" />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;


