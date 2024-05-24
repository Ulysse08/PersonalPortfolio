import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/404";
import ValeoPage from "./pages/ValeoPage";
import DigitalKornerPage from "./pages/DigitalKornerPage";
import EpitechPage from "./pages/EpitechPage";
import NeomaPage from "./pages/NeomaPage";


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/valeo-internship" element={<ValeoPage />} />
          <Route path="/about/digital-korner-internship" element={<DigitalKornerPage />} />
          <Route path="/about/neoma-projects" element={<NeomaPage />} />
          <Route path="/about/epitech-projects" element={<EpitechPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
