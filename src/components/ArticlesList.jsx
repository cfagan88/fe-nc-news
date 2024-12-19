import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

function ArticlesList({ articles }) {
 const [sortBy, setSortBy] = useState("");
 const [orderBy, setOrderBy] = useState("");
 const [searchParams, setSearchParams] = useSearchParams();

 console.log(searchParams)



  return (
    <>
      <h2 className="home-title">Latest Articles</h2>
        <select>
          <option>Date (newest first)</option>
          <option onClick={setSearchParams("?order=ASC")}>Date (oldest first)</option>
          <option>Author (A to Z)</option>
          <option>Author (Z to A)</option>
          <option>Comment count (high to low)</option>
          <option>Comment count (low to high)</option>
          <option>Votes (highest rated)</option>
          <option>Votes (lowest rated)</option>
        </select>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
}

export default ArticlesList;
