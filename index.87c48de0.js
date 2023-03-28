!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire2cb1;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire2cb1=r),r.register("9Di7p",(function(t,n){var a,o=r("bpxeT"),i=r("2TvXO"),s=r("8IsH3"),c=r("gYhl5"),l=r("1oyu9"),d=r("4MvEs"),u=r("jIMBh"),h=[{section:"admin",display_name:"Admin"},{section:"arts",display_name:"Arts"},{section:"automobiles",display_name:"Automobiles"},{section:"books",display_name:"Books"},{section:"briefing",display_name:"Briefing"},{section:"business",display_name:"Business"},{section:"climate",display_name:"Climate"},{section:"corrections",display_name:"Corrections"},{section:"crosswords & games",display_name:"Crosswords & Games"},{section:"education",display_name:"Education"},{section:"en español",display_name:"En Español"},{section:"fashion",display_name:"Fashion"},{section:"food",display_name:"Food"},{section:"guides",display_name:"Guides"},{section:"health",display_name:"Health"},{section:"home & garden",display_name:"Home & Garden"},{section:"home page",display_name:"Home Page"},{section:"job market",display_name:"Job Market"},{section:"lens",display_name:"Lens"},{section:"magazine",display_name:"Magazine"},{section:"movies",display_name:"Movies"},{section:"multimedia/photos",display_name:"Multimedia/Photos"},{section:"new york",display_name:"New York"},{section:"obituaries",display_name:"Obituaries"},{section:"opinion",display_name:"Opinion"},{section:"parenting",display_name:"Parenting"},{section:"podcasts",display_name:"Podcasts"},{section:"reader center",display_name:"Reader Center"},{section:"real estate",display_name:"Real Estate"},{section:"science",display_name:"Science"},{section:"smarter living",display_name:"Smarter Living"},{section:"sports",display_name:"Sports"},{section:"style",display_name:"Style"},{section:"sunday review",display_name:"Sunday Review"},{section:"t brand",display_name:"T Brand"},{section:"t magazine",display_name:"T Magazine"},{section:"technology",display_name:"Technology"},{section:"the learning network",display_name:"The Learning Network"},{section:"the upshot",display_name:"The Upshot"},{section:"the weekly",display_name:"The Weekly"},{section:"theater",display_name:"Theater"},{section:"times insider",display_name:"Times Insider"},{section:"today’s paper",display_name:"Today’s Paper"},{section:"travel",display_name:"Travel"},{section:"u.s.",display_name:"U.S."},{section:"universal",display_name:"Universal"},{section:"video",display_name:"Video"},{section:"well",display_name:"Well"},{section:"world",display_name:"World"},{section:"your money",display_name:"Your Money"}],p=new(0,s.default),m=document.querySelector(".categories__buttons"),f=document.querySelector(".news-card");m.addEventListener("click",(a=e(o)(e(i).mark((function t(n){var a,r,o,s;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.target.dataset.section,console.dir(a),e.prev=2,e.next=5,p.fetchCategories(a);case 5:r=e.sent,console.log(r),o=(0,l.default)(r),s=o.slice(0,9),f.innerHTML="",(0,c.renderArticle)(s),(0,d.checkFavorites)(s),(0,u.checkRead)(s),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),t,null,[[2,15]])}))),function(e){return a.apply(this,arguments)}));!function(){var e=document.querySelectorAll(".categories__dropdown-header"),t=document.querySelectorAll(".categories__dropdown-item");function n(){this.parentElement.classList.toggle("is-active")}function a(){var e=this.innerText,t=this.closest(".categories__dropdown");t.querySelector("#dropdown-span").innerText=e,t.classList.remove("is-active")}e.forEach((function(e){e.addEventListener("click",n)})),t.forEach((function(e){e.addEventListener("click",a)}))}();var v=document.getElementById("dropdown-span"),y=window.innerWidth;function g(e){e.forEach((function(e){var t=document.createElement("button");t.classList.add("categories__dropdown-item"),t.dataset.section=e.section,t.innerText=e.display_name,document.querySelector(".categories__buttons .categories__dropdown-content").appendChild(t)}))}return v.textContent=y<768?"Categories":"Other",y<768?void g(h):y<1268?void g(h.slice(4,h.length)):void g(h.slice(6,h.length))})),r.register("gYhl5",(function(t,n){var a,o,i,s;a=t.exports,o="renderArticle",i=function(){return u},Object.defineProperty(a,o,{get:i,set:s,enumerable:!0,configurable:!0});var c=r("bevTS"),l=r("1HrBC"),d=document.querySelector(".news-card");function u(t){var n=[],a=function(){try{var e=localStorage.getItem("favoriteList");return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}();a.length&&(n=a.map((function(e){return e.id.toUpperCase()})));var r='<ul class="news-card__image-container">'.concat(t.map((function(t){var a,r,o=t.abstract,i=t.section,s=t.title,d=t.published_date,u=t.multimedia,h=void 0===u?[]:u,p=t.url,m=n.includes(s.toUpperCase()),f=m?"Remove from favorite":"Add to favorite",v=m?"icon-favorite":"icon-heart",y=h&&(null===(a=h[2])||void 0===a?void 0:a.url)?h[2].url:e(c),g=h&&(null===(r=h[2])||void 0===r?void 0:r.caption)?h[2].caption:"Default Image";return'\n  <li class="news-card__item">\n   <div class="news-card__foto">\n    <img src="'.concat(y,'" alt="').concat(g,'" class="news-card__image">\n  <div class="news-card__category">\n   ').concat(i,'\n  </div>\n  <button class="news-card__favorite-button" data-news-id="').concat(s,'">').concat(f,'<svg width="13" height="12" class="news-card__favorite-icon">\n    <use href="').concat(e(l),"#").concat(v,'"></use></svg>\n\n  </button>\n  </div>\n  <div class="news-card__description">\n  <h2 class="news-card__title">\n    ').concat(s,'\n  </h2>\n  <p class="news-card__abstract">\n    ').concat(o,'\n  </p>\n  </div>\n  <div class="news-card__container">\n  <div class="news-card__date">\n    ').concat(function(e){return e.results.map((function(e){var t=e.published_date,n=new Date("".concat(t)),a=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),o=String(n.getDate()).padStart(2,"0");return"".concat(o,"/").concat(r,"/").concat(a)}))}({results:[{published_date:d}]}),'\n  </div>\n  <a href="').concat(p,'" target="_blank" rel="noreferrer noopener nofollow" class="news-card__read-more" data-news-id="').concat(s,'">\n    Read more\n  </a>\n \n  </div>\n  </li>\n')})).join(""),"\n    </ul>");d.insertAdjacentHTML("beforeEnd",r)}})),r.register("bevTS",(function(e,t){e.exports=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("aJDWo")})),r.register("1HrBC",(function(e,t){e.exports=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("iBapZ")})),r("iE7OH").register(JSON.parse('{"EVgbq":"index.87c48de0.js","aJDWo":"defaultimage.febeee97.jpg","iBapZ":"icons.e743a472.svg","6Ukj4":"index.2a550c3f.js","aRedu":"read.971b63cc.js","ep4Vl":"read.c37ece96.js"}')),r("cs7FV"),r("gYhl5");var o=r("8IsH3");r("1oyu9");var i=r("4MvEs"),s=r("jIMBh");document.querySelector(".fetch"),new(0,o.default);document.querySelector(".news-card").addEventListener("click",(function(e){var t=e.target;t.classList.contains("news-card__favorite-button")?(0,i.addToFavorites)(e):t.classList.contains("news-card__read-more")&&(0,s.readMore)(e)})),r("6TJuu"),r("iyKjn"),r("fhI4F");var c="edcdf24847596a8bc6f71c1052f5a8e5",l=40.778793,d=-73.966587;!function(){function e(e,t,n){var a="https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(n);fetch(a).then((function(e){return e.json()})).then((function(e){var t=e.name,n=Math.round(e.main.temp-273.15),a=e.weather[0].main,r=e.weather[0].description,o=(e.weather[0].icon,(new Date).toLocaleString("en-US",{weekday:"short"})),i=(new Date).toLocaleString("en-US",{day:"numeric"}),s=(new Date).toLocaleString("en-US",{month:"short"}),c=(new Date).toLocaleString("en-US",{year:"numeric"}),l='\n        <div id = "weather__header">\n          <div id = "weather__degree">'.concat(n,'&#186; </div>\n            <div id = "weather__description">\n              <div id = "weather__cloud">\n                  ').concat(a,' \n              </div>\n              <div id = "weather__location">\n                <div>\n                  <svg width="18" height="23" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M7.00001 0.125C5.35957 0.126935 3.78688 0.779452 2.62692 1.93941C1.46696 3.09938 0.814442 4.67207 0.812507 6.3125C0.810542 7.65306 1.24843 8.95725 2.05901 10.025C2.05901 10.025 2.22776 10.2472 2.25532 10.2793L7.00001 15.875L11.7469 10.2764C11.7717 10.2466 11.941 10.025 11.941 10.025L11.9416 10.0233C12.7517 8.95603 13.1894 7.65245 13.1875 6.3125C13.1856 4.67207 12.5331 3.09938 11.3731 1.93941C10.2131 0.779452 8.64044 0.126935 7.00001 0.125ZM7.00001 8.5625C6.555 8.5625 6.11998 8.43054 5.74997 8.18331C5.37996 7.93607 5.09157 7.58467 4.92128 7.17354C4.75098 6.7624 4.70642 6.31 4.79324 5.87355C4.88006 5.43709 5.09435 5.03618 5.40902 4.72151C5.72368 4.40684 6.1246 4.19255 6.56105 4.10573C6.99751 4.01892 7.44991 4.06347 7.86104 4.23377C8.27218 4.40407 8.62358 4.69246 8.87081 5.06247C9.11805 5.43248 9.25001 5.86749 9.25001 6.3125C9.24926 6.90901 9.01197 7.48087 8.59017 7.90267C8.16838 8.32446 7.59652 8.56176 7.00001 8.5625Z" fill="white"/>\n                  </svg>\n                </div>\n                <div>\n                  ').concat(t,'\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <img id = "weather__image" src="').concat("https://openweathermap.org/img/wn/04n@2x.png",'" alt="').concat(r,'" />\n        <div id = "weather__time">').concat(o,"<br />").concat(i," ").concat(s," ").concat(c,"</div>");document.querySelector("#weather").innerHTML=l})).catch((function(e){return console.log(e)}))}navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e(t.coords.latitude,t.coords.longitude,c)}),(function(t){e(l,d,c)})):(console.log("Geolocation is not supported by this browser."),e(l,d,c))}(),r("9Di7p");var u=r("bpxeT"),h=r("2TvXO"),p=(o=r("8IsH3"),r("gYhl5")),m=r("1oyu9"),f=(i=r("4MvEs"),s=r("jIMBh"),m=r("1oyu9"),document.getElementById("pagination")),v=document.querySelector(".page-container"),y=document.querySelector("button.next-page"),g=document.querySelector("button.prew-page"),w=document.querySelector(".news-card");window.addEventListener("load",(function(e){return E.apply(this,arguments)}));var b=new(0,o.default),S=9,_=window.matchMedia("(min-width: 1280px)"),D=window.matchMedia("(min-width: 767px) and (max-width: 1279px)"),q=window.matchMedia("(max-width: 766px)");console.log("desktopWidth ",_),console.log("tabletWidth ",D),console.log("mobileWidth ",q),_.matches?S=8:D.matches?S=7:q.matches&&(S=4);var M={curPage:1,numLinksTwoSide:1,totalPages:10};function E(){return E=e(u)(e(h).mark((function t(n){var a,r,o,c,l,d,_,D,q,E,L;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(e){return d.apply(this,arguments)},d=function(){return(d=e(u)(e(h).mark((function t(n){var a,r,o,i,s;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.fetchArtic();case 3:a=e.sent,r=(0,m.default)(a),i=(o=(n-1)*S)+S,s=r.slice(o,i),w.innerHTML="",(0,p.renderArticle)(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)},_=function(){for(var e=M.totalPages,t=M.curPage,n=M.numLinksTwoSide,a=n+4,r="",o="",i='<li class="pg-item"><a class="pg-link">...</a></li>',s=0,c=t-n,l=t+n,d="",u=1;u<=e;u++)d=u===t?"active":"",e>=2*a-1?c>3&&l<e-3+1?u>=c&&u<=l&&(o+=D(u,d)):t<a&&u<=a||t>e-a&&u>=e-a+1||u===e||1===u?r+=D(u,d):1===++s&&(r+=i):r+=D(u,d);o?(o=D(1)+i+o+i+D(e),f.innerHTML=o):f.innerHTML=r},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return' <li class="pg-item '.concat(t,'" data-page="').concat(e,'">\n        <a class="pg-link" href="#">').concat(e,"</a>\n    </li>")},q=function(e){e.classList.contains("first-page")?M.curPage=1:e.classList.contains("last-page")?M.curPage=M.totalPages:e.classList.contains("prew-page")?(M.curPage--,E(),l(M.curPage),window.scrollTo({top:0,behavior:"smooth"}),y.disabled=!1):e.classList.contains("next-page")&&(M.curPage++,L(),l(M.curPage),window.scrollTo({top:0,behavior:"smooth"}),g.disabled=!1),_()},E=function(){1===M.curPage?g.disabled=!0:g.disabled=!1},L=function(){M.curPage===M.totalPages?y.disabled=!0:y.disabled=!1},n.preventDefault(),t.prev=8,t.next=11,b.fetchMostPopular();case 11:a=t.sent,r=a.results.length,M.totalPages=Math.ceil(r/S),o=(0,m.normalizationPopular)(a),c=o.slice(0,S),w.innerHTML="",(0,p.renderArticle)(c),(0,i.checkFavorites)(c),(0,s.checkRead)(c),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(8),console.log(t.t0);case 25:_(),f.addEventListener("click",(function(e){var t=e.target;if(t.dataset.page){l(t.dataset.page);var n=parseInt(e.target.dataset.page);M.curPage=n,_(M),E(),L(),window.scrollTo({top:0,behavior:"smooth"})}})),v.addEventListener("click",(function(e){q(e.target)}));case 35:case"end":return t.stop()}}),t,null,[[8,22]])}))),E.apply(this,arguments)}var L={};window,L=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=[],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["January","February","March","April","May","June","July","August","September","October","November","December"],i={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function s(){}var c=["click","focusin","keydown","input"];function l(e){c.forEach((function(t){e.addEventListener(t,e===document?x:k)}))}function d(e){return Array.isArray(e)?e.map(d):"[object Object]"===E(e)?Object.keys(e).reduce((function(t,n){return t[n]=d(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),a=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[h(t,e,a),p(t,e,a),m(e,a)].join(""),a&&window.requestAnimationFrame((function(){q(!0,e)}))}function h(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year'+(t.disableYearOverlay?" qs-disabled-year-overlay":"")+'">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function p(e,t,n){var a=t.currentMonth,r=t.currentYear,o=t.dateSelected,i=t.maxDate,s=t.minDate,c=t.showAllDates,l=t.days,d=t.disabledDates,u=t.startDay,h=t.weekendIndices,p=t.events,m=t.getRange?t.getRange():{},f=+m.start,v=+m.end,y=S(new Date(e).setDate(1)),g=y.getDay()-u,w=g<0?7:0;y.setMonth(y.getMonth()+1),y.setDate(0);var b=y.getDate(),_=[],D=w+7*((g+b)/7|0);D+=(g+b)%7?7:0;for(var q=1;q<=D;q++){var M=(q-1)%7,E=l[M],L=q-(g>=0?g:7+g),x=new Date(r,a,L),k=p[+x],C=L<1||L>b,P=C?L<1?-1:1:0,T=C&&!c,j=T?"":x.getDate(),O=+x==+o,H=M===h[0]||M===h[1],Y=f!==v,A="qs-square "+E;k&&!T&&(A+=" qs-event"),C&&(A+=" qs-outside-current-month"),!c&&C||(A+=" qs-num"),O&&(A+=" qs-active"),(d[+x]||t.disabler(x)||H&&t.noWeekends||s&&+x<+s||i&&+x>+i)&&!T&&(A+=" qs-disabled"),+S(new Date)==+x&&(A+=" qs-current"),+x===f&&v&&Y&&(A+=" qs-range-start"),+x>f&&+x<v&&(A+=" qs-range-middle"),+x===v&&f&&Y&&(A+=" qs-range-end"),T&&(A+=" qs-empty",j=""),_.push('<div class="'+A+'" data-direction="'+P+'">'+j+"</div>")}var F=l.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(_);return F.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),F.push("</div>"),F.join("")}function m(e,t){var n=e.overlayPlaceholder,a=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" inputmode="numeric" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return'<div class="qs-overlay-month" data-month-num="'+t+'">'+e+"</div>"})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+a+"</div>","</div>"].join("")}function f(e,t,n){var a=t.el,r=t.calendar.querySelector(".qs-active"),o=e.textContent,i=t.sibling;(a.disabled||a.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,o),r&&r.classList.remove("qs-active"),n||e.classList.add("qs-active"),y(a,t,n),n||_(t),i&&(v({instance:t,deselect:n}),t.first&&!i.dateSelected&&(i.currentYear=t.currentYear,i.currentMonth=t.currentMonth,i.currentMonthName=t.currentMonthName),u(t),u(i)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function v(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function y(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==s?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function g(e,t,n,a){n||a?(n&&(t.currentYear=+n),a&&(t.currentMonth=+a)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function w(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var a=e.positionedEl.getBoundingClientRect(),r=e.el.getBoundingClientRect(),o=e.calendarContainer.getBoundingClientRect(),i=r.top-a.top+(t?-1*o.height:r.height)+"px",s=r.left-a.left+(n?r.width-o.width:0)+"px";e.calendarContainer.style.setProperty("top",i),e.calendarContainer.style.setProperty("left",s)}}function b(e){return"[object Date]"===E(e)&&"Invalid Date"!==e.toString()}function S(e){if(b(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function _(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&("overlay"!==e.defaultView&&q(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function D(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),"overlay"===e.defaultView&&q(!1,e),w(e),e.onShow(e))}function q(e,t){var n=t.calendar,a=n.querySelector(".qs-overlay"),r=a.querySelector(".qs-overlay-year"),o=n.querySelector(".qs-controls"),i=n.querySelector(".qs-squares");e?(a.classList.add("qs-hidden"),o.classList.remove("qs-blur"),i.classList.remove("qs-blur"),r.value=""):(a.classList.remove("qs-hidden"),o.classList.add("qs-blur"),i.classList.add("qs-blur"),r.focus())}function M(e,t,n,a){var r=isNaN(+(new Date).setFullYear(t.value||void 0)),o=r?null:t.value;13===e.which||13===e.keyCode||"click"===e.type?a?g(null,n,o,a):r||t.classList.contains("qs-disabled")||g(null,n,o):n.calendar.contains(t)&&n.calendar.querySelector(".qs-submit").classList[r?"add":"remove"]("qs-disabled")}function E(e){return{}.toString.call(e)}function L(e){a.forEach((function(t){t!==e&&_(t)}))}function x(e){if(!e.__qs_shadow_dom){var t=e.which||e.keyCode,n=e.type,r=e.target,i=r.classList,s=a.filter((function(e){return e.calendar.contains(r)||e.el===r}))[0],c=s&&s.calendar.contains(r);if(!(s&&s.isMobile&&s.disableMobile))if("click"===n){if(!s)return a.forEach(_);if(s.disabled)return;var l=s.calendar,d=s.calendarContainer,h=s.disableYearOverlay,p=s.nonInput,m=l.querySelector(".qs-overlay-year"),v=!!l.querySelector(".qs-hidden"),y=l.querySelector(".qs-month-year").contains(r),w=r.dataset.monthNum;if(s.noPosition&&!c)(d.classList.contains("qs-hidden")?D:_)(s);else if(i.contains("qs-arrow"))g(i,s);else if(y||i.contains("qs-close"))h||q(!v,s);else if(w)M(e,m,s,w);else{if(i.contains("qs-disabled"))return;if(i.contains("qs-num")){var b=r.textContent,S=+r.dataset.direction,E=new Date(s.currentYear,s.currentMonth+S,b);if(S){s.currentYear=E.getFullYear(),s.currentMonth=E.getMonth(),s.currentMonthName=o[s.currentMonth],u(s);for(var x,k=s.calendar.querySelectorAll('[data-direction="0"]'),C=0;!x;){var P=k[C];P.textContent===b&&(x=P),C++}r=x}return void(+E==+s.dateSelected?f(r,s,!0):r.classList.contains("qs-disabled")||f(r,s))}i.contains("qs-submit")?M(e,m,s):p&&r===s.el&&(D(s),L(s))}}else if("focusin"===n&&s)D(s),L(s);else if("keydown"===n&&9===t&&s)_(s);else if("keydown"===n&&s&&!s.disabled){var T=!s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===t&&T&&c?M(e,r,s):27===t&&T&&c&&q(!0,s)}else if("input"===n){if(!s||!s.calendar.contains(r))return;var j=s.calendar.querySelector(".qs-submit"),O=r.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);r.value=O,j.classList[4===O.length?"remove":"add"]("qs-disabled")}}}function k(e){x(e),e.__qs_shadow_dom=!0}function C(e,t){c.forEach((function(n){e.removeEventListener(n,t)}))}function P(){D(this)}function T(){_(this)}function j(e,t){var n=S(e),a=this.currentYear,r=this.currentMonth,o=this.sibling;if(null==e)return this.dateSelected=void 0,y(this.el,this,!0),o&&(v({instance:this,deselect:!0}),u(o)),u(this),this;if(!b(e))throw new Error("`setDate` needs a JavaScript Date object.");if(this.disabledDates[+n]||n<this.minDate||n>this.maxDate)throw new Error("You can't manually set a date that's disabled.");this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),y(this.el,this),o&&(v({instance:this}),u(o));var i=a===n.getFullYear()&&r===n.getMonth();return i||t?u(this,n):i||u(this,new Date(a,r,1)),this}function O(e){return Y(this,e,!0)}function H(e){return Y(this,e)}function Y(e,t,n){var a=e.dateSelected,r=e.first,o=e.sibling,i=e.minDate,s=e.maxDate,c=S(t),l=n?"Min":"Max";function d(){return"original"+l+"Date"}function h(){return l.toLowerCase()+"Date"}function p(){return"set"+l}function m(){throw new Error("Out-of-range date passed to "+p())}if(null==t)e[d()]=void 0,o?(o[d()]=void 0,n?(r&&!a||!r&&!o.dateSelected)&&(e.minDate=void 0,o.minDate=void 0):(r&&!o.dateSelected||!r&&!a)&&(e.maxDate=void 0,o.maxDate=void 0)):e[h()]=void 0;else{if(!b(t))throw new Error("Invalid date passed to "+p());o?((r&&n&&c>(a||s)||r&&!n&&c<(o.dateSelected||i)||!r&&n&&c>(o.dateSelected||s)||!r&&!n&&c<(a||i))&&m(),e[d()]=c,o[d()]=c,(n&&(r&&!a||!r&&!o.dateSelected)||!n&&(r&&!o.dateSelected||!r&&!a))&&(e[h()]=c,o[h()]=c)):((n&&c>(a||s)||!n&&c<(a||i))&&m(),e[h()]=c)}return o&&u(o),u(e),e}function A(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function F(){var e=this.shadowDom,t=this.positionedEl,n=this.calendarContainer,r=this.sibling,o=this;this.inlinePosition&&(a.some((function(e){return e!==o&&e.positionedEl===t}))||t.style.setProperty("position",null)),n.remove(),a=a.filter((function(e){return e!==o})),r&&delete r.sibling,a.length||C(document,x);var i=a.some((function(t){return t.shadowDom===e}));for(var s in e&&!i&&C(e,k),this)delete this[s];a.length||c.forEach((function(e){document.removeEventListener(e,x)}))}function R(e,t){var n=new Date(e);if(!b(n))throw new Error("Invalid date passed to `navigate`");this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),u(this),t&&this.onMonthChange(this)}function N(){var e=!this.calendarContainer.classList.contains("qs-hidden"),t=!this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");e&&q(t,this)}t.default=function(e,t){var n=function(e,t){var n,c,l=function(e){var t=d(e);t.events&&(t.events=t.events.reduce((function(e,t){if(!b(t))throw new Error('"options.events" must only contain valid JavaScript Date objects.');return e[+S(t)]=!0,e}),{})),["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var n=t[e];if(n&&!b(n))throw new Error('"options.'+e+'" needs to be a valid JavaScript Date object.');t[e]=S(n)}));var n=t.position,o=t.maxDate,c=t.minDate,l=t.dateSelected,u=t.overlayPlaceholder,h=t.overlayButton,p=t.startDay,m=t.id;if(t.startDate=S(t.startDate||l||new Date),t.disabledDates=(t.disabledDates||[]).reduce((function(e,t){var n=+S(t);if(!b(t))throw new Error('You supplied an invalid date to "options.disabledDates".');if(n===+S(l))throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');return e[n]=1,e}),{}),t.hasOwnProperty("id")&&null==m)throw new Error("`id` cannot be `null` or `undefined`");if(null!=m){var f=a.filter((function(e){return e.id===m}));if(f.length>1)throw new Error("Only two datepickers can share an id.");f.length?(t.second=!0,t.sibling=f[0]):t.first=!0}var v=["tr","tl","br","bl","c"].some((function(e){return n===e}));if(n&&!v)throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');function y(e){throw new Error('"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".')}if(t.position=function(e){var t=e[0],n=e[1],a={};return a[i[t]]=1,n&&(a[i[n]]=1),a}(n||"bl"),o<c)throw new Error('"maxDate" in options is less than "minDate".');if(l&&(c>l&&y("min"),o<l&&y()),["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof t[e]&&(t[e]=s)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,n){var a=t[e],r=n?12:7;if(a){if(!Array.isArray(a)||a.length!==r||a.some((function(e){return"string"!=typeof e})))throw new Error('"'+e+'" must be an array with '+r+" strings.");t[n?n<2?"months":"overlayMonths":"days"]=a}})),p&&p>0&&p<7){var g=(t.customDays||r).slice(),w=g.splice(0,p);t.customDays=g.concat(w),t.startDay=+p,t.weekendIndices=[g.length-1,g.length]}else t.startDay=0,t.weekendIndices=[6,0];"string"!=typeof u&&delete t.overlayPlaceholder,"string"!=typeof h&&delete t.overlayButton;var _=t.defaultView;if(_&&"calendar"!==_&&"overlay"!==_)throw new Error('options.defaultView must either be "calendar" or "overlay".');return t.defaultView=_||"calendar",t}(t||{startDate:S(new Date),position:"bl",defaultView:"calendar"}),u=e;if("string"==typeof u)u="#"===u[0]?document.getElementById(u.slice(1)):document.querySelector(u);else{if("[object ShadowRoot]"===E(u))throw new Error("Using a shadow DOM as your selector is not supported.");for(var h,p=u.parentNode;!h;){var m=E(p);"[object HTMLDocument]"===m?h=!0:"[object ShadowRoot]"===m?(h=!0,n=p,c=p.host):p=p.parentNode}}if(!u)throw new Error("No selector / element found.");if(a.some((function(e){return e.el===u})))throw new Error("A datepicker already exists on that element.");var f=u===document.body,v=n?u.parentElement||n:f?document.body:u.parentElement,g=n?u.parentElement||c:v,w=document.createElement("div"),_=document.createElement("div");w.className="qs-datepicker-container qs-hidden",_.className="qs-datepicker";var q={shadowDom:n,customElement:c,positionedEl:g,el:u,parent:v,nonInput:"INPUT"!==u.nodeName,noPosition:f,position:!f&&l.position,startDate:l.startDate,dateSelected:l.dateSelected,disabledDates:l.disabledDates,minDate:l.minDate,maxDate:l.maxDate,noWeekends:!!l.noWeekends,weekendIndices:l.weekendIndices,calendarContainer:w,calendar:_,currentMonth:(l.startDate||l.dateSelected).getMonth(),currentMonthName:(l.months||o)[(l.startDate||l.dateSelected).getMonth()],currentYear:(l.startDate||l.dateSelected).getFullYear(),events:l.events||{},defaultView:l.defaultView,setDate:j,remove:F,setMin:O,setMax:H,show:P,hide:T,navigate:R,toggleOverlay:N,onSelect:l.onSelect,onShow:l.onShow,onHide:l.onHide,onMonthChange:l.onMonthChange,formatter:l.formatter,disabler:l.disabler,months:l.months||o,days:l.customDays||r,startDay:l.startDay,overlayMonths:l.overlayMonths||(l.months||o).map((function(e){return e.slice(0,3)})),overlayPlaceholder:l.overlayPlaceholder||"4-digit year",overlayButton:l.overlayButton||"Submit",disableYearOverlay:!!l.disableYearOverlay,disableMobile:!!l.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!l.alwaysShow,id:l.id,showAllDates:!!l.showAllDates,respectDisabledReadOnly:!!l.respectDisabledReadOnly,first:l.first,second:l.second};if(l.sibling){var M=l.sibling,L=q,x=M.minDate||L.minDate,k=M.maxDate||L.maxDate;L.sibling=M,M.sibling=L,M.minDate=x,M.maxDate=k,L.minDate=x,L.maxDate=k,M.originalMinDate=x,M.originalMaxDate=k,L.originalMinDate=x,L.originalMaxDate=k,M.getRange=A,L.getRange=A}l.dateSelected&&y(u,q);var C=getComputedStyle(g).position;f||C&&"static"!==C||(q.inlinePosition=!0,g.style.setProperty("position","relative"));var Y=a.filter((function(e){return e.positionedEl===q.positionedEl}));return Y.some((function(e){return e.inlinePosition}))&&(q.inlinePosition=!0,Y.forEach((function(e){e.inlinePosition=!0}))),w.appendChild(_),v.appendChild(w),q.alwaysShow&&D(q),q}(e,t);if(a.length||l(document),n.shadowDom&&(a.some((function(e){return e.shadowDom===n.shadowDom}))||l(n.shadowDom)),a.push(n),n.second){var c=n.sibling;v({instance:n,deselect:!n.dateSelected}),v({instance:c,deselect:!c.dateSelected}),u(c)}return u(n,n.startDate||n.dateSelected),n.alwaysShow&&w(n),n}}]).default;var x=document.querySelector("#datepicker"),k=new Date,C="".concat(k.getDate().toString().padStart(2,"0"),"/").concat((k.getMonth()+1).toString().padStart(2,"0"),"/").concat(k.getFullYear());x.value=C;var P={formatter:function(e,t,n){var a=new Date(t),r=a.getFullYear(),o=a.getMonth()+1,i=a.getDate();e.value="".concat(i.toString().padStart(2,"0"),"/").concat(o.toString().padStart(2,"0"),"/").concat(r);var s="".concat(r).concat(o.toString().padStart(2,"0")).concat(i.toString().padStart(2,"0"));console.log("data for your function ".concat(s)),document.querySelector("#hidden-picker").value=s},customDays:["Su","Mo","Tu","We","Th","Fr","Sa"],startDay:1,position:"br",onShow:function(){document.querySelector(".arrow-down").style.display="none",document.querySelector(".arrow-up").style.display="block",document.querySelector(".callend-off").style.display="none",document.querySelector(".callend-on").style.display="block",x.classList.add("datepicker-selected"),x.style.border="1px solid #4440F6"},onHide:function(){document.querySelector(".arrow-down").style.display="block",document.querySelector(".arrow-up").style.display="none",document.querySelector(".callend-off").style.display="block",document.querySelector(".callend-on").style.display="none",x.classList.remove("datepicker-selected"),x.style.border="1px solid #111"}},T=L(x,P);function j(e){e.stopPropagation(),T.show()}document.querySelector(".callend-on").addEventListener("click",j),document.querySelector(".callend-off").addEventListener("click",j),document.querySelector(".arrow-down").addEventListener("click",j),document.querySelector(".arrow-up").addEventListener("click",j),r("erjjb"),r("352g9"),document.querySelector(".btn-scroll").addEventListener("click",(function(){return window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.87c48de0.js.map
