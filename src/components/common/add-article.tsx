import React from "react";
import "../vendors/styles/admin.css";
import NavBar from "./NavBar";


const AddArticle: React.FC = () => {
  return (
    <>
    <NavBar />
    <header>
        <h1>Share Article</h1>
    </header>
    <nav>
        <ul>
            <li><a href="/admin/dashboard">Create Account</a></li>
            <li><a href="/admin/add-article">Share Article</a></li>
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

export default AddArticle;
