import './js/new-cards';
import './js/mobile-menu';
import './js/toggle-switcher-theme';
import './js/search-form';
import './js/API-service/api-weather';
import './js/current-page';
import './js/categories';
import './js/pagination';
import './js/calendar';
const up = document.querySelector('.btn-scroll');

up.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
