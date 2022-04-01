import React, { useState } from "react";
import CustomNavLink from "../CustmNavLink/CustomNavLink";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  // const toggle = () => {
  //   document.querySelector(".menu-button").classList.toggle("open-menu");
  //   document.querySelector(".menu").classList.toggle("open");
  // };
  return (
    <div>
      <header className="header">
        <div className="main-header">
          <div className="menu-logo">
            <h2>MyFood</h2>
            <div
              className={!open ? "open-menu menu-button" : "menu-button"}
              onClick={() => setOpen(!open)}
            >
              <span className="bar-1"></span>
              <span className="bar-2"></span>
              <span className="bar-3"></span>
            </div>
          </div>
          <nav className={!open ? "open menu" : "menu"}>
            <ul className="items">
              <li className="item">
                <CustomNavLink to="/home">Home</CustomNavLink>
              </li>
              <li className="item">
                <CustomNavLink to="/about">About</CustomNavLink>
              </li>
              <li className="item">
                <CustomNavLink to="/cart">Cart</CustomNavLink>
              </li>
              <li className="item">
                <CustomNavLink to="/contact">Contact Us</CustomNavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
