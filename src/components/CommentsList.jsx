import { useState, useEffect } from "react";
import { fetchComments } from "../api";
import CommentCard from "./CommentCard";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(articleId)
      .then((comments) => {
        setComments(comments);
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
    <div className="comments-list">
      <h4>Comments</h4>
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
}

export default Comments;
