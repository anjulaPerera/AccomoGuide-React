import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import { RequestState } from "../../RequestState";
// import swal from "sweetalert";
import { RouteName } from "../../RouteName";
// import "../vendors/styles/login.css";
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
import a from "../vendors/images/a.jpg"
import swal from "sweetalert";

const Login: React.FC = () => {
  const token = AuthService.getToken();
  const history = useHistory();
  let loginData: LoginData = {
    email: "",
    password: "",
    loginMethod: "",
    remember: "",
  };

  const [remember, setRemember] = useState(false);
  const [userData, setUserData] = useState(loginData);
  const [error, setError] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialState = {
    email: "",
    name: "",
    message: "",
  };
  const [demoEmail, setDemoEmail] = useState<any>(initialState);
  const [loginRequestState, setLoginRequestState] = useState<RequestState>(
    RequestState.INITIAL
  );

  useEffect(() => {
    if (loginRequestState === RequestState.LOADING) {
      AuthService.userLogin(userData)
        .then(async (res) => {
          if (res.success) {
            console.log("user data checking", res)
            AuthService.setToken(res.data.token);
            console.log("token set, user login successful")
            setLoginRequestState(RequestState.SUCCESS);
            swal({
              title: "Login Successful",
          
              icon: "success",
            }).then(() => {
              // window.location.href = "/login";
              verifyUser();
              // if(res.data.userType === "WEB_MASTER"){
              //   history.push(RouteName.ADMIN_PAGE);
              // }
              // else if(res.data.userType === "STUDENT"){
              //   history.push(RouteName.STUDENT_PAGE);
              // }
              // else if(res.data.userType === "WARDEN"){
              //   history.push(RouteName.WARDEN_PAGE);
              // }
              // else if(res.data.userType === "LANDLORD"){
              //   history.push(RouteName.LANDLORD_PAGE);
              // }
              // else{
              //   history.push("*");
              // }
            })
          } else {
            console.log("user login failed",res.error)
            setError(res.error);
            setLoginRequestState(RequestState.FAILED);
          }
        })
        .catch((e) => {
          console.log("user login failed",e)

          setError(e);
          setLoginRequestState(RequestState.FAILED);
        });
    } else if (loginRequestState === RequestState.FAILED) {
      swal({ title: "User login fail!", icon: "error" });
    }
    // else if (loginRequestState === RequestState.SUCCESS) {
    //   if (token || loginRequestState === RequestState.SUCCESS) {
    //     verifyUser();
    //   }
    // }
  }, [loginRequestState]);

  const handleChange = (event: any) => {
    // console.log(event.target.checked);
  };

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserData({
      email: (
        event.currentTarget.elements.namedItem("email") as HTMLInputElement
      ).value,
      password: (
        event.currentTarget.elements.namedItem("password") as HTMLInputElement
      ).value,
      loginMethod: "EMAIL",
      remember: remember ? "TRUE" : "FALSE",
    });
    setLoginRequestState(RequestState.LOADING);
  };

  const verifyUser = async () => {
    console.log("inside verify user");
    try {
      const res = await AuthService.getMe();
      console.log("res verify user", res);
      if (res.success) {
        const { userType, userStatus, _id } = res.data;
        console.log("userType", userType);
        if (userStatus === "ACTIVE") {
          switch (userType) {
            case "WEB_MASTER":
              history.push(RouteName.ADMIN_PAGE);
              break;
            
            case "STUDENT":
              history.push(RouteName.STUDENT_PAGE);
              break;
              case "WARDEN":
                history.push(RouteName.WARDEN_PAGE);
                break;
                case "LANDLORD":
                history.push(RouteName.LANDLORD_PAGE);
                break;
            default:
              break;
          }
        } else {
          // if (!isVerified) {
          //   sessionStorage.clear();
          //   // swal({ icon: "error", title: "User not verified yet!" });
          // }
        }
      } else {
        sessionStorage.clear();
        // swal({ icon: "error", title: "User not verified yet!" });
      }
    } catch (error) {
      console.error("Error while verifying user:", error);
    }
  };

  // if (token || loginRequestState === RequestState.SUCCESS) {
  //   verifyUser();
  // }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="register-container">
      <a className="logo" href="/">
          {<img src={a} alt="Logo" className="logo" />}
        </a>

        <h2>LogIn</h2>

        <form onSubmit={submitLogin}>
          <input type="text" name="email"
            placeholder="Email"required></input>
          <br></br>
          <input type="password" name="password" placeholder="Password" required></input>
          <button type="submit">LOGIN</button>

         
        </form>

        {/* <div className="login-button">
          <form>
          </form>
        </div> */}
      </div>
    </>
  );
};

export default Login;
