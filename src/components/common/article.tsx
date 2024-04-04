import React from "react";
import "../vendors/styles/article.css";
import NavBar from "./NavBar";
import home from "../vendors/images/home.jpg";


const ArticlePage: React.FC = () => {
  return (
    <>
    <NavBar />
    <header>
    <div className="h-cont">
    <h1>Article</h1>
    </div>
    </header>

  <main>
    <div className="post-grid">
      
      <div className="post-card">
        <h2>Title</h2>
        <p>Description or content</p>
      </div>

      <div className="post-card">
        <h2>Title</h2>
        <p>Description or content</p>
      </div>

      <div className="post-card">
        <h2>Title</h2>
        <p>Description or content</p>
      </div>

      <div className="post-card">
        <h2>Title</h2>
        <p>Description or content</p>
      </div>

      <div className="post-card">
        <h2>Title</h2>
        <p>Description or content</p>
      </div>

      <div className="post-card">
        <h2>Title</h2>
        <p>Description or content</p>
      </div>
      
    </div>
    </main>
    </>
  );
};

export default ArticlePage;
