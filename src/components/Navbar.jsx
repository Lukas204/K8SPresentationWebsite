import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-container">
      <a href="#" className="nav-brand">K8s Handout</a>
      <ul className="nav-links">
        <li><a href="#official-architecture">Konzept</a></li>
        <li><a href="#architecture">Projekt-Setup</a></li>
        <li><a href="#literature">Literatur</a></li>
        <li><a href="#kaas">KaaS</a></li>
        <li><a href="#comments">Diskussion</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
