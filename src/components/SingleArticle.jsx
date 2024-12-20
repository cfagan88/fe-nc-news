import CommentsList from "./CommentsList";
import { fetchArticle, patchArticleVotes } from "../api";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";
import Error from "./Error";
import formatDate from "../utils/formatDate";

function SingleArticle() {
  const params = useParams();
  const articleId = params.article_id;
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [votesCount, setVotesCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchArticle(articleId)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setVotesCount(fetchedArticle.votes);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError({
          status: error.status,
          msg: `Article ${error.response.data.msg}`,
        });
      });
  }, []);

  function handleClickIncrement() {
    patchArticleVotes(articleId, 1).catch((error) => {
      setError({ status: error.status, msg: error.response.data.msg });
      setVotesCount((currentVotesCount) => {
        return currentVotesCount - 1;
      });
    });
    setVotesCount((currentVotesCount) => currentVotesCount + 1);
    setError(null);
  }

  function handleClickDecrement() {
    patchArticleVotes(articleId, -1).catch(() => {
      setError({ status: error.status, msg: error.response.data.msg });
      setVotesCount((currentVotesCount) => {
        return currentVotesCount + 1;
      });
    });
    setVotesCount((currentVotesCount) => currentVotesCount - 1);
    setError(null);
  }

  if (isLoading) {
    return (
      <Lottie animationData={loadingAnimation} className="loading-animation" />
    );
  }

  if (error) {
    return <Error status={error.status} msg={error.msg} />;
  }

  return (
    <section className="single-article">
      <h2>{article.title}</h2>
      <p className="single-article-author">{article.author}</p>
      <p>{formatDate(article.created_at)}</p>
      <img
        className="single-article-image"
        src={article.article_img_url}
        alt={article.title}
      />
      <p>{article.body}</p>
      <Link to={`/articles?topic=${article.topic}`}>
        <p className="single-article-topic">
          See more articles on: {article.topic}
        </p>
      </Link>
      <div className="vote">
        <button className="upvote" onClick={handleClickIncrement}></button>
        <p className="single-article-votes">{votesCount}</p>
        <button className="downvote" onClick={handleClickDecrement}></button>
      </div>
      <CommentsList articleId={articleId} />
    </section>
  );
}

export default SingleArticle;
