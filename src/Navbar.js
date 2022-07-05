import React from "react";
import "./Navbar.css"
import logo from "./logo.png"

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className = "nav">
        {/* <img src={require("./logo.png")} alt="logo" /> */}
        <img src={logo} alt="" />
        <h2 className="facts">ReactFacts</h2>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* <h2 className="facts">ReactFacts</h2>
        <h2 className="leftHeading">React Course-Project 1</h2> */}
      </nav>
    </header>
  );
};

export default Navbar;
