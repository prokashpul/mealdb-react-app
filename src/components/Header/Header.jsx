import React from "react";
import "./Header.css";

const Header = () => {
  const toggle = () => {
    document.querySelector(".menu-button").classList.toggle("open-menu");
    document.querySelector(".menu").classList.toggle("open");
  };
  return (
    <div>
      <header className="header">
        <div className="menu-logo">
          <h2>MyFood</h2>
          <div className="menu-button" onClick={toggle}>
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
          </div>
        </div>
        <nav className="menu">
          <ul className="items">
            <li className="item">
              <a href="/home">Home</a>
            </li>
            <li className="item">
              <a href="/home">About</a>
            </li>
            <li className="item">
              <a href="/home">Shop</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
