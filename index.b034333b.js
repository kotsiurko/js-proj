!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("iE7OH").register(JSON.parse('{"EVgbq":"index.b034333b.js","lt8CZ":"default-photo.6a14a3a8.jpeg","5UbS1":"index.26ef3a0c.css","7nwxg":"library.03d33eee.js"}')),r("1h2Gi");var i,l=r("bpxeT"),o=r("dDDEV"),s=r("2TvXO"),u=r("1h2Gi"),c=r("l5bVx"),d=e(r("7jKnM")).template({1:function(t,n,a,r,i){var l,o=null!=n?n:t.nullContext||{},s=t.hooks.helperMissing,u="function",d=t.escapeExpression,p=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <li class="cards__item card" data-movieid="'+d((void 0===(l=null!=(l=p(a,"id")||(null!=n?p(n,"id"):n))?l:s)?"undefined":e(c)(l))===u?l.call(o,{name:"id",hash:{},data:i,loc:{start:{line:2,column:45},end:{line:2,column:51}}}):l)+'">\n    <a href="#">\n      <div class="card__img">\n        <img src="'+d((void 0===(l=null!=(l=p(a,"poster_path")||(null!=n?p(n,"poster_path"):n))?l:s)?"undefined":e(c)(l))===u?l.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:5,column:18},end:{line:5,column:33}}}):l)+'" alt="'+d((void 0===(l=null!=(l=p(a,"title")||(null!=n?p(n,"title"):n))?l:s)?"undefined":e(c)(l))===u?l.call(o,{name:"title",hash:{},data:i,loc:{start:{line:5,column:40},end:{line:5,column:49}}}):l)+'" />\n      </div>\n      <div class="card__info">\n        <h2 class="card__title">'+d((void 0===(l=null!=(l=p(a,"original_title")||(null!=n?p(n,"original_title"):n))?l:s)?"undefined":e(c)(l))===u?l.call(o,{name:"original_title",hash:{},data:i,loc:{start:{line:8,column:32},end:{line:8,column:50}}}):l)+'</h2>\n        <ul class="card__genres">'+d((void 0===(l=null!=(l=p(a,"genres")||(null!=n?p(n,"genres"):n))?l:s)?"undefined":e(c)(l))===u?l.call(o,{name:"genres",hash:{},data:i,loc:{start:{line:9,column:33},end:{line:9,column:43}}}):l)+'\n        </ul>\n        <span class="card__year">'+d((void 0===(l=null!=(l=p(a,"release_date")||(null!=n?p(n,"release_date"):n))?l:s)?"undefined":e(c)(l))===u?l.call(o,{name:"release_date",hash:{},data:i,loc:{start:{line:11,column:33},end:{line:11,column:49}}}):l)+"</span>\n      </div>\n    </a>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var i;return null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:15,column:9}}}))?i:""},useData:!0});i=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var p,m=r("4smAb"),f=r("2GCP7");p=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("lt8CZ");var g=document.querySelector(".cards"),h=document.querySelector("#search-form"),_=document.querySelector(".search-field"),v=document.querySelector(".js-warning"),b=document.querySelector(".js-search-results"),x=1,y="searched",w="trends",k=new(0,u.MovieDB);function C(){return(C=e(l)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),g.dataset.position=y,0!==n.target.elements.query.value.trim().length){e.next=8;break}return b.textContent="Please enter your request",setTimeout((function(){b.textContent=""}),3e3),n.currentTarget.reset(),e.abrupt("return");case 8:k.searchQuery=n.target.elements.query.value,E(1);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function E(e){return S.apply(this,arguments)}function S(){return(S=e(l)(e(s).mark((function t(n){var a,r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.fetchSearch(n);case 3:if(a=e.sent.data,r=a.page,i=a.total_pages,q(r,i),_.value="",0!==a.results.length){e.next=12;break}return v.textContent="Search result not successful. Enter the correct movie name and try again",setTimeout((function(){v.textContent=""}),3e3),e.abrupt("return");case 12:return O(a.results),e.abrupt("return",a);case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}function T(){return H.apply(this,arguments)}function H(){return(H=e(l)(e(s).mark((function t(){var n,a,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.dataset.position=w,e.prev=1,e.next=4,k.fetchTrendMovies(x);case 4:return n=e.sent.data,a=n.page,r=n.total_pages,q(a,r),n&&(0,m.loaderRender)(),O(n.results),e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}function O(t){var n=t.map((function(t){var n=t.genre_ids.map((function(t){return e(i).genres.map((function(e){if(e.id===t)return e.name})).join("")})),a="";n.length<4&&(a=n.join(", ")),n.length>=4&&(a=n.slice(0,2).join(", ")+", Other"),0===t.genre_ids.length&&(a="Other");var r="",l=e(p);r=null!==t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):l;var s=(0,f.numberConverter)(t.vote_average);return e(o)({},t,{poster_path:r,genres:a,release_date:t.release_date.slice(0,4),vote_average:s})}));g.innerHTML=d(n)}function q(e,t){var n="",a=e-1,r=e+1,i=e+2;x=e,e>1&&(n+='<li class="pagination__item slider-arrow prev">&#129144</li>',n+='<li class="pagination__item">1</li>'),e>4&&(n+='<li class="pagination__item dots">...</li>'),e>3&&(n+='<li class="pagination__item">'.concat(e-2,"</li>")),e>2&&(n+='<li class="pagination__item">'.concat(a,"</li>")),n+='<li class="pagination__item pagination__item--current">'.concat(e,"</li>"),t-1>e&&(n+='<li class="pagination__item">'.concat(r,"</li>")),t-2>e&&(n+='<li class="pagination__item">'.concat(i,"</li>")),t-3>e&&(n+='<li class="pagination__item dots">...</li>'),t>e&&(n+='<li class="pagination__item">'.concat(t,"</li>"),n+='<li class="pagination__item slider-arrow next">&#129146</li>'),j.innerHTML=n}T(),h.addEventListener("submit",(function(e){return C.apply(this,arguments)}));var j=document.querySelector(".pagination__list");function M(){return(M=e(l)(e(s).mark((function t(n){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("LI"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:if("..."!==n.target.textContent){e.next=4;break}return e.abrupt("return");case 4:if("🡸"!==n.target.textContent){e.next=12;break}if(window.scrollTo(0,0),g.dataset.position!==w){e.next=9;break}return T(x-=1).then((function(e){O(e.results),q(e.page,e.total_pages)})),e.abrupt("return");case 9:if(g.dataset.position!==y){e.next=12;break}return E(x-=1).then((function(e){O(e.results),q(e.page,e.total_pages)})),e.abrupt("return");case 12:if("🡺"!==n.target.textContent){e.next=20;break}if(window.scrollTo(0,0),g.dataset.position!==w){e.next=17;break}return T(x+=1).then((function(e){O(e.results),q(e.page,e.total_pages)})),e.abrupt("return");case 17:if(g.dataset.position!==y){e.next=20;break}return E(x+=1).then((function(e){O(e.results),q(e.page,e.total_pages)})),e.abrupt("return");case 20:if(a=Number(n.target.textContent),x=a,window.scrollTo(0,0),g.dataset.position!==w){e.next=26;break}return T(x).then((function(e){O(e.results),q(e.page,e.total_pages)})),e.abrupt("return");case 26:if(g.dataset.position!==y){e.next=29;break}return E(x).then((function(e){O(e.results),q(e.page,e.total_pages)})),e.abrupt("return");case 29:case"end":return e.stop()}}),t)})))).apply(this,arguments)}j.addEventListener("click",(function(e){return M.apply(this,arguments)})),r("3PkEy"),r("ghnK3"),r("c01wF"),r("8zUhP"),r("2GCP7")}();
//# sourceMappingURL=index.b034333b.js.map
