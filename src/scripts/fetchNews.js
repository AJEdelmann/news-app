import axios from "axios";
let apiKey = "f8d7869212c24907bc585db6b6d267be";

export async function fetchNews(term) {
  const params = {
    q: term,
    pageSize: 20,
    page: 1
  };

  const url = `https://newsapi.org/v2/everything?q=${term}&apiKey=${apiKey}&pageSize=${params.pageSize}&page=${params.page}`;

  const res = await axios.get(url);
  const articles = res.data.articles;
  return articles;
}