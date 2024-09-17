import axios from "axios";

const myapi = axios.create({
  baseURL: "https://nc-news-bpw3.onrender.com",
});
export function getAllArticles() {
  return myapi.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
}