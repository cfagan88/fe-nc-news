import { fetchArticle } from "../api";
import { useParams } from "react-router";
import { useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

function SingleArticle() {
  const params = useParams();
  const articleId = params.article_id;
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  fetchArticle(articleId)
    .then((fetchedArticle) => {
      setArticle(fetchedArticle);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      setIsError(true);
    });

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
      <p>{article.author}</p>
      {/* <p>{article.created_at.split("T")[0]}</p> */}
      {/* Line above is throwing an error as article.created_at is undefined. If I comment out, then add back in, it renders correctly. Assume its something to do with async but I can't work out why this would only occur on this one property? */}
      <img
        className="single-article-image"
        src={article.article_img_url}
        alt={article.title}
      />
      <p>{article.body}</p>
      <p>See more articles on: {article.topic}</p>
    </section>
  );
}

export default SingleArticle;
