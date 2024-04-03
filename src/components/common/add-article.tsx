import React from "react";
import "../vendors/styles/admin.css";
import NavBar from "./NavBar";


const AdminPage: React.FC = () => {
  return (
    <>
    <NavBar />
    <header>
        <h1>Share Article</h1>
    </header>
    <nav>
        <ul>
            <li><a href="admin_create_account">Create Account</a></li>
            <li><a href="share_article">Share Article</a></li>
        </ul>
    </nav>
    <div className="container">
        <form action="#" method="post">
            <label >Title:</label>
            <input type="text" id="title" name="title" required></input>
            <label >Content:</label>
            <textarea id="content" name="content" required></textarea>
            <button type="submit">Share Article</button>
        </form>
    </div>
    </>
  );
};

export default AdminPage;
