!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequire2cb1;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequire2cb1=o),o.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"03q4W":"read.604f6a7f.js","aJDWo":"defaultimage.febeee97.jpg","iBapZ":"icons.4066d7ef.svg","akuFj":"default_hidden.b7ff1915.png","aRedu":"read.4900b433.js"}')),o("cs7FV"),o("iyKjn"),o("fhI4F");document.getElementsByClassName(".accordion__active");function c(){document.querySelectorAll(".accordion__wrap").forEach((function(e){e.querySelector(".accordion__active").addEventListener("click",(function(){e.classList.toggle("active")}))}))}c();var i,s=o("dDDEV");i=o("aNJCr").getBundleURL("03q4W")+o("iE7OH").resolve("iBapZ");var d;d=o("aNJCr").getBundleURL("03q4W")+o("iE7OH").resolve("akuFj");var l;l=o("aNJCr").getBundleURL("03q4W")+o("iE7OH").resolve("aJDWo");var u=o("6Xgi0"),f=(u=o("6Xgi0"),document.querySelector(".container__read")),v=document.querySelector(".accordion"),_=JSON.parse(localStorage.getItem("readList"))||[],g=JSON.parse(localStorage.getItem("favoriteList"))||[];f.addEventListener("click",(function(e){(0,u.checkFavorites)(g)})),f.addEventListener("click",(function(e){var n=e.target;n.classList.contains("news-card__favorite-button")?(console.log("this is favorire"),function(e){var n=e.target.closest(".news-card__favorite-button"),r=n.dataset.newsId,a=JSON.parse(localStorage.getItem("readList"))||[],o=JSON.parse(localStorage.getItem("favoriteList"))||[],c=o.findIndex((function(e){return e.title===r})),s=-1===c;if(s){var d=a.find((function(e){return e.title===r}));o.push(d)}else o.splice(c,1);localStorage.setItem("favoriteList",JSON.stringify(o)),n.textContent=s?"Remove from favorite":"Add to favorite",function(e,n){var r="".concat(t(i),e?"#icon-heart":"#icon-favorite"),a=document.createElement("svg");a.classList.add("news-card__favorite-icon"),a.setAttribute("width","13"),a.setAttribute("height","12");var o=document.createElement("use");o.setAttribute("href",r),a.appendChild(o),n.insertAdjacentHTML("beforeend",a.outerHTML)}(s,n)}(e)):n.classList.contains("news-card__read-more")&&console.log("news-card__read-more")}));var p,h,m=_.map((function(e){var n,r,a=new Date(e.readAt),o="".concat(a.getDate().toString().padStart(2,"0"),"/").concat((a.getMonth()+1).toString().padStart(2,"0"),"/").concat(a.getFullYear()),c=new Date(e.published_date),i="".concat(c.getDate().toString().padStart(2,"0"),"/").concat((c.getMonth()+1).toString().padStart(2,"0"),"/").concat(c.getFullYear()),d=e.multimedia,u=void 0===d?[]:d,f=u&&(null===(n=u[2])||void 0===n?void 0:n.url)?u[2].url:t(l),v=u&&(null===(r=u[2])||void 0===r?void 0:r.caption)?u[2].caption:"Default Image";return t(s)({},e,{readAt:o,published_date:i,imageUrl:f,imageAlt:v})}));!function(){f.insertAdjacentHTML("beforeEnd",_&&0!==_.length?"":'\n    <div class="page-empty">\n    <h2 class="page-empty__text">You don\'t have any read news</h2>\n    <img src="'.concat(t(d),'" alt="You have not read news" class="page-empty__img">\n    </div>'));var e=new Set;m.forEach((function(t){var n=t.readAt;e.add(n)}));var n=Array.from(e).map((function(e){return'\n              <div class="accordion__wrap">\n                  <div class="accordion__active">\n                    <div class="read__date">'.concat(e,'</div>\n                    <svg class="accordion_icon" width="15" height="9">\n                      <use href="').concat(t(i),'#icon-vector-down"></use>\n                    </svg>\n                  </div>\n                  <hr class="accordion__line">\n                  <div class="content">\n                    <div class="news-card">\n                      <ul class="news-card__image-container">\n                      </ul>\n                    </div>\n                  </div>\n              </div>\n          ')})).reverse().join("");v.insertAdjacentHTML("beforeEnd",n),c()}(),p=document.querySelectorAll(".read__date"),h=m.reduce((function(e,t){var n=t.readAt;return e[n]||(e[n]=[]),e[n].push(t),e}),{}),p.forEach((function(e){var n=e.textContent,r=h[n]||[],a=e.closest(".accordion__wrap").querySelector(".news-card__image-container");r.forEach((function(e){var r,o,c,s,d,l,u,f,v,_,g;e.readAt===n&&a.insertAdjacentHTML("beforeEnd",(o=(r=e).abstract,c=r.section,s=r.title,d=r.published_date,l=r.imageUrl,u=r.imageAlt,f=r.url,v=[].includes(s.toUpperCase()),_=v?"Remove from favorite":"Add to favorite",g=v?"icon-favorite":"icon-heart",'\n    <li class="news-card__item">\n      <div class="news-card__foto">\n        <img src="'.concat(l,'" alt="').concat(u,'" class="news-card__image">\n        <div class="news-card__category">\n        ').concat(c,'\n        </div>\n        <button class="news-card__favorite-button" data-news-id="').concat(s,'">').concat(_,'<svg width="13" height="12" class="news-card__favorite-icon">\n        <use href="').concat(t(i),"#").concat(g,'"></use></svg>\n         </button>\n      </div>\n      <div class="news-card__description">\n        <h2 class="news-card__title">').concat(s,'</h2>\n        <p class="news-card__abstract">\n        ').concat(o,'\n        </p>\n      </div>\n      <div class="news-card__container">\n        <div class="news-card__date">\n          ').concat(d,'\n        </div>\n      <a href="').concat(f,'" target="_blank" rel="noreferrer noopener nofollow" class="news-card__read-more" data-news-id="').concat(s,'">\n        Read more\n      </a>\n    </div>\n  </li>\n  ')))}))})),o("eTnbJ"),o("6Xgi0")}();
//# sourceMappingURL=read.604f6a7f.js.map
