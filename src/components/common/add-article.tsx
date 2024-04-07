import React, { useContext, useState } from "react";
import "../vendors/styles/admin.css";
import NavBar from "./NavBar";
import { PublicService } from '../../services/PublicService';
import swal from 'sweetalert';
import { AdminService } from "../../services/AdminService";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

const AddArticle: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user] = useContext(UserContext)
  const history = useHistory();

    const adminId = user?._id;

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await AdminService.createArticle(adminId, { title, content });
      if (res.success) {
        swal({
          title: "Article Created",
          text: "Your article has been created successfully.",
          icon: "success",
        });
        history.push("/admin/dashboard");
      } else {
        swal({
          title: "Error",
          text: res.error || "An error occurred while creating the article.",
          icon: "error",
        });
      }
    } catch (error) {
      swal({
        title: "Error",
        text: "An error occurred while creating the article. Please try again later.",
        icon: "error",
      });
    }
  };

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
          <form onSubmit={handleFormSubmit}>
              <label>Title:</label>
              <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <label>Content:</label>
              <textarea id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} required />
              <button type="submit">Share Article</button>
          </form>
      </div>
    </>
  );
};

export default AddArticle;
