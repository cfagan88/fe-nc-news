function ArticleCards({ article }) {

  return (
    <div>
      <h3>{article.title}</h3>
      <img className="article-image" src={article.article_img_url} alt={article.title} />
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Published: {article.created_at.split("T")[0]}</p>
    </div>
  );
}

export default ArticleCards;
