// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import { fetchNews } from "./fetchNews";

// \/ All of your javascript should go here \/
// Listening on the key up event
let timeout = null;
const searchInput = document.querySelector("#news-search");
searchInput.onkeyup = getValue;

function getValue(e) {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    const value = e.srcElement.value;
    fetchNews(value);
  }, 500);
}
