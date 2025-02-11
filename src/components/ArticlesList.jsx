import ArticleCard from "./ArticleCard";
import { fetchAllArticles } from "../api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";
import Error from "./Error";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicName = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchAllArticles(topicName, sortByQuery, orderByQuery)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError({
          status: error.status,
          msg: `Article ${error.response.data.msg}`,
        });
      });
  }, [searchParams]);

  if (isLoading) {
    return (
      <Lottie animationData={loadingAnimation} className="loading-animation" />
    );
  }

  if (error) {
    return <Error status={error.status} msg={error.msg} />;
  }

  function handleChange(event) {
    if (event.target.value === "Date (newest first)") {
      setSearchParams("?sort_by=created_at");
    }

    if (event.target.value === "Date (oldest first)") {
      setSearchParams("?sort_by=created_at&order=ASC");
    }

    if (event.target.value === "Author (A to Z)") {
      setSearchParams("?sort_by=author&order=ASC");
    }

    if (event.target.value === "Author (Z to A)") {
      setSearchParams("?sort_by=author&order=DESC");
    }

    if (event.target.value === "Comment count (high to low)") {
      setSearchParams("?sort_by=comment_count&order=DESC");
    }

    if (event.target.value === "Comment count (low to high)") {
      setSearchParams("?sort_by=comment_count&order=ASC");
    }

    if (event.target.value === "Votes (highest rated)") {
      setSearchParams("?sort_by=votes&order=DESC");
    }

    if (event.target.value === "Votes (lowest rated)") {
      setSearchParams("?sort_by=votes&order=ASC");
    }
  }

  return (
    <div>
      <h2 className="home-title">Latest Articles</h2>
      <div className="filter-dropdown">
        <select onChange={handleChange}>
          <option>Date (newest first)</option>
          <option>Date (oldest first)</option>
          <option>Author (A to Z)</option>
          <option>Author (Z to A)</option>
          <option>Comment count (high to low)</option>
          <option>Comment count (low to high)</option>
          <option>Votes (highest rated)</option>
          <option>Votes (lowest rated)</option>
        </select>
      </div>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
