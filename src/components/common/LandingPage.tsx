import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import { RequestState } from "../../RequestState";
import swal from "sweetalert";
import { RouteName } from "../../RouteName";
import "../vendors/styles/healthSpaceStyles.css";
import "../vendors/styles/welcomepage.css";
import loginImageLeft from "../../components/vendors/images/loginImageLeft.svg";
import loginImageRight from "../../components/vendors/images/loginImageRight.jpg";
import loginCardImage from "../../components/vendors/images/loginCardImage.svg";
import userIconLogin from "../../components/vendors/images/userIconLogin.svg";
import emailIconLogin from "../../components/vendors/images/emailIconLogin.svg";
import userLoginPasswordIcon from "../../components/vendors/images/userLoginPasswordIcon.svg";
import { LoginData } from "../../models/LoginModel";
import RightArrow from "../vendors/images/icon/right-arrow.png";
import CustomModal from "./Modal";
import { PublicService } from "../../services/PublicService";
import Logo from "../vendors/images/logo-text.png";
import { AdminService } from "../../services/AdminService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import rightBg from "../../components/vendors/images/right-bg.jpg";
import NavBar from "./NavBar";

const Landing: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="hero">
        <video autoPlay loop muted playsInline={true} className="back-video">
          <source src="/img/NSBM1.mp4" type="video/mp4"></source>
        </video>

        <div className="content">
          <h1>AccomoGuide</h1>
          <br></br>

          <h2>Find the Accommodation | List your Accommodation</h2>
          <br></br>

          <a href="/login">Get Start</a>
          <a href="landlord_registration">Landlord</a>
        </div>
      </div>
    </>
  );
};

export default Landing;
