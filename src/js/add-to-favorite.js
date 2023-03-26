const FAVORITE_KEY = 'favorite_news';

export function onLoadHomePage() {
  const FAVORITE_KEY = 'favorite_news';
  const refs = {
    galleryEl: document.querySelector('#news-gallery'),
  };

  refs.galleryEl.addEventListener('click', onGalleryClick);

  function onGalleryClick(event) {
    const targetBtn = event.target.closest('.gallery-thumb__btn');
    if (!targetBtn) {
      return;
    }

    const targetItem = event.target.closest('.gallery__item');

    const img = () => {
      const resWithoutStart = targetItem
        .querySelector('.gallery-thumb')
        .style.backgroundImage.split('');

      resWithoutStart.splice(0, 5);
      resWithoutStart.splice(-2, 2);
      return resWithoutStart.join('');
    };
    const title = targetItem.querySelector('.gallery__title').textContent;
    const text = targetItem.querySelector('.gallery__text').textContent;
    const date = targetItem.querySelector('.thumb__text').textContent;
    const id = targetItem.id;
    const category = targetItem.querySelector(
      '.gallery-thumb__subtitle'
    ).textContent;
    const url = targetItem.querySelector('.thumb__link').href;
    const article = { img: img(), title, text, date, id, category, url };
    const dataFromLS = getFromLS(FAVORITE_KEY);
    
    const present = dataFromLS.find(article => article.id === id);

    // ===========================================================
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      addOrDeleteFavoriteNews(article, userId, targetBtn);
    }
    // ===========================================================

    if (present) {
      const newData = dataFromLS.filter(article => article.id !== id);
      setToLS(FAVORITE_KEY, newData);

      // ===========================================================
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        addOrDeleteFavoriteNews(article, userId, targetBtn);
      }
      // ===========================================================

      targetBtn.innerHTML =
        '<p class="gallery-thumb__name add">Add to favorite<span class="gallery-thumb__icon">&#9825;</span></p>';
      return;
    }

    const newData = [...dataFromLS, { ...article }];
    setToLS(FAVORITE_KEY, newData);
    targetBtn.innerHTML =
      '<p class="gallery-thumb__name add">Remove from favorite<span class="gallery-thumb__icon">&#10084;</span></p>';
  }
}

export function checkPresentArticle(id) {
  const dataFromLS = getFromLS(FAVORITE_KEY);
  const present = dataFromLS.find(article => article.id === id);
  return present;
}

function onLoadFavoritesPage() {
  const dataFromLS = getFromLS(FAVORITE_KEY);

  if (!dataFromLS.length && notFoundRef !== null) {
    notFoundRef.innerHTML = `<h2 class="not-found-title hidden">You haven't added anything to favorite!</h2><img src="https://live.staticflickr.com/65535/52770181328_d91f5366f0_z.jpg">`;
    return;
  }

  const newMarkup = markup.createGalleryCardMarkup(dataFromLS);
  if (listArticlesRef === null) return;
  listArticlesRef.innerHTML = newMarkup;

  listArticlesRef.addEventListener('click', onListArticlesClick);
}

function onListArticlesClick(event) {
  const targetBtn = event.target.closest('.gallery-thumb__btn');
  if (!targetBtn) {
    return;
  }

  const targetItem = event.target.closest('.gallery__item');
  const id = targetItem.id;
  const dataFromLS = getFromLS(FAVORITE_KEY);
  const present = dataFromLS.find(article => article.id === id);
  if (present) {
    const newData = dataFromLS.filter(article => article.id !== id);
    setToLS(FAVORITE_KEY, newData);
    const newMarkup = markup.createGalleryCardMarkup(newData);
    listArticlesRef.innerHTML = newMarkup;

    return;
  }
}
onLoadFavoritesPage(); /////треба викликати цю функцію при клікі на посилання Favorite
