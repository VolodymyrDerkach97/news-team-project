function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=t.parcelRequire2cb1;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequire2cb1=s),s.register("kV9l4",(function(e,t){var n=s("14MV6"),a=s("023a4"),r=s("5mU4k"),i=s("jcdIr"),o=s("hhGG0");const c=[{section:"admin",display_name:"Admin"},{section:"arts",display_name:"Arts"},{section:"automobiles",display_name:"Automobiles"},{section:"books",display_name:"Books"},{section:"briefing",display_name:"Briefing"},{section:"business",display_name:"Business"},{section:"climate",display_name:"Climate"},{section:"corrections",display_name:"Corrections"},{section:"crosswords & games",display_name:"Crosswords & Games"},{section:"education",display_name:"Education"},{section:"en español",display_name:"En Español"},{section:"fashion",display_name:"Fashion"},{section:"food",display_name:"Food"},{section:"guides",display_name:"Guides"},{section:"health",display_name:"Health"},{section:"home & garden",display_name:"Home & Garden"},{section:"home page",display_name:"Home Page"},{section:"job market",display_name:"Job Market"},{section:"lens",display_name:"Lens"},{section:"magazine",display_name:"Magazine"},{section:"movies",display_name:"Movies"},{section:"multimedia/photos",display_name:"Multimedia/Photos"},{section:"new york",display_name:"New York"},{section:"obituaries",display_name:"Obituaries"},{section:"opinion",display_name:"Opinion"},{section:"parenting",display_name:"Parenting"},{section:"podcasts",display_name:"Podcasts"},{section:"reader center",display_name:"Reader Center"},{section:"real estate",display_name:"Real Estate"},{section:"science",display_name:"Science"},{section:"smarter living",display_name:"Smarter Living"},{section:"sports",display_name:"Sports"},{section:"style",display_name:"Style"},{section:"sunday review",display_name:"Sunday Review"},{section:"t brand",display_name:"T Brand"},{section:"t magazine",display_name:"T Magazine"},{section:"technology",display_name:"Technology"},{section:"the learning network",display_name:"The Learning Network"},{section:"the upshot",display_name:"The Upshot"},{section:"the weekly",display_name:"The Weekly"},{section:"theater",display_name:"Theater"},{section:"times insider",display_name:"Times Insider"},{section:"today’s paper",display_name:"Today’s Paper"},{section:"travel",display_name:"Travel"},{section:"u.s.",display_name:"U.S."},{section:"universal",display_name:"Universal"},{section:"video",display_name:"Video"},{section:"well",display_name:"Well"},{section:"world",display_name:"World"},{section:"your money",display_name:"Your Money"}],d=new(0,n.default),l=document.querySelector(".categories__buttons");const u=document.querySelector(".news-card");l.addEventListener("click",(async function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.section;try{const e=await d.fetchCategories(t),n=(0,r.normalizeData)(e,"categories");u.setAttribute("data-page",t);const s=n.slice(0,8);u.innerHTML="",(0,a.renderCategories)(s),(0,i.checkFavorites)(s),(0,o.checkRead)(s)}catch(e){console.log(e)}}));!function(){let e=document.querySelectorAll(".categories__dropdown-header"),t=document.querySelectorAll(".categories__dropdown-item");function n(){this.parentElement.classList.toggle("is-active")}function a(){let e=this.innerText,t=this.closest(".categories__dropdown");t.querySelector("#dropdown-span").innerText=e,t.classList.remove("is-active")}e.forEach((e=>{e.addEventListener("click",n)})),t.forEach((e=>{e.addEventListener("click",a)}))}();const h=document.getElementById("dropdown-span"),m=window.innerWidth;function p(e){e.forEach((function(e){const t=document.createElement("button");t.classList.add("categories__dropdown-item"),t.dataset.section=e.section,t.innerText=e.display_name,document.querySelector(".categories__buttons .categories__dropdown-content").appendChild(t)}))}if(h.textContent=m<768?"Categories":"Other",m<768){p(c)}else{if(!(m<1268)){return void p(c.slice(6,c.length))}p(c.slice(4,c.length))}})),s.register("023a4",(function(t,n){var a,r,i,o;a=t.exports,r="renderCategories",i=function(){return w},Object.defineProperty(a,r,{get:i,set:o,enumerable:!0,configurable:!0});var c=s("kv2fh"),d=s("XAU1x"),l=s("fUIK9");const u=document.querySelector(".news-card");let h=1,m=1,p="",f=window.matchMedia("(min-width: 768px)"),v=window.matchMedia("(min-width: 1280px)");function w(t){const n=t[0].data_set;u.classList.contains("search")?u.classList.remove("search"):u.classList.contains("popular")&&u.classList.remove("popular"),u.classList.add(n);let a=[];const s=function(){try{const e=localStorage.getItem("favoriteList");return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}();s.length&&(a=s.map((({id:e})=>e.toUpperCase())));const r=`<ul class="news-card__image-container">${t.map((({abstract:t,section:n,title:s,published_date:r,multimedia:i=[],url:o})=>{const l=a.includes(s.toUpperCase()),u=l?"Remove from favorite":"Add to favorite",f=l?"icon-heart":"icon-favorite",v=i&&i[2]?.url?i[2].url:e(c),w=i&&i[2]?.caption?i[2].caption:"Default Image";return p=h===m?'<li class="news-card__item"><div class="news-card__foto news-card__image"><div id=weather></div></li>':"",h++,`${p}\n  <li class="news-card__item">\n   <div class="news-card__foto">\n    <img src="${v}" alt="${w}" class="news-card__image">\n  <div class="news-card__category">\n   ${n}\n  </div>\n  <button class="news-card__favorite-button" data-news-id="${s}">${u}<svg width="13" height="12" class="news-card__favorite-icon">\n    <use href="${e(d)}#${f}"></use></svg>\n  </button>\n  </div>\n  <div class="news-card__description">\n  <h2 class="news-card__title">\n    ${s}\n  </h2>\n  <p class="news-card__abstract">\n    ${t}\n  </p>\n  </div>\n  <div class="news-card__container">\n  <div class="news-card__date">\n    ${function(e){return e.results.map((({published_date:e})=>{const t=new Date(`${e}`),n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0");return`${String(t.getDate()).padStart(2,"0")}/${a}/${n}`}))}({results:[{published_date:r}]})}\n  </div>\n  <a href="${o}" target="_blank" rel="noreferrer noopener nofollow" class="news-card__read-more" data-news-id="${s}">\n    Read more\n  </a>\n \n  </div>\n  </li>\n`})).join("")}\n    </ul>`;u.insertAdjacentHTML("beforeEnd",r),(0,l.fetchweather)()}!0===f.matches&&(m=2),!0===v.matches&&(m=3)})),s.register("kv2fh",(function(e,t){e.exports=new URL(s("kyEFX").resolve("7XZkW"),import.meta.url).toString()})),s.register("XAU1x",(function(e,t){e.exports=new URL(s("kyEFX").resolve("dCaos"),import.meta.url).toString()})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.7a8ea6b7.js","7XZkW":"defaultimage.febeee97.jpg","dCaos":"icons.4066d7ef.svg","eesMw":"index.7cf3c883.js","hmz2r":"read.23408996.js"}')),s("8FnLx");var r=s("kv2fh"),i=s("XAU1x"),o=s("fUIK9");const c=document.querySelector(".news-card");let d=1,l=1,u="",h=window.matchMedia("(min-width: 768px)"),m=window.matchMedia("(min-width: 1280px)");function p(t){const n=t[0].data_set;c.classList.contains("search")?c.classList.remove("search"):c.classList.contains("categories")&&c.classList.remove("categories"),c.classList.add(n);let a=[];const s=function(){try{const e=localStorage.getItem("favoriteList");return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}();s.length&&(a=s.map((({id:e})=>e.toUpperCase())));const h=`<ul class="news-card__image-container">${t.map((({abstract:t,section:n,title:s,published_date:o,multimedia:c=[],url:h})=>{const m=a.includes(s.toUpperCase()),p=m?"Remove from favorite":"Add to favorite",f=m?"icon-favorite":"icon-heart",v=c&&c[2]?.url?c[2].url:e(r),w=c&&c[2]?.caption?c[2].caption:"Default Image";return u=d===l?'<li class="news-card__item"><div class="news-card__foto news-card__image"><div id=weather></div></li>':"",d++,`${u}\n  <li class="news-card__item">\n   <div class="news-card__foto">\n    <img src="${v}" alt="${w}" class="news-card__image">\n  <div class="news-card__category">\n   ${n}\n  </div>\n  <button class="news-card__favorite-button" data-news-id="${s}">${p}<svg width="13" height="12" class="news-card__favorite-icon">\n    <use href="${e(i)}#${f}"></use></svg>\n\n  </button>\n  </div>\n  <div class="news-card__description">\n  <h2 class="news-card__title">\n    ${s}\n  </h2>\n  <p class="news-card__abstract">\n    ${t}\n  </p>\n  </div>\n  <div class="news-card__container">\n  <div class="news-card__date">\n    ${function(e){return e.results.map((({published_date:e})=>{const t=new Date(`${e}`),n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0");return`${String(t.getDate()).padStart(2,"0")}/${a}/${n}`}))}({results:[{published_date:o}]})}\n  </div>\n  <a href="${h}" target="_blank" rel="noreferrer noopener nofollow" class="news-card__read-more" data-news-id="${s}">\n    Read more\n  </a>\n \n  </div>\n  </li>\n`})).join("")}\n    </ul>`;c.insertAdjacentHTML("beforeEnd",h),(0,o.fetchweather)()}!0===h.matches&&(l=2),!0===m.matches&&(l=3);var f=s("14MV6");s("5mU4k");var v=s("jcdIr"),w=s("hhGG0");document.querySelector(".fetch"),new(0,f.default);document.querySelector(".news-card").addEventListener("click",(function(e){const t=e.target;t.classList.contains("news-card__favorite-button")?(0,v.addToFavorites)(e):t.classList.contains("news-card__read-more")&&(0,w.readMore)(e)})),s("lQ4c4"),s("Jj8Ku"),s("fzJJC"),s("fUIK9"),s("kV9l4");f=s("14MV6");var g=s("5mU4k");v=s("jcdIr"),w=s("hhGG0"),g=s("5mU4k"),g=s("5mU4k");s("6QiWo");var y=s("023a4");const _=document.getElementById("pagination"),b=document.querySelector(".page-container"),S=document.querySelector("button.next-page"),D=document.querySelector("button.prew-page"),q=document.querySelector(".news-card");window.addEventListener("load",(async function(e){e.preventDefault();try{const e=await M.fetchMostPopular(),t=e.results.length;$.totalPages=Math.ceil(t/L),n(e,"popular")}catch(e){console.log(e)}async function t(e){e>=2&&(L=9);try{if(q.classList.contains("popular")){n(await M.fetchMostPopular(),"popular",e)}if(q.classList.contains("search")){const t=q.getAttribute("data-page");n(await M.fetchSearch(t),"search",e)}if(q.classList.contains("categories")){const t=q.getAttribute("data-page");n(await M.fetchCategories(t),"categories",e)}}catch(e){console.log(e)}}function n(e,t,n){const a=(0,g.normalizeData)(e,t);if(n){const e=(n-1)*L,t=e+L,s=a.slice(e,t);q.innerHTML="",(0,y.renderCategories)(s),(0,v.checkFavorites)(s),(0,w.checkRead)(s)}else{const e=a.slice(0,L);q.innerHTML="",p(e),(0,v.checkFavorites)(e),(0,w.checkRead)(e)}}function a(){const{totalPages:e,curPage:t,numLinksTwoSide:n}=$,a=n+4;let r="",i="",o='<li class="pg-item"><a class="pg-link">...</a></li>',c=0;const d=t-n,l=t+n;let u="";for(let n=1;n<=e;n++)u=n===t?"active":"",e>=2*a-1?d>3&&l<e-3+1?n>=d&&n<=l&&(i+=s(n,u)):t<a&&n<=a||t>e-a&&n>=e-a+1||n===e||1===n?r+=s(n,u):(c++,1===c&&(r+=o)):r+=s(n,u);i?(i=s(1)+o+i+o+s(e),_.innerHTML=i):_.innerHTML=r}function s(e,t=""){return` <li class="pg-item ${t}" data-page="${e}">\n        <a class="pg-link" href="#">${e}</a>\n    </li>`}function r(){1===$.curPage?D.disabled=!0:D.disabled=!1}function i(){$.curPage===$.totalPages?S.disabled=!0:S.disabled=!1}a(),_.addEventListener("click",(e=>{const n=e.target;if(n.dataset.page){t(n.dataset.page);const s=parseInt(e.target.dataset.page);$.curPage=s,a(),r(),i(),window.scrollTo({top:0,behavior:"smooth"})}})),b.addEventListener("click",(function(e){var n;(n=e.target).classList.contains("first-page")?$.curPage=1:n.classList.contains("last-page")?$.curPage=$.totalPages:n.classList.contains("prew-page")?($.curPage--,r(),t($.curPage),window.scrollTo({top:0,behavior:"smooth"}),S.disabled=!1):n.classList.contains("next-page")&&($.curPage++,i(),t($.curPage),window.scrollTo({top:0,behavior:"smooth"}),D.disabled=!1),a()}))}));const M=new(0,f.default);let L=8;const k=window.matchMedia("(min-width: 1280px)"),E=window.matchMedia("(min-width: 767px) and (max-width: 1279px)"),x=window.matchMedia("(max-width: 766px)");k.matches?L=8:E.matches?L=7:x.matches&&(L=4);const $={curPage:1,numLinksTwoSide:1,totalPages:10};var C={};window,C=function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n.r(t);var a=[],s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=["January","February","March","April","May","June","July","August","September","October","November","December"],i={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function o(){}var c=["click","focusin","keydown","input"];function d(e){c.forEach((function(t){e.addEventListener(t,e===document?E:x)}))}function l(e){return Array.isArray(e)?e.map(l):"[object Object]"===L(e)?Object.keys(e).reduce((function(t,n){return t[n]=l(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),a=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[h(t,e,a),m(t,e,a),p(e,a)].join(""),a&&window.requestAnimationFrame((function(){q(!0,e)}))}function h(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year'+(t.disableYearOverlay?" qs-disabled-year-overlay":"")+'">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function m(e,t,n){var a=t.currentMonth,s=t.currentYear,r=t.dateSelected,i=t.maxDate,o=t.minDate,c=t.showAllDates,d=t.days,l=t.disabledDates,u=t.startDay,h=t.weekendIndices,m=t.events,p=t.getRange?t.getRange():{},f=+p.start,v=+p.end,w=b(new Date(e).setDate(1)),g=w.getDay()-u,y=g<0?7:0;w.setMonth(w.getMonth()+1),w.setDate(0);var _=w.getDate(),S=[],D=y+7*((g+_)/7|0);D+=(g+_)%7?7:0;for(var q=1;q<=D;q++){var M=(q-1)%7,L=d[M],k=q-(g>=0?g:7+g),E=new Date(s,a,k),x=m[+E],$=k<1||k>_,C=$?k<1?-1:1:0,P=$&&!c,T=P?"":E.getDate(),j=+E==+r,A=M===h[0]||M===h[1],O=f!==v,F="qs-square "+L;x&&!P&&(F+=" qs-event"),$&&(F+=" qs-outside-current-month"),!c&&$||(F+=" qs-num"),j&&(F+=" qs-active"),(l[+E]||t.disabler(E)||A&&t.noWeekends||o&&+E<+o||i&&+E>+i)&&!P&&(F+=" qs-disabled"),+b(new Date)==+E&&(F+=" qs-current"),+E===f&&v&&O&&(F+=" qs-range-start"),+E>f&&+E<v&&(F+=" qs-range-middle"),+E===v&&f&&O&&(F+=" qs-range-end"),P&&(F+=" qs-empty",T=""),S.push('<div class="'+F+'" data-direction="'+C+'">'+T+"</div>")}var Y=d.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(S);return Y.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),Y.push("</div>"),Y.join("")}function p(e,t){var n=e.overlayPlaceholder,a=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" inputmode="numeric" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return'<div class="qs-overlay-month" data-month-num="'+t+'">'+e+"</div>"})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+a+"</div>","</div>"].join("")}function f(e,t,n){var a=t.el,s=t.calendar.querySelector(".qs-active"),r=e.textContent,i=t.sibling;(a.disabled||a.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,r),s&&s.classList.remove("qs-active"),n||e.classList.add("qs-active"),w(a,t,n),n||S(t),i&&(v({instance:t,deselect:n}),t.first&&!i.dateSelected&&(i.currentYear=t.currentYear,i.currentMonth=t.currentMonth,i.currentMonthName=t.currentMonthName),u(t),u(i)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function v(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function w(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==o?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function g(e,t,n,a){n||a?(n&&(t.currentYear=+n),a&&(t.currentMonth=+a)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function y(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var a=e.positionedEl.getBoundingClientRect(),s=e.el.getBoundingClientRect(),r=e.calendarContainer.getBoundingClientRect(),i=s.top-a.top+(t?-1*r.height:s.height)+"px",o=s.left-a.left+(n?s.width-r.width:0)+"px";e.calendarContainer.style.setProperty("top",i),e.calendarContainer.style.setProperty("left",o)}}function _(e){return"[object Date]"===L(e)&&"Invalid Date"!==e.toString()}function b(e){if(_(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function S(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&("overlay"!==e.defaultView&&q(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function D(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),"overlay"===e.defaultView&&q(!1,e),y(e),e.onShow(e))}function q(e,t){var n=t.calendar,a=n.querySelector(".qs-overlay"),s=a.querySelector(".qs-overlay-year"),r=n.querySelector(".qs-controls"),i=n.querySelector(".qs-squares");e?(a.classList.add("qs-hidden"),r.classList.remove("qs-blur"),i.classList.remove("qs-blur"),s.value=""):(a.classList.remove("qs-hidden"),r.classList.add("qs-blur"),i.classList.add("qs-blur"),s.focus())}function M(e,t,n,a){var s=isNaN(+(new Date).setFullYear(t.value||void 0)),r=s?null:t.value;13===e.which||13===e.keyCode||"click"===e.type?a?g(null,n,r,a):s||t.classList.contains("qs-disabled")||g(null,n,r):n.calendar.contains(t)&&n.calendar.querySelector(".qs-submit").classList[s?"add":"remove"]("qs-disabled")}function L(e){return{}.toString.call(e)}function k(e){a.forEach((function(t){t!==e&&S(t)}))}function E(e){if(!e.__qs_shadow_dom){var t=e.which||e.keyCode,n=e.type,s=e.target,i=s.classList,o=a.filter((function(e){return e.calendar.contains(s)||e.el===s}))[0],c=o&&o.calendar.contains(s);if(!(o&&o.isMobile&&o.disableMobile))if("click"===n){if(!o)return a.forEach(S);if(o.disabled)return;var d=o.calendar,l=o.calendarContainer,h=o.disableYearOverlay,m=o.nonInput,p=d.querySelector(".qs-overlay-year"),v=!!d.querySelector(".qs-hidden"),w=d.querySelector(".qs-month-year").contains(s),y=s.dataset.monthNum;if(o.noPosition&&!c)(l.classList.contains("qs-hidden")?D:S)(o);else if(i.contains("qs-arrow"))g(i,o);else if(w||i.contains("qs-close"))h||q(!v,o);else if(y)M(e,p,o,y);else{if(i.contains("qs-disabled"))return;if(i.contains("qs-num")){var _=s.textContent,b=+s.dataset.direction,L=new Date(o.currentYear,o.currentMonth+b,_);if(b){o.currentYear=L.getFullYear(),o.currentMonth=L.getMonth(),o.currentMonthName=r[o.currentMonth],u(o);for(var E,x=o.calendar.querySelectorAll('[data-direction="0"]'),$=0;!E;){var C=x[$];C.textContent===_&&(E=C),$++}s=E}return void(+L==+o.dateSelected?f(s,o,!0):s.classList.contains("qs-disabled")||f(s,o))}i.contains("qs-submit")?M(e,p,o):m&&s===o.el&&(D(o),k(o))}}else if("focusin"===n&&o)D(o),k(o);else if("keydown"===n&&9===t&&o)S(o);else if("keydown"===n&&o&&!o.disabled){var P=!o.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===t&&P&&c?M(e,s,o):27===t&&P&&c&&q(!0,o)}else if("input"===n){if(!o||!o.calendar.contains(s))return;var T=o.calendar.querySelector(".qs-submit"),j=s.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);s.value=j,T.classList[4===j.length?"remove":"add"]("qs-disabled")}}}function x(e){E(e),e.__qs_shadow_dom=!0}function $(e,t){c.forEach((function(n){e.removeEventListener(n,t)}))}function C(){D(this)}function P(){S(this)}function T(e,t){var n=b(e),a=this.currentYear,s=this.currentMonth,r=this.sibling;if(null==e)return this.dateSelected=void 0,w(this.el,this,!0),r&&(v({instance:this,deselect:!0}),u(r)),u(this),this;if(!_(e))throw new Error("`setDate` needs a JavaScript Date object.");if(this.disabledDates[+n]||n<this.minDate||n>this.maxDate)throw new Error("You can't manually set a date that's disabled.");this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),w(this.el,this),r&&(v({instance:this}),u(r));var i=a===n.getFullYear()&&s===n.getMonth();return i||t?u(this,n):i||u(this,new Date(a,s,1)),this}function j(e){return O(this,e,!0)}function A(e){return O(this,e)}function O(e,t,n){var a=e.dateSelected,s=e.first,r=e.sibling,i=e.minDate,o=e.maxDate,c=b(t),d=n?"Min":"Max";function l(){return"original"+d+"Date"}function h(){return d.toLowerCase()+"Date"}function m(){return"set"+d}function p(){throw new Error("Out-of-range date passed to "+m())}if(null==t)e[l()]=void 0,r?(r[l()]=void 0,n?(s&&!a||!s&&!r.dateSelected)&&(e.minDate=void 0,r.minDate=void 0):(s&&!r.dateSelected||!s&&!a)&&(e.maxDate=void 0,r.maxDate=void 0)):e[h()]=void 0;else{if(!_(t))throw new Error("Invalid date passed to "+m());r?((s&&n&&c>(a||o)||s&&!n&&c<(r.dateSelected||i)||!s&&n&&c>(r.dateSelected||o)||!s&&!n&&c<(a||i))&&p(),e[l()]=c,r[l()]=c,(n&&(s&&!a||!s&&!r.dateSelected)||!n&&(s&&!r.dateSelected||!s&&!a))&&(e[h()]=c,r[h()]=c)):((n&&c>(a||o)||!n&&c<(a||i))&&p(),e[h()]=c)}return r&&u(r),u(e),e}function F(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function Y(){var e=this.shadowDom,t=this.positionedEl,n=this.calendarContainer,s=this.sibling,r=this;this.inlinePosition&&(a.some((function(e){return e!==r&&e.positionedEl===t}))||t.style.setProperty("position",null)),n.remove(),a=a.filter((function(e){return e!==r})),s&&delete s.sibling,a.length||$(document,E);var i=a.some((function(t){return t.shadowDom===e}));for(var o in e&&!i&&$(e,x),this)delete this[o];a.length||c.forEach((function(e){document.removeEventListener(e,E)}))}function R(e,t){var n=new Date(e);if(!_(n))throw new Error("Invalid date passed to `navigate`");this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),u(this),t&&this.onMonthChange(this)}function I(){var e=!this.calendarContainer.classList.contains("qs-hidden"),t=!this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");e&&q(t,this)}t.default=function(e,t){var n=function(e,t){var n,c,d=function(e){var t=l(e);t.events&&(t.events=t.events.reduce((function(e,t){if(!_(t))throw new Error('"options.events" must only contain valid JavaScript Date objects.');return e[+b(t)]=!0,e}),{})),["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var n=t[e];if(n&&!_(n))throw new Error('"options.'+e+'" needs to be a valid JavaScript Date object.');t[e]=b(n)}));var n=t.position,r=t.maxDate,c=t.minDate,d=t.dateSelected,u=t.overlayPlaceholder,h=t.overlayButton,m=t.startDay,p=t.id;if(t.startDate=b(t.startDate||d||new Date),t.disabledDates=(t.disabledDates||[]).reduce((function(e,t){var n=+b(t);if(!_(t))throw new Error('You supplied an invalid date to "options.disabledDates".');if(n===+b(d))throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');return e[n]=1,e}),{}),t.hasOwnProperty("id")&&null==p)throw new Error("`id` cannot be `null` or `undefined`");if(null!=p){var f=a.filter((function(e){return e.id===p}));if(f.length>1)throw new Error("Only two datepickers can share an id.");f.length?(t.second=!0,t.sibling=f[0]):t.first=!0}var v=["tr","tl","br","bl","c"].some((function(e){return n===e}));if(n&&!v)throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');function w(e){throw new Error('"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".')}if(t.position=function(e){var t=e[0],n=e[1],a={};return a[i[t]]=1,n&&(a[i[n]]=1),a}(n||"bl"),r<c)throw new Error('"maxDate" in options is less than "minDate".');if(d&&(c>d&&w("min"),r<d&&w()),["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof t[e]&&(t[e]=o)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,n){var a=t[e],s=n?12:7;if(a){if(!Array.isArray(a)||a.length!==s||a.some((function(e){return"string"!=typeof e})))throw new Error('"'+e+'" must be an array with '+s+" strings.");t[n?n<2?"months":"overlayMonths":"days"]=a}})),m&&m>0&&m<7){var g=(t.customDays||s).slice(),y=g.splice(0,m);t.customDays=g.concat(y),t.startDay=+m,t.weekendIndices=[g.length-1,g.length]}else t.startDay=0,t.weekendIndices=[6,0];"string"!=typeof u&&delete t.overlayPlaceholder,"string"!=typeof h&&delete t.overlayButton;var S=t.defaultView;if(S&&"calendar"!==S&&"overlay"!==S)throw new Error('options.defaultView must either be "calendar" or "overlay".');return t.defaultView=S||"calendar",t}(t||{startDate:b(new Date),position:"bl",defaultView:"calendar"}),u=e;if("string"==typeof u)u="#"===u[0]?document.getElementById(u.slice(1)):document.querySelector(u);else{if("[object ShadowRoot]"===L(u))throw new Error("Using a shadow DOM as your selector is not supported.");for(var h,m=u.parentNode;!h;){var p=L(m);"[object HTMLDocument]"===p?h=!0:"[object ShadowRoot]"===p?(h=!0,n=m,c=m.host):m=m.parentNode}}if(!u)throw new Error("No selector / element found.");if(a.some((function(e){return e.el===u})))throw new Error("A datepicker already exists on that element.");var f=u===document.body,v=n?u.parentElement||n:f?document.body:u.parentElement,g=n?u.parentElement||c:v,y=document.createElement("div"),S=document.createElement("div");y.className="qs-datepicker-container qs-hidden",S.className="qs-datepicker";var q={shadowDom:n,customElement:c,positionedEl:g,el:u,parent:v,nonInput:"INPUT"!==u.nodeName,noPosition:f,position:!f&&d.position,startDate:d.startDate,dateSelected:d.dateSelected,disabledDates:d.disabledDates,minDate:d.minDate,maxDate:d.maxDate,noWeekends:!!d.noWeekends,weekendIndices:d.weekendIndices,calendarContainer:y,calendar:S,currentMonth:(d.startDate||d.dateSelected).getMonth(),currentMonthName:(d.months||r)[(d.startDate||d.dateSelected).getMonth()],currentYear:(d.startDate||d.dateSelected).getFullYear(),events:d.events||{},defaultView:d.defaultView,setDate:T,remove:Y,setMin:j,setMax:A,show:C,hide:P,navigate:R,toggleOverlay:I,onSelect:d.onSelect,onShow:d.onShow,onHide:d.onHide,onMonthChange:d.onMonthChange,formatter:d.formatter,disabler:d.disabler,months:d.months||r,days:d.customDays||s,startDay:d.startDay,overlayMonths:d.overlayMonths||(d.months||r).map((function(e){return e.slice(0,3)})),overlayPlaceholder:d.overlayPlaceholder||"4-digit year",overlayButton:d.overlayButton||"Submit",disableYearOverlay:!!d.disableYearOverlay,disableMobile:!!d.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!d.alwaysShow,id:d.id,showAllDates:!!d.showAllDates,respectDisabledReadOnly:!!d.respectDisabledReadOnly,first:d.first,second:d.second};if(d.sibling){var M=d.sibling,k=q,E=M.minDate||k.minDate,x=M.maxDate||k.maxDate;k.sibling=M,M.sibling=k,M.minDate=E,M.maxDate=x,k.minDate=E,k.maxDate=x,M.originalMinDate=E,M.originalMaxDate=x,k.originalMinDate=E,k.originalMaxDate=x,M.getRange=F,k.getRange=F}d.dateSelected&&w(u,q);var $=getComputedStyle(g).position;f||$&&"static"!==$||(q.inlinePosition=!0,g.style.setProperty("position","relative"));var O=a.filter((function(e){return e.positionedEl===q.positionedEl}));return O.some((function(e){return e.inlinePosition}))&&(q.inlinePosition=!0,O.forEach((function(e){e.inlinePosition=!0}))),y.appendChild(S),v.appendChild(y),q.alwaysShow&&D(q),q}(e,t);if(a.length||d(document),n.shadowDom&&(a.some((function(e){return e.shadowDom===n.shadowDom}))||d(n.shadowDom)),a.push(n),n.second){var c=n.sibling;v({instance:n,deselect:!n.dateSelected}),v({instance:c,deselect:!c.dateSelected}),u(c)}return u(n,n.startDate||n.dateSelected),n.alwaysShow&&y(n),n}}]).default;f=s("14MV6"),g=s("5mU4k"),v=s("jcdIr"),w=s("hhGG0"),i=s("XAU1x"),r=s("kv2fh"),o=s("fUIK9");const P=document.querySelector(".news-card");let T=1,j=1,A="",O=window.matchMedia("(min-width: 768px)"),F=window.matchMedia("(min-width: 1280px)");function Y(t){const n=t[0].data_set;P.classList.contains("popular")&&P.classList.remove("popular"),P.classList.contains("categories")&&P.classList.remove("categories"),P.classList.add(n);let a=[];const s=function(){try{const e=localStorage.getItem("favoriteList");return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}();s.length&&(a=s.map((({id:e})=>e.toUpperCase())));const c=`<ul class="news-card__image-container">${t.map((({abstract:t,section:n,title:s,published_date:o,multimedia:c=[],url:d})=>{const l=a.includes(s.toUpperCase()),u=l?"Remove from favorite":"Add to favorite",h=l?"icon-favorite":"icon-heart",m=c&&c[1]&&c[1]&&c[2]?.url?"https://www.nytimes.com/"+c[2].url||"https://www.nytimes.com/"+c[1]||"https://www.nytimes.com/"+c[0]:e(r),p=c&&c[2]?.caption?c[2].caption:"Default Image";return A=T===j?'<li class="news-card__item"><div class="news-card__foto news-card__image"><div id=weather></div></li>':"",T++,`${A}\n  <li class="news-card__item">\n   <div class="news-card__foto">\n    <img src="${m}" alt="${p}" class="news-card__image">\n  <div class="news-card__category">\n   ${n}\n  </div>\n  <button class="news-card__favorite-button" data-news-id="${s}">${u}<svg width="13" height="12" class="news-card__favorite-icon">\n  <use href="${e(i)}#${h}"></use></svg>\n  </button>\n  </div>\n  <div class="news-card__description">\n  <h2 class="news-card__title">\n    ${s}\n  </h2>\n  <p class="news-card__abstract">\n    ${t}\n  </p>\n  </div>\n  <div class="news-card__container">\n  <div class="news-card__date">\n    ${function(e){const t=e.results.map((({published_date:e})=>{const t=new Date(`${e}`),n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0");return`${String(t.getDate()).padStart(2,"0")}/${a}/${n}`}));return t}({results:[{published_date:o}]})}\n  </div>\n  <a href="${d}" target="_blank" rel="noreferrer noopener nofollow" class="news-card__read-more" data-news-id="${s}">\n    Read more\n  </a>\n  <div class="news-card__overlay" style="display: none">Already read</div>\n  </div>\n  </li>\n`})).join("")}\n    </ul>`;P.insertAdjacentHTML("beforeEnd",c),(0,o.fetchweather)()}!0===O.matches&&(j=2),!0===F.matches&&(j=3);const R=document.querySelector("#datepicker");let I=new Date,U=`${I.getDate().toString().padStart(2,"0")}/${(I.getMonth()+1).toString().padStart(2,"0")}/${I.getFullYear()}`;R.value=U;let H={maxDate:new Date,formatter:(e,t,n)=>{const a=new Date(t),s=a.getFullYear(),r=a.getMonth()+1,i=a.getDate();e.value=`${i.toString().padStart(2,"0")}/${r.toString().padStart(2,"0")}/${s}`;!async function(e){try{const t=await V.fetchByDate(e),n=(0,g.normalizeData)(t,"search");J.setAttribute("data-page",e);const a=n.slice(0,8);J.innerHTML="",Y(a),(0,v.checkFavorites)(a),(0,w.checkRead)(a)}catch(e){console.log(e)}}(`${s}${r.toString().padStart(2,"0")}${i.toString().padStart(2,"0")}`)},customDays:["Su","Mo","Tu","We","Th","Fr","Sa"],startDay:1,position:"br",onShow:()=>{!0===window.matchMedia("(min-width: 768px)").matches&&(document.querySelector(".arrow-down").style.display="none",document.querySelector(".arrow-up").style.display="block"),document.querySelector(".callend-off").style.display="none",document.querySelector(".callend-on").style.display="block",R.classList.add("datepicker-selected"),R.style.border="1px solid #4440F6"},onHide:()=>{!0===window.matchMedia("(min-width: 768px)").matches&&(document.querySelector(".arrow-down").style.display="block",document.querySelector(".arrow-up").style.display="none"),document.querySelector(".callend-off").style.display="block",document.querySelector(".callend-on").style.display="none",R.classList.remove("datepicker-selected"),R.style.border="1px solid #111"}};const N=C(R,H);function B(e){e.stopPropagation(),N.show()}document.querySelector(".callend-on").addEventListener("click",B),document.querySelector(".callend-off").addEventListener("click",B),document.querySelector(".arrow-down").addEventListener("click",B),document.querySelector(".arrow-up").addEventListener("click",B);const V=new(0,f.default);const J=document.querySelector(".news-card");s("3Ux8r"),s("68eTU");document.querySelector(".btn-scroll").addEventListener("click",(()=>window.scrollTo({top:0,behavior:"smooth"})));
//# sourceMappingURL=index.7a8ea6b7.js.map
