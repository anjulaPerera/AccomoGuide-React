import React, { useEffect, useState } from "react";
import "../vendors/styles/article.css";
import NavBar from "./NavBar";
import { PublicService } from "../../services/PublicService";


const ArticlePage: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);


  const fetchArticles = async () => {
    await PublicService.getArticles().then((res) => {
      if(res.success){
        setArticles(res.data);
      }else{
        console.error("Failed to fetch articles:", res.message);
      }
     })
  }


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
      
      {
        articles.map((article, index) => (
          <div className="post-card" key={index}>
         
            <div className="post-card-content">
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          </div>
        ))
      }

      
    </div>
    </main>
    </>
  );
};

export default ArticlePage;
