import axios from "axios";

const myapi = axios.create({
  baseURL: "https://nc-news-bpw3.onrender.com/api",
});

export function getAllArticles() {
  return myapi.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

export function getArticle(article_id) {
  return myapi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export function getComments(article_id) {
  return myapi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function getUser(user_id) {
  return myapi.get(`/users/${user_id}`).then(({ data }) => {
    return data.user;
  });
}

export function patchArticleVote(article_id,vote) {
    return myapi.patch(`/articles/${article_id}`,{ inc_votes : vote})
}

export function postArticleComment(article_id, commentObj) {
    return myapi.post(`/articles/${article_id}/comments`,{username: commentObj.author, body: commentObj.body})
}
