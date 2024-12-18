import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
      <section className="article-card">
        <Link to={`/articles/${article.article_id}`}>
          <img
            className="all-articles-images"
            src={article.article_img_url}
            alt={article.title}
          />
          <h3>{article.title}</h3>
        </Link>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>{article.created_at.split("T")[0]}</p>
      </section>
  );
}

export default ArticleCard;
