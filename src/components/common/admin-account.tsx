import React, { useContext, useEffect, useState } from "react";
import "../vendors/styles/admin.css";
import NavBar from "./NavBar";
import swal from "sweetalert";
import { PublicService } from "../../services/PublicService";
import { AdminService } from "../../services/AdminService";
import UserContext from "../../context/UserContext";


const AdminPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: "",
        userType:""
      });
      const [user] = useContext(UserContext);

      useEffect(() => {
        console.log("logged in user", user)
      })
    
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
      const res = await AdminService.registerAUserByWebMaster(formData);
      console.log("res::====>", res);
      if (res.success) {
        console.log("inside res.success");
        swal({
          title: "Successful",
          text: `${formData.userType} Registered Successfully! Please Login.`,
          icon: "success",
        }).then(() => {
          window.location.href = "/admin/dashboard";
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
    <NavBar />
    <header>
        <h1>Create Account</h1>
    </header>
    <nav>
        <ul>
            <li><a href="/admin/dashboard">Create Account</a></li>
            <li><a href="/admin/add-article">Share Article</a></li>
        </ul>
    </nav>
    <div className="container">
        <form onSubmit={handleSignUp}>
            <label >Select User Type:</label>
            <select id="userType" name="userType"  value={formData.userType} onChange={handleInputChange}>
                <option value="LANDLORD">Landlord</option>
                <option value="WARDEN">Warden</option>
                <option value="STUDENT">Student</option>
            </select>
            <label >Username:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required></input>
            <label >Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required></input>
            <label >Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required></input>
            <button type="submit">Create Account</button>
        </form>
    </div>
    </>
  );
};

export default AdminPage;
