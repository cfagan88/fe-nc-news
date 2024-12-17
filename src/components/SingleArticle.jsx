import { fetchArticle } from "../api";
import CommentsList from "./CommentsList";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

function SingleArticle() {
  const params = useParams();
  const articleId = params.article_id;
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(articleId)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [])

  if (isLoading) {
    return (
      <Lottie animationData={loadingAnimation} className="loading-animation" />
    );
  }

  if (isError) {
    return <p>Error Returning Data</p>;
  }

  return (
    <section className="single-article">
      <h3>{article.title}</h3>
      <p className="single-article-author">{article.author}</p>
      <p>{article.created_at.split("T")[0]}</p>
      <img
        className="single-article-image"
        src={article.article_img_url}
        alt={article.title}
      />
      <p>{article.body}</p>
      <p>See more articles on: {article.topic}</p>
      <CommentsList articleId={articleId} />
    </section>
  );
}

export default SingleArticle;
