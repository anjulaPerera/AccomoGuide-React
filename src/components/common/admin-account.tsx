import React from "react";
import "../vendors/styles/admin.css";
import NavBar from "./NavBar";


const AdminPage: React.FC = () => {
  return (
    <>
    <NavBar />
    <header>
        <h1>Create Account</h1>
    </header>
    <nav>
        <ul>
            <li><a href="admin_create_account">Create Account</a></li>
            <li><a href="share_article">Share Article</a></li>
        </ul>
    </nav>
    <div className="container">
        <form action="#" method="post">
            <label >Select User Type:</label>
            <select id="user_type" name="user_type">
                <option value="landlord">Landlord</option>
                <option value="warden">Warden</option>
                <option value="student">Student</option>
            </select>
            <label >Username:</label>
            <input type="text" id="username" name="username" required></input>
            <label >Email:</label>
            <input type="email" id="email" name="email" required></input>
            <label >Password:</label>
            <input type="password" id="password" name="password" required></input>
            <button type="submit">Create Account</button>
        </form>
    </div>
    </>
  );
};

export default AdminPage;
