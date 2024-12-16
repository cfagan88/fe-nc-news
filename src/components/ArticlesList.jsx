import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleCards from "./ArticleCards";

function ArticlesList() {
  // Set state as context for articles
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <h2>Latest Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCards key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
}

export default ArticlesList;
