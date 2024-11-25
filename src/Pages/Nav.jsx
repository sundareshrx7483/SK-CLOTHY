import React from "react";
import "../CSS/Nav.css";
import {
 
  Link,
 
} from "react-router-dom";
import Logo from "../assets/images/Men/t-shirt.gif";

import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { HiSearch } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";

const Nav = () => {
  return (
    <div id="nav">
      <div id="mainHome">
        <div className="links">
          <Link id="link" to="/">
            <img src={Logo} alt="" height={"50px"} width={"50px"} />
          </Link>
          <Link id="link" to="/men">
            MENS
          </Link>
          <Link id="link" to="/women">
            WOMENS
          </Link>
          <Link id="link" to="/kids">
            KIDS
          </Link>

          <Link id="link" to="/sports">
            SPORTS
          </Link>
        </div>
        <div className="icons">
          <div className="searchIcon">
            <input
              id="searchInput"
              name="search"
              type="text"
              placeholder="Search"
            />
            <HiSearch name="search" id="searchsvg" />
          </div>
          <div className="sideIcons">
            <Link to="/signin">
              {/* <PiUserBold id="user" style={{ height: "20px", width: "20px" }} /> */}
              {/* <TiUser id="user" style={{ height: "20px", width: "20px" }} ></TiUser> */}
              <FiUser
                id="user"
                style={{ height: "20px", width: "20px" }}
              ></FiUser>
            </Link>
            <Link to="/signup">
              {/* <AiOutlineUserAdd  ></AiOutlineUserAdd> */}
              <FiUserPlus
                id="user"
                style={{ height: "20px", width: "20px" }}
              ></FiUserPlus>
            </Link>

          
            <Link to="/cart">
              <PiShoppingCartBold
                id="cart"
                style={{ height: "20px", width: "20px" }}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <div id="Outlet">
      <Outlet></Outlet>
      </div> */}
    </div>
  );
};

export default Nav;
