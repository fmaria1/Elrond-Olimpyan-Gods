import React, { useState } from "react";
import SocialLinks from "../../../Constants/SocialLinks";
import eogLogo from "../../../Images/logoText";
import { ReactComponent as MenuIcon } from "./menu.svg";
import { ReactComponent as CloseMenu } from "./x.svg";
import "./NavbarComponent.css";

const NavbarComponent = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header-nav">
      <div className="content-nav">
        <div className="logo-container">
          <a href="#home">
            <img src={eogLogo} alt="" />
          </a>
        </div>
        <ul className="social-container">
          <li className="navbar-socials" onClick={closeMobileMenu}>
            <SocialLinks data={props.data.socials} />
          </li>
        </ul>
        <ul className={click ? "nav-options-active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#home">{props.data.menu.menu_1}</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#roadmap">{props.data.menu.menu_2}</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#utility">{props.data.menu.menu_3}</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#useOfFunds">{props.data.menu.menu_4}</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#faq">{props.data.menu.menu_5}</a>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default NavbarComponent;
