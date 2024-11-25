import React from "react";
import "../CSS/men.css";
import shirtImg from "../assets/images/Men/shirt.jpg";
import tshirts from "../assets/images/Men/man-wearing-t-shirt-gesturing.jpg";
import hoodies from "../assets/images/Men/hoodie1.jpg";
import jackets from "../assets/images/Men/jacket.jpg";
import accessories from "../assets/images/Men/accessories.jpg";
import blazzers from "../assets/images/Men/suit.jpg";
import { Link, Outlet } from "react-router-dom";
const Men = () => {
  return (
    <div id="men">
      <div class="parent">
        <div class="div1">
          <img src={shirtImg} alt="" /> 
          <Link to="/men/shirts"> SHIRTS</Link>
        </div>
        <div class="div2">
          <img src={tshirts} alt="" />
          <Link to="/men/tshirts"> TSHIRTS</Link>
        </div>
        <div class="div3">
          <img src={hoodies} alt="" />
          <Link to="/men/hoodies"></Link>
          HOODIES
        </div>
        <div class="div5">
          <img src={jackets} alt="" />
         <Link to="/men/jackets">JACKETS</Link>
        </div>
        <div class="div6">
          <img src={accessories} alt="" />
         <Link to="/men/accessories">ACCESSORIES</Link>
        </div>
        <div class="div7">
          <img src={blazzers} alt="" />
          <Link to="/men/blazzers">BLAZZERS</Link>
        
        </div>
      </div>
    </div>
  );
};

export default Men;
