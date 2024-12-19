import ArticlesList from "./ArticlesList";
import { fetchAllArticles } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const topicName = searchParams.get("topic");

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles(topicName)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [searchParams]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error Returning Data</p>;
  }

  return <ArticlesList articles={articles} />;
}

export default Articles;
