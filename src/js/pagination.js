import NewArticles from './API-service/api-news';
import { renderArticle } from './renderArticle';

import { checkFavorites } from './btnAddRemove';
import { checkRead } from './btnReadMore';

import { normalizeData } from './normalization';
import renderSearchNews from './renderSerchNews';
import { renderCategories } from './renderCategories';
import renderByDate from './renderByDate';

const pg = document.getElementById('pagination');
const ulPageContainer = document.querySelector('.page-container');
const btnNextPg = document.querySelector('button.next-page');
const btnPrewPg = document.querySelector('button.prew-page');
const addCard = document.querySelector('.news-card');

window.addEventListener('load', onFirstLoad);

const newArticles = new NewArticles();

const desktopWidth = window.matchMedia('(min-width: 1280px)');
const tabletWidth = window.matchMedia(
  '(min-width: 767px) and (max-width: 1279px)'
);
const mobileWidth = window.matchMedia('(max-width: 766px)');

const valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: null,
  numCardsOnPages: null,
};
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

async function onFirstLoad(event) {
  event.preventDefault();
  try {
    const res = await newArticles.fetchMostPopular();

    const totalNumberPagesApi = res.results.length; // 20
    valuePage.totalPages = Math.ceil(
      totalNumberPagesApi / valuePage.numCardsOnPages
    ); // 3

    renderPagePagination(res, 'popular');
    pagination(valuePage);
  } catch (error) {
    console.log(error);
  }
}

async function renderNumPage(page) {
  console.log('renderNumPage', page);
  try {
    if (addCard.classList.contains('popular')) {
      const res = await newArticles.fetchMostPopular();
      pagination(valuePage);

      renderPagePagination(res, 'popular', page);
    }
    if (addCard.classList.contains('search')) {
      const serchValue = addCard.getAttribute('data-page');
      const res = await newArticles.fetchSearch(serchValue);

      pagination(valuePage);
      renderPagePagination(res, 'search', page);
    }
    if (addCard.classList.contains('categories')) {
      const cotegorieshValue = addCard.getAttribute('data-page');
      const res = await newArticles.fetchCategories(cotegorieshValue);
      pagination(valuePage);

      renderPagePagination(res, 'categories', page);
    }
    if (addCard.classList.contains('calendar')) {
      const cotegorieshValue = addCard.getAttribute('data-page');
      const res = await newArticles.fetchByDate(cotegorieshValue);
      pagination(valuePage);
      renderPagePagination(res, 'calendar', page);
    }
  } catch (error) {
    console.log(error);
  }
}

function renderPagePagination(res, type, page) {
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
  const normalizedResults = normalizeData(res, type);

  if (page) {
    const start = (page - 1) * valuePage.numCardsOnPages;
    const end = start + valuePage.numCardsOnPages;
    const newArray = normalizedResults.slice(start, end);
    addCard.innerHTML = '';

    switch (type) {
      case 'popular':
        renderArticle(newArray);
        break;

      case 'search':
        renderSearchNews(newArray);
        break;

      case 'categories':
        renderCategories(newArray);
        break;

      case 'calendar':
        renderByDate(newArray);
        break;

      default:
        break;
    }

    checkFavorites(newArray);
    checkRead(newArray);
  } else {
    const newArray = normalizedResults.slice(0, valuePage.numCardsOnPages);
    addCard.innerHTML = '';
    renderArticle(newArray);
    checkFavorites(newArray);
    checkRead(newArray);
  }
}

pg.addEventListener('click', e => {
  const ele = e.target;

  if (ele.dataset.page) {
    renderNumPage(ele.dataset.page);
    const pageNumber = parseInt(e.target.dataset.page);
    valuePage.curPage = pageNumber;
    pagination(valuePage);
    handleButtonLeft();
    handleButtonRight();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// DYNAMIC PAGINATION
export function pagination({ totalPages, curPage, numLinksTwoSide: delta }) {
  const range = delta + 4; // use for handle visible number of links left side

  let render = '';
  let renderTwoSide = '';
  let dot = `<li class="pg-item"><a class="pg-link">...</a></li>`;
  let countTruncate = 0; // use for ellipsis - truncate left side or right side

  // use for truncate two side
  const numberTruncateLeft = curPage - delta;
  const numberTruncateRight = curPage + delta;

  let active = '';
  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos === curPage ? 'active' : '';

    // truncate
    if (totalPages >= 2 * range - 1) {
      if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {
        // truncate 2 side
        if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
          renderTwoSide += renderPage(pos, active);
        }
      } else {
        // truncate left side or right side
        if (
          (curPage < range && pos <= range) ||
          (curPage > totalPages - range && pos >= totalPages - range + 1) ||
          pos === totalPages ||
          pos === 1
        ) {
          render += renderPage(pos, active);
        } else {
          countTruncate++;
          if (countTruncate === 1) render += dot;
        }
      }
    } else {
      // not truncate
      render += renderPage(pos, active);
    }
  }

  if (renderTwoSide) {
    renderTwoSide =
      renderPage(1) + dot + renderTwoSide + dot + renderPage(totalPages);
    pg.innerHTML = renderTwoSide;
  } else {
    pg.innerHTML = render;
  }
}

function renderPage(index, active = '') {
  return ` <li class="pg-item ${active}" data-page="${index}">
      <a class="pg-link" href="#">${index}</a>
  </li>`;
}

ulPageContainer.addEventListener('click', function (e) {
  handleButton(e.target);
});

function handleButton(element) {
  if (element.classList.contains('first-page')) {
    valuePage.curPage = 1;
  } else if (element.classList.contains('last-page')) {
    valuePage.curPage = valuePage.totalPages;
  } else if (element.classList.contains('prew-page')) {
    valuePage.curPage--;
    handleButtonLeft();

    renderNumPage(valuePage.curPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    btnNextPg.disabled = false;
  } else if (element.classList.contains('next-page')) {
    valuePage.curPage++;
    handleButtonRight();

    renderNumPage(valuePage.curPage);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    btnPrewPg.disabled = false;
  }
  // pagination(valuePage);
}

function handleButtonLeft() {
  if (valuePage.curPage === 1) {
    btnPrewPg.disabled = true;
  } else {
    btnPrewPg.disabled = false;
  }
}

function handleButtonRight() {
  if (valuePage.curPage === valuePage.totalPages) {
    btnNextPg.disabled = true;
  } else {
    btnNextPg.disabled = false;
  }
}
