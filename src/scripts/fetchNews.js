import axios from "axios";
let key = "f8d7869212c24907bc585db6b6d267be";

export async function fetchNews(term) {
  const url = "https://newsapi.org//v2/everything";
  const options = {
    q: term,
    apiKey,
    pageSize: 10,
    page: 1
  };

  const results = await axios.get(url, options);
  console.log(results);
}
