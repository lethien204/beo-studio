import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavbarMenu } from "./navbarMenu/NavbarMenu";
import "./navbar.css";

const Navbar = ({ NavbarList, NavLayout }) => {
  const defaultLayout = NavLayout[window.location.pathname.slice(12)];

  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const [navStyle, setNavStyle] = useState(
    defaultLayout ? defaultLayout : NavLayout.home
  );

  const handleClickSetNavLayout = (e) => {
    const navChildName = e.target.name.toLowerCase();
    setNavStyle(NavLayout[navChildName]);
  };

  const textColorStyle = {
    color: window.scrollY >= 100 ? "black" : navStyle.colorCode,
    backgroundColor: window.scrollY >= 100 ? "#D9DADB" : "",
  };

  const handleClickNavHide = () => {
    setScrollTop(false);
  };

  const handleScroll = () => {
    setScrollTop(window.scrollY >= 100 ? true : false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="navbar">
      <div
        className={scrollTop ? "studio__navbar navbar__hide" : "studio__navbar"}
        style={textColorStyle}
      >
        <div className="studio__navbar-links">
          <div className="studio__navbar-links-logo">
            <Link to="/beo-studio/">
              <img
                name="logo"
                src={navStyle.logoImg}
                className="logo"
                onClick={handleClickSetNavLayout}
              />
            </Link>
          </div>
          <div className="studio__navbar-links_container">
            <NavbarMenu
              NavbarMenuList={NavbarList}
              handleClickSetNavLayout={handleClickSetNavLayout}
            />
          </div>
        </div>

        <div className="studio__navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>

        <div className="studio__navbar-menu pulse">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="studio__navbar-menu_container scale-up-menu">
              <div className="studio__navbar-menu_container-links">
                <NavbarMenu
                  NavbarMenuList={NavbarList}
                  handleClickSetNavLayout={handleClickSetNavLayout}
                />
              </div>
              <div className="studio__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {scrollTop && (
        <span className="icon">
          <RiArrowDropDownLine
            className="neon-light-border"
            size={37}
            onClick={handleClickNavHide}
          />
        </span>
      )}
    </div>
  );
};

export default Navbar;
