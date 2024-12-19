import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-6eit.onrender.com/api",
});

export const fetchAllArticles = (topicName) => {
  return ncNewsApi.get(`/articles`, { params: { topic: topicName }}).then(({ data: { articles } }) => {
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

export const patchArticleVotes = (articleId, voteCount) => {
  return ncNewsApi.patch(`/articles/${articleId}`, { inc_votes: voteCount });
};

export const postNewComment = (articleId, username, commentText) => {
  return ncNewsApi.post(`/articles/${articleId}/comments`, {
    username: username,
    body: commentText,
  });
};

export const deleteComment = (commentId) => {
  return ncNewsApi.delete(`/comments/${commentId}`);
};


export const fetchTopics = () => {
  return ncNewsApi.get(`/topics`).then(({ data: { topics } }) => {
    return topics;
  })
}