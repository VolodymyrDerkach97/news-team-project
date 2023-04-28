import NewArticles from './API-service/api-news';
import { normalizeData } from './normalization.js';
import defImg from '../images/defaultimage.jpg';
import { checkFavorites } from './btnAddRemove';
import { checkRead } from './btnReadMore';

import renderSearchNews from './renderSerchNews';

const newArticles = new NewArticles();

const addCard = document.querySelector('.news-card');
const icon2 = document.querySelector('.search-box__icon-svg');
const icon = document.querySelector('.search-box__icon');
const search = document.querySelector('.search-box');
const newEl = document.querySelector('.container__home-search');
const paginationEl = document.querySelector('.pagination');
import { pagination } from './pagination';

const valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: null,
  numCardsOnPages: null,
};

const desktopWidth = window.matchMedia('(min-width: 1280px)');
const tabletWidth = window.matchMedia(
  '(min-width: 767px) and (max-width: 1279px)'
);
const mobileWidth = window.matchMedia('(max-width: 766px)');

const pageDesktop = 8;
const pageTablet = 7;
const pageMobile = 4;

if (valuePage.curPage >= 2) {
  if (desktopWidth.matches) {
    valuePage.numCardsOnPages = pageDesktop + 1;
  } else if (tabletWidth.matches) {
    valuePage.numCardsOnPages = pageTablet + 1;
  } else if (mobileWidth.matches) {
    valuePage.numCardsOnPages = pageMobile + 1;
  }
} else {
  if (desktopWidth.matches) {
    valuePage.numCardsOnPages = pageDesktop;
  } else if (tabletWidth.matches) {
    valuePage.numCardsOnPages = pageTablet;
  } else if (mobileWidth.matches) {
    valuePage.numCardsOnPages = pageMobile;
  }
}

search.addEventListener('submit', onFormSubmit);
async function onFormSubmit(e) {
  e.preventDefault();

  const serchValue = e.target.elements.mySearch.value;
  console.log(serchValue);
  try {
    const res = await newArticles.fetchSearch(serchValue);
    const normalizedResults = normalizeData(res, 'search');
    const totalNumberPagesApi = normalizedResults.length; // 20
    valuePage.totalPages = Math.ceil(
      totalNumberPagesApi / valuePage.numCardsOnPages
    ); // 3

    pagination(valuePage);

    if (normalizedResults.length === 0) {
      paginationEl.classList.add('visually-hidden');
      addCard.innerHTML = `
      <div class="page-empty">
      <h2 class="page-empty__text">We haven’t found news from this category</h2>
      <img src="${defImg}" alt="We haven’t found news from this category" class="page-empty__img">
      </div>`;
      return;
    }
    paginationEl.classList.remove('visually-hidden');
    console.log(valuePage.totalPages);
    addCard.setAttribute('data-page', serchValue);
    const newArray = normalizedResults.slice(0, valuePage.numCardsOnPages);

    addCard.innerHTML = '';
    renderSearchNews(newArray);
    checkFavorites(newArray);
    checkRead(newArray);
  } catch (error) {
    console.log(error);
  }

  e.target.reset();
}

const brnSerchEl = document.querySelector('.search-box__icon');
const btnSerchEl = document.querySelector('.btn-search');

const screenWidth = window.innerWidth;
if (screenWidth <= 768) {
  btnSerchEl.classList.remove('visually-hidden');
  search.classList.remove('active');

  search.addEventListener('click', onOpenSearch);

  function onOpenSearch(e) {
    const btnFetch = e.currentTarget.elements.namedItem('btn-fetch');
    const btnSerch = e.currentTarget.elements.namedItem('btn-search');

    search.classList.add('active');
    btnFetch.classList.add('fetch');
    btnSerch.classList.add('visually-hidden');

    document.addEventListener('click', e => {
      const withinBoundaries = e.composedPath().includes(search);

      if (!withinBoundaries) {
        search.classList.remove('active');
        brnSerchEl.classList.remove('fetch');
        btnSerchEl.classList.remove('visually-hidden');
      }
    });
  }
} else {
  btnSerchEl.classList.add('visually-hidden');
  search.classList.add('active');
}
