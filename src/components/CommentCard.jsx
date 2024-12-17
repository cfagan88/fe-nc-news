function CommentCard({ comment }) {
  return (
    <section className="comment-card">
      <p className="comment-card-author">{comment.author}</p>
      <p className="comment-card-body">{comment.body}</p>
      <p className="comment-card-votes">Votes: {comment.votes}</p>
    </section>
  );
}

export default CommentCard;
