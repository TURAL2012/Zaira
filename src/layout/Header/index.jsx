import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./style.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="logodiv">
          <img src={logo} alt="" />
        </div>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Feastures</NavLink>
          <NavLink>Categories</NavLink>
          <NavLink>Contact</NavLink>
        </ul>
        <div className="icons">
          <form>
            <input type="text" placeholder="Search here ..." />
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-basket-shopping"></i>
          <p>$0.00</p>
        </div>
      </header>
    </>
  );
};

export default Header;
