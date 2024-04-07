import React, { useEffect } from "react";
import "../vendors/styles/core.css";
import "../vendors/styles/nav.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDown,
  faAngleRight,
  faArrowDown,
  faHeart,
  faHouse,
  faMessage,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Dp from "../vendors/images/photo4.jpg";
import a from "../vendors/images/a.jpg"
import { AuthService } from "../../services/AuthService";

const NavBar: React.FC = () => {
  useEffect(() => {
    const menuOpen = document.querySelector(".menu");
    const menuClose = document.querySelector(".close");
    const overlay = document.querySelector(".overlay");

    const handleMenuOpen = () => {
      if (overlay) {
        overlay.classList.add("overlay--active");
      }
    };

    const handleMenuClose = () => {
      if (overlay) {
        overlay.classList.remove("overlay--active");
      }
    };

    if (menuOpen) {
      menuOpen.addEventListener("click", handleMenuOpen);
    }

    if (menuClose) {
      menuClose.addEventListener("click", handleMenuClose);
    }

    return () => {
      if (menuOpen) {
        menuOpen.removeEventListener("click", handleMenuOpen);
      }
      if (menuClose) {
        menuClose.removeEventListener("click", handleMenuClose);
      }
    };
  }, []);

  function RedirectTo(){
    window.location.href = "/home"
  }

  return (
    <>
      {/* <div className="navBar">
        <a className="logo" href="/home">
          {<img src={a} alt="Logo" className="logo" />}
        </a>
        <nav>
                <ul className="nav__links">
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <a className="cta" href="#">Contact</a>
            <p className="menu cta">Menu</p>
        </div> */}

        <div className="navBar">
          <div className="left-side" onClick={RedirectTo}>
      
          {<img src={a} alt="Logo" className="logo-nav" />}
       
          </div>
          <div className="right-side">
            <div className="article-btn">
              <a href="/accomo/article">Articles</a>
            </div>
            <div className="about-btn">
            <a href="">About</a>
            </div>
            <div className="contact-btn">
            <div onClick={AuthService.userLogout}><a href="" className="cta">Logout</a></div>
            </div>
          </div>
        </div>
        {/* <div id="mobile__menu" className="overlay">
            <a className="close">&times;</a>
            <div className="overlay__content">
                <a href="#">Articles</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div> */}
    </>
  );
};

export default NavBar;
