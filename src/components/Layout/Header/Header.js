import React from "react";
import "./Header.scoped.scss";
import KrLogo from "../../assets/Images/Logo/Krishna.png";

const Header = () => {
  return (
    <header className="header ">
      <nav>
        <ul>
          <li data-code={0}><a href="#hero">About</a></li>
          <li data-code={1}><a href="#projects">Projects</a></li>
          <li data-code={2}><a href="#resume">Resume</a></li>
          <li data-code={3}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
