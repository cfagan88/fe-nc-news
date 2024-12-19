import { Link } from "react-router";
import formatDate from "../utils/formatDate";

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
      <Link to={`/articles?topic=${article.topic}`}>
      <p>{article.topic}</p>
      </Link>
      <p>{formatDate(article.created_at)}</p>
    </section>
  );
}

export default ArticleCard;
