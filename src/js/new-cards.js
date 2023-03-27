import { renderArticle } from './renderArticle';
import NewArticles from './API-service/api-news';
import normalization from './normalization.js';
import { addToFavorites, checkFavorites } from './btn-add-remove';
import { readMore, checkRead } from './btn-read-more';

const buttonEL = document.querySelector('.fetch');
const newArticles = new NewArticles();
const newsCardEl = document.querySelector('.news-card');

newsCardEl.addEventListener('click', function (event) {
  const targetEl = event.target;

  if (targetEl.classList.contains('news-card__favorite-button')) {
    addToFavorites(event);
  } else if (targetEl.classList.contains('news-card__read-more')) {
    readMore(event);
  }
});

// const numCardsOnPages = 9;

// async function onFormSubmit(event) {
//   event.preventDefault();

//   try {
//     const res = await newArticles.fetchArtic();
//     const normalizedResults = normalization(res);
//     const newArray = normalizedResults.slice(0, numCardsOnPages);
//     btnAddtoFavEl.innerHTML = '';
//     renderArticle(newArray);
//     // checkFavorites(newArray);
//   } catch (error) {
//     console.log(error);
//   }
// }
