import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import { RequestState } from "../../RequestState";
// import swal from "sweetalert";
import { RouteName } from "../../RouteName";
import "../vendors/styles/login.css";
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
            AuthService.setToken(res.data.token);
            setLoginRequestState(RequestState.SUCCESS);
          } else {
            setError(res.error);
            setLoginRequestState(RequestState.FAILED);
          }
        })
        .catch((e) => {
          setError(e);
          setLoginRequestState(RequestState.FAILED);
        });
    } else if (loginRequestState === RequestState.FAILED) {
      // swal({ title: "User login fail!", icon: "error" });
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
    try {
      const res = await AuthService.getMe();
      if (res.success) {
        const { userType, userStatus, isVerified, _id } = res.data;
        console.log("userType", userType);
        if (userStatus === "ACTIVE") {
          switch (userType) {
            case "SUPER_ADMIN":
              history.push(RouteName.ADMIN_USER_MANAGEMENT);
              break;
            case "RECEIVER":
            case "DONOR":
              history.push(RouteName.ADMIN_MAIN_DASHBOARD);
              break;
            default:
              break;
          }
        } else {
          if (!isVerified) {
            sessionStorage.clear();
            // swal({ icon: "error", title: "User not verified yet!" });
          }
        }
      } else {
        sessionStorage.clear();
        // swal({ icon: "error", title: "User not verified yet!" });
      }
    } catch (error) {
      console.error("Error while verifying user:", error);
    }
  };

  if (token || loginRequestState === RequestState.SUCCESS) {
    verifyUser();
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="register-container">
        <img src="/img/a.jpg" alt="Logo" id="logo"></img>
        <h2>LogIn</h2>

        <form action="register_process.php" method="POST">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
          ></input>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          ></input>
          <br></br>
          <select name="role" required>
            <option value="">Select Role</option>
            <option value="landlord">Landlord</option>
            <option value="warden">Warden</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          <br></br>
        </form>

        <div className="login-button">
          <form>
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
