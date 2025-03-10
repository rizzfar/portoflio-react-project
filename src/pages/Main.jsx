import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ServicesPage from "../components/Servicespage";
import SkillsPage from "../components/SkillsPage";
import EducationsPage from "../components/EducationPage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/education" element={<EducationsPage/>}/>
      </Routes>
    </main>
  )
}

export default Main;