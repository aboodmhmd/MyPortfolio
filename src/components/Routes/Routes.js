import React from "react";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Home from "../../pages/home/Home";
import Resume from "../../pages/resume/Resume";
import Contact from "../../pages/contact/contact";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function Motion() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Motion;
