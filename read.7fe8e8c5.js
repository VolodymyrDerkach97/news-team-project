!function(){function e(e,n,t,a){Object.defineProperty(e,n,{get:t,set:a,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},c=t.parcelRequire2cb1;null==c&&((c=function(e){if(e in a)return a[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return a[e]=t,n.call(t.exports,t,t.exports),t.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){r[e]=n},t.parcelRequire2cb1=c),c.register("iE7OH",(function(n,t){var a,r;e(n.exports,"register",(function(){return a}),(function(e){return a=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var c={};a=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)c[n[t]]=e[n[t]]},r=function(e){var n=c[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),c.register("aNJCr",(function(n,t){var a;e(n.exports,"getBundleURL",(function(){return a}),(function(e){return a=e}));var r={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),r[e]=n),n}})),c("iE7OH").register(JSON.parse('{"03q4W":"read.7fe8e8c5.js","aJDWo":"defaultimage.febeee97.jpg","iBapZ":"icons.4066d7ef.svg","akuFj":"default_hidden.b7ff1915.png","aRedu":"read.8d0714be.js"}')),c("cs7FV"),c("6TJuu"),c("iyKjn"),c("fhI4F");document.getElementsByClassName(".accordion__active");function o(){document.querySelectorAll(".accordion__wrap").forEach((function(e){e.querySelector(".accordion__active").addEventListener("click",(function(){e.classList.toggle("active")}))}))}o();var i=c("dDDEV");c("8IsH3");var d;d=c("aNJCr").getBundleURL("03q4W")+c("iE7OH").resolve("iBapZ");var s;s=c("aNJCr").getBundleURL("03q4W")+c("iE7OH").resolve("akuFj");var l;l=c("aNJCr").getBundleURL("03q4W")+c("iE7OH").resolve("aJDWo"),c("4MvEs");var u=document.querySelector(".container__read"),f=document.querySelector(".accordion"),v=JSON.parse(localStorage.getItem("readList"))||[];var _,g,p=v.map((function(e){var t,a,r=new Date(e.readAt),c="".concat(r.getDate().toString().padStart(2,"0"),"/").concat((r.getMonth()+1).toString().padStart(2,"0"),"/").concat(r.getFullYear()),o=new Date(e.published_date),d="".concat(o.getDate().toString().padStart(2,"0"),"/").concat((o.getMonth()+1).toString().padStart(2,"0"),"/").concat(o.getFullYear()),s=e.multimedia,u=void 0===s?[]:s,f=u&&(null===(t=u[2])||void 0===t?void 0:t.url)?u[2].url:n(l),v=u&&(null===(a=u[2])||void 0===a?void 0:a.caption)?u[2].caption:"Default Image";return n(i)({},e,{readAt:c,published_date:d,imageUrl:f,imageAlt:v})}));!function(){u.insertAdjacentHTML("beforeEnd",v&&0!==v.length?"":'\n    <div class="page-empty">\n    <h2 class="page-empty__text">You don\'t have any read news</h2>\n    <img src="'.concat(n(s),'" alt="You have not read news" class="page-empty__img">\n    </div>'));var e=new Set;p.forEach((function(n){var t=n.readAt;e.add(t)}));var t=Array.from(e).map((function(e){return'\n              <div class="accordion__wrap">\n                  <div class="accordion__active">\n                    <div class="read__date">'.concat(e,'</div>\n                    <svg class="accordion_icon" width="15" height="9">\n                      <use href="').concat(n(d),'#icon-vector-down"></use>\n                    </svg>\n                  </div>\n                  <hr class="accordion__line">\n                  <div class="content">\n                    <div class="news-card">\n                      <ul class="news-card__image-container">\n                      </ul>\n                    </div>\n                  </div>\n              </div>\n          ')})).join("");f.insertAdjacentHTML("beforeEnd",t),o()}(),_=document.querySelectorAll(".read__date"),g=p.reduce((function(e,n){var t=n.readAt;return e[t]||(e[t]=[]),e[t].push(n),e}),{}),_.forEach((function(e){var t=e.textContent,a=g[t]||[],r=e.closest(".accordion__wrap").querySelector(".news-card__image-container");a.forEach((function(e){var a,c,o,i,s,l,u,f;e.readAt===t&&(console.log(e),r.insertAdjacentHTML("beforeEnd",(c=(a=e).abstract,o=a.section,i=a.title,s=a.published_date,l=a.imageUrl,u=a.imageAlt,f=a.url,markupRead='\n    <li class="news-card__item">\n      <div class="news-card__foto">\n        <img src="'.concat(l,'" alt="').concat(u,'" class="news-card__image">\n        <div class="news-card__category">\n        ').concat(o,'\n        </div>\n        <button class="news-card__favorite-button" data-news-id="').concat(i,'">\n        Add to favorite <svg width="13" height="12" class="news-card__favorite-icon">\n        <use href="').concat(n(d),'#icon-favorite"></use></svg>\n         </button>\n      </div>\n      <div class="news-card__description">\n        <h2 class="news-card__title">').concat(i,'</h2>\n        <p class="news-card__abstract">\n        ').concat(c,'\n        </p>\n      </div>\n      <div class="news-card__container">\n        <div class="news-card__date">\n          ').concat(s,'\n        </div>\n      <a href="').concat(f,'" target="_blank" rel="noreferrer noopener nofollow" class="news-card__read-more" data-news-id="').concat(i,'">\n        Read more\n      </a>\n    </div>\n  </li>\n  '))))}))}))}();
//# sourceMappingURL=read.7fe8e8c5.js.map
