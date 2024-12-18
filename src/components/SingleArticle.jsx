import { fetchArticle, patchArticleVotes } from "../api";
import CommentsList from "./CommentsList";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Loading from "./Loading";

function SingleArticle() {
  const params = useParams();
  const articleId = params.article_id;
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [votesCount, setVotesCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(articleId)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setVotesCount(fetchedArticle.votes);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  function handleClickIncrement() {
    patchArticleVotes(articleId, 1).catch(() => {
      setVotesCount((currentVotesCount) => {
        return currentVotesCount - 1;
      });
    });
    setVotesCount((currentVotesCount) => currentVotesCount + 1);
  }

  function handleClickDecrement() {
    patchArticleVotes(articleId, -1).catch(() => {
      setVotesCount((currentVotesCount) => {
        return currentVotesCount + 1;
      });
    });
    setVotesCount((currentVotesCount) => currentVotesCount - 1);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error Returning Data</p>;
  }

  return (
    <section className="single-article">
      <h2>{article.title}</h2>
      <p className="single-article-author">{article.author}</p>
      <p>{article.created_at.split("T")[0]}</p>
      <img
        className="single-article-image"
        src={article.article_img_url}
        alt={article.title}
      />
      <p>{article.body}</p>
      <p className="single-article-topic">
        See more articles on: {article.topic}
      </p>
      <div className="single-article-voting">
        <button className="upvote" onClick={handleClickIncrement}></button>
        <p className="single-article-votes">{votesCount}</p>
        <button className="downvote" onClick={handleClickDecrement}></button>
      </div>
      <CommentsList articleId={articleId} />
    </section>
  );
}

export default SingleArticle;
