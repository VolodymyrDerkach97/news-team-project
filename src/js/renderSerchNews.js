import svgSprite from '../images/icons/icons.svg';
import defImg from '../images/defaultimage.jpg';

const newCardEl = document.querySelector('.news-card');

const baseUrl = 'https://www.nytimes.com/';

export default function renderSearchNews(res) {
  const markup = `<ul class="news-card__image-container">${res
    .map(
      ({ abstract, section, title, published_date, multimedia = [], url }) => {
        const imageUrl =
          multimedia && multimedia[1] && multimedia[1] && multimedia[2]?.url
            ? baseUrl + multimedia[2].url ||
              baseUrl + multimedia[1] ||
              baseUrl + multimedia[0]
            : defImg;
        const imageAlt =
          multimedia && multimedia[2]?.caption
            ? multimedia[2].caption
            : 'Default Image';

        return `
  <li class="news-card__item">
   <div class="news-card__foto">
    <img src="${imageUrl}" alt="${imageAlt}" class="news-card__image">
  <div class="news-card__category">
   ${section}
  </div>
  <button class="news-card__favorite-button" data-news-id="${title}">
    Add to favorite <svg width="13" height="12" class="news-card__favorite-icon">
    <use href="${svgSprite}#icon-favorite"></use></svg>
  </button>
  </div>
  <div class="news-card__description">
  <h2 class="news-card__title">
    ${title}
  </h2>
  <p class="news-card__abstract">
    ${abstract}
  </p>
  </div>
  <div class="news-card__container">
  <div class="news-card__date">
    ${onGetDate({ results: [{ published_date }] })}
  </div>
  <a href="${url}" target="_blank" rel="noreferrer noopener nofollow" class="news-card__read-more" data-news-id="${title}">
    Read more
  </a>
  <div class="news-card__overlay" style="display: none">Already read</div>
  </div>
  </li>
`;
      }
    )
    .join('')}
    </ul>`;

  newCardEl.insertAdjacentHTML('beforeEnd', markup);
}

function onGetDate(res) {
  const dataStr = res.results.map(({ published_date }) => {
    const dataObj = new Date(`${published_date}`);

    const year = dataObj.getFullYear();
    const month = String(dataObj.getMonth() + 1).padStart(2, '0');
    const day = String(dataObj.getDate()).padStart(2, '0');

    const newDataStr = `${day}/${month}/${year}`;
    return newDataStr;
  });

  return dataStr;
}
