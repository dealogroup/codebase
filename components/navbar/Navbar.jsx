import React from "react";
import { Component } from "react";
import images from "/Users/user/Desktop/dealo-app/dealo-app/src/assets/index.js";
import { Link } from "react-router-dom";
import { MenuItems } from "../menuItem/MenuItem";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="main-nav">
          <img src={images.logo} alt="logo" className="logo" />
          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
            {/* <i class="fa-solid fa-xmark"></i> */}
          </div>
          <ul className={this.state.clicked ? "main-nav.active" : "nav-menu"}>
            {MenuItems.map((item, index) => (
              <li key={index}>
                <a href={item.path} className={item.className}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            ))}
            <button className="button">Signup</button>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
