import '../styles/main.scss';
import {
  fetchNews
} from './fetchNews';
import {
  appendArticle
} from './appendArticle';

/** Listening on the keyup event */
let timeout = null;
const searchInput = document.querySelector('#news-search');
searchInput.onkeyup = getValue;

function getValue(e) {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    const value = e.srcElement.value;
    renderNews(value);
  }, 500);
}

async function renderNews(value) {
  const articles = await fetchNews(value);
  articles.map(el => {
    appendArticle(el);
  });
}