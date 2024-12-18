import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../api";

function CommentCard({ comment, setCommentIsDeleted }) {
  const {
    user: { username },
  } = useContext(UserContext);
  const commentId = comment.comment_id;

  function handleDelete() {
    deleteComment(commentId).then(() => {
      setCommentIsDeleted(true);
    });
    setCommentIsDeleted(false);
  }

  return (
    <section className="comment-card">
      <p className="comment-card-author">{comment.author}</p>
      <p className="comment-card-body">{comment.body}</p>
      <p className="comment-card-votes">Votes: {comment.votes}</p>
      <div>
        {username === comment.author ? (
          <button onClick={handleDelete}>X</button>
        ) : null}
      </div>
    </section>
  );
}

export default CommentCard;
