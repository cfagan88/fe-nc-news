import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-6eit.onrender.com/api",
});

export const fetchArticles = () => {
  return ncNewsApi.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};
