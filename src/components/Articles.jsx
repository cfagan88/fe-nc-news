import ArticlesList from "./ArticlesList"
import { fetchAllArticles } from "../api";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

    useEffect(() => {
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
      return (
        <Lottie animationData={loadingAnimation} className="loading-animation" />
      );
    }
  
    if (isError) {
      return <p>Error Returning Data</p>;
    }

  return (
    <ArticlesList articles={articles}/>
  )
}

export default Articles