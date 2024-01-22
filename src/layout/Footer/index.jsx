import React from "react";
import logo from "../../assets/img/w_logo.png";
import "./style.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <img src={logo} alt="" />
        <p>
          Browned Butter And Brown Sugar Caramelly Goodness <br />
          Crispy Edgesthick And Soft Centers And <br />
          Melty Little Puddles
        </p>
        <div className="icons">
          <div className="box">
            <i class="fa-brands fa-facebook-f"></i>
            <h4>Facebook</h4>
          </div>
          <div className="box">
            <i class="fa-brands fa-twitter"></i>
            <h4>Twitter</h4>
          </div>
          <div className="box">
            <i class="fa-brands fa-instagram"></i>
            <h4>Instagram</h4>
          </div>
          <div className="box">
            <i class="fa-brands fa-youtube"></i>
            <h4>Youtube</h4>
          </div>
          <div className="box">
            <i class="fa-brands fa-pinterest"></i>
            <h4>Pinterest</h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
