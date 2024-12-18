import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-6eit.onrender.com/api",
});

export const fetchAllArticles = () => {
  return ncNewsApi.get(`/articles`).then(({ data: { articles } }) => {
    return articles;
  });
};

export const fetchArticle = (articleId) => {
  return ncNewsApi
    .get(`/articles/${articleId}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchComments = (articleId) => {
  return ncNewsApi
    .get(`/articles/${articleId}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchArticleVotes = (articleId, input) => {
  return ncNewsApi.patch(`/articles/${articleId}`, {inc_votes: input})
}