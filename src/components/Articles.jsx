import ArticlesList from "./ArticlesList"
import { fetchAllArticles } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      fetchAllArticles().then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
    }, []);

    if (isLoading) {
      return <Loading/>
    }
  
    if (isError) {
      return <p>Error Returning Data</p>;
    }

  return (
    <ArticlesList articles={articles}/>
  )
}

export default Articles