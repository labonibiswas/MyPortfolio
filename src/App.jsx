import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import ProjectV1 from "./components/projectV1.jsx";
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
          <Route path="/resume" element={<Resume pdfUrl="LABONI_BISWAS_resume_without_phone_no.pdf" />} />
          <Route path="/projects" element={<ProjectV1 />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;


