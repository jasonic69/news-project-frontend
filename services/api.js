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
