import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-6eit.onrender.com/api",
});

export const fetchAllArticles = () => {
  return ncNewsApi.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticle = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}`).then(({ data: {article}}) => {
    return article;
  });
};
