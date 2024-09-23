import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Certifications from './components/pages/Certifications';
import Home from './components/pages/Home';
import Navbar from './components/navbar/Navbar';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <Router baseName = "website" >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/Certifications" element={<Certifications />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
