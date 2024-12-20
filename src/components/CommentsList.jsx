import { useState, useEffect, useContext } from "react";
import { fetchComments, postNewComment } from "../api";
import { UserContext } from "../contexts/UserContext";
import CommentCard from "./CommentCard";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";
import Error from "./Error";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [newCommentInput, setNewCommentInput] = useState("");
  const [commentIsSubmitted, setCommentIsSubmitted] = useState(false);
  const [commentIsDeleted, setCommentIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    user: { username },
  } = useContext(UserContext);

  function handleChange(event) {
    setNewCommentInput(event.target.value);
    setCommentIsSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    postNewComment(articleId, username, newCommentInput)
      .then(() => {
        setNewCommentInput("");
        setCommentIsSubmitted(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setError({ status: error.status, msg: error.response.data.msg });
      });
  }

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchComments(articleId)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError({ status: error.status, msg: error.response.data.msg });
      });
  }, [commentIsSubmitted, commentIsDeleted]);

  if (isLoading) {
    return (
      <Lottie animationData={loadingAnimation} className="loading-animation" />
    );
  }

  if (error) {
    return <Error status={error.status} msg={error.msg} />;
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
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              setCommentIsDeleted={setCommentIsDeleted}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Comments;
