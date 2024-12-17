import ArticleCard from "./ArticleCard";

function ArticlesList({articles}) {
  return (
    <>
      <h2 className="home-title">Latest Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
}

export default ArticlesList;
