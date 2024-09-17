import { getAllArticles } from "../../services/api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import "./ArticlesContainer.css";

const ArticlesContainer = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getAllArticles().then((data) => {
        setArticles(data)
        });
      }, []);

      return (
        <div className="articles-container">
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                article={article}
              />
            );
          })}
        </div>
      );
}

export default ArticlesContainer