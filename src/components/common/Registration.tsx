import React, { useState } from "react";
import "../vendors/styles/registration.css"
import { PublicService } from "../../services/PublicService";
import swal from "sweetalert";
import a from "../vendors/images/a.jpg"

const LandlordRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData:any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("inside handleSignUp : formData", formData);
    try {
      const res = await PublicService.signUp(formData); //change
      console.log("res:::::", res);
      if (res.success) {
        console.log("inside res.success");
        swal({
          title: "Successful",
          text: "Landlord Registered Successfully! Please Login.",
          icon: "success",
        }).then(() => {
          window.location.href = "/login";
        })
      } else {
        swal({
          title: "Error",
          text: res.error,
          icon: "error",
        });
        console.log("error======", res.error);
      }
    } catch (error) {
      swal({
        title: "Error",
        text: "An error occurred. Please try again later.",
        icon: "error",
      });
      console.log("error++++++", error);
    }
  };

  return (
    <>
  
    <title>Register</title>



    <div className="register-container">
        <a className="loginlogo" href="/">
          {<img src={a} alt="Logo" className="login-logo" />}
        </a>
        <h2>LogIn</h2>
        <form onSubmit={handleSignUp}>
            <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required></input><br></br>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required></input><br></br>
     
            <button type="submit">REGISTER</button>
        </form>

        <div className="login-button">
          <p>If you are already a registered landlord,<a href="/login">Login here</a>.</p>
            
        </div>
    </div>
    </>
  );
};

export default LandlordRegistration;
