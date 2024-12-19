import { useState, useEffect, useContext } from "react";
import { fetchComments, postNewComment } from "../api";
import { UserContext } from "../contexts/UserContext";
import CommentCard from "./CommentCard";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [newCommentInput, setNewCommentInput] = useState("");
  const [commentIsSubmitted, setCommentIsSubmitted] = useState(false);
  const [commentIsDeleted, setCommentIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const {user: {username} } = useContext(UserContext);

  function handleChange(event) {
    setNewCommentInput(event.target.value);
    setCommentIsSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);
    postNewComment(articleId, username, newCommentInput)
      .then(() => {
        setNewCommentInput("");
        setCommentIsSubmitted(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }

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
  }, [commentIsSubmitted, commentIsDeleted]);

  if (isLoading) {
    return <Lottie animationData={loadingAnimation} className="loading-animation" />
  }

  if (isError) {
    return <p>Error Returning Data</p>;
  }

  return (
    <div className="comments-list">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name="new-comment"
            type="text"
            placeholder="Post a new comment..."
            value={newCommentInput}
            onChange={handleChange}
            required
          ></input>
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} setCommentIsDeleted={setCommentIsDeleted} />;
        })}
      </ul>
    </div>
  );
}

export default Comments;
