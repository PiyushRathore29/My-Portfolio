// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>Home</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</ScrollLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </nav>
  );
}

export default Navbar;
