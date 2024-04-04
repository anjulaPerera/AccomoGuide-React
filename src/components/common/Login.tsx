import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import { RequestState } from "../../RequestState";
import swal from "sweetalert";
import { RouteName } from "../../RouteName";
import { LoginData } from "../../models/LoginModel";
import a from "../vendors/images/a.jpg"

const Login: React.FC = () => {
  const token = AuthService.getToken();

  const history = useHistory();

  let loginData: LoginData = {
    email: "",

    password: "",

    loginMethod: "EMAIL",
    remember:"TRUE"
  };


  const [userData, setUserData] = useState(loginData);

  const [error, setError] = useState<string>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialState = {
    email: "",

    name: "",

    message: "",
  };


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

      remember: "TRUE",
    });

    setLoginRequestState(RequestState.LOADING);
  };

  const verifyUser = async () => {
    try {
      const res = await AuthService.getMe();
      console.log("auth.getme res",res)

      if (res.success) {
        const { userType, userStatus, _id } = res.data;

        console.log("userType", userType);

        if (userStatus === "ACTIVE") {
          switch (userType) {
            case "WEB_MASTER":
              
              swal({ title: "User login successful!", icon: "success" }).then(
                () => history.push(RouteName.ADMIN_PAGE)
              );

              break;
              case "STUDENT":
              swal({ title: "User login successful!", icon: "success" }).then(
                () => history.push(RouteName.STUDENT_PAGE)
              );
              break;

              case "WARDEN":
                swal({ title: "User login successful!", icon: "success" }).then(
                  () => history.push(RouteName.WARDEN_PAGE)
                );
                break;
                case "LANDLORD":
                swal({ title: "User login successful!", icon: "success" }).then(
                  () => history.push(RouteName.LANDLORD_PAGE)
                );
                break;

            default:
              break;
          }
        } else {
          if (userStatus != "ACTIVE") {
            sessionStorage.clear();

            swal({ icon: "error", title: "User not verified yet!" });
          }
        }
      } else {
        sessionStorage.clear();

        swal({ icon: "error", title: "User not verified yet!!" });
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
        <a className="loginlogo" href="/">
          {<img src={a} alt="Logo" className="login-logo" />}
        </a>

        <h2>LogIn</h2>

        <form onSubmit={submitLogin}>
          <input type="text" name="email" placeholder="Email" required></input>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          ></input>
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
