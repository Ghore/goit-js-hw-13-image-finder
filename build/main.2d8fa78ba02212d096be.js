(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{MV5A:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("x3Br"),n("JBxO"),n("FdtR");var i={query:"",pageNumber:1,buttomPosition:0,baseUrl:"https://pixabay.com/api/",key:"16056306-b774bb8eb3846f9eca7b7b057",fetchImages:function(){var t="?image_type=photo&orientation=horizontal&q="+this.query+"&page="+this.pageNumber+"&per_page=12&key="+this.key;return fetch(this.baseUrl+t).then((function(t){return t.json()}))}},o={searchForm:document.querySelector("#searchForm"),articleList:document.querySelector(".gallery"),loadMore:document.querySelector('button[date-action="load-more"]')};function a(t){i.buttomPosition=o.articleList.getBoundingClientRect().bottom,i.pageNumber+=1,i.fetchImages().then((function(t){var e=s(t.hits);o.articleList.insertAdjacentHTML("beforeend",e)}))}function s(t){return t.reduce((function(t,e){return t+'<li class="photo-card">\n<img src='+e.webformatURL+' alt="" data-bigfoto='+e.largeImageURL+' />\n<div class="stats">\n  <p class="stats-item">\n    <i class="material-icons">thumb_up</i>\n    '+e.likes+'\n  </p>\n  <p class="stats-item">\n    <i class="material-icons">visibility</i>\n    '+e.views+'\n  </p>\n  <p class="stats-item">\n    <i class="material-icons">comment</i>\n    '+e.comments+'\n  </p>\n  <p class="stats-item">\n    <i class="material-icons">cloud_download</i>\n   '+e.downloads+"\n  </p>\n</div>\n</li>"}),"")}o.searchForm.addEventListener("submit",(function(t){t.preventDefault(),i.pageNumber=1,i.query=t.currentTarget.elements.query.value,i.fetchImages().then((function(t){var e=s(t.hits);o.articleList.innerHTML=e}))})),o.loadMore.addEventListener("click",a),o.loadMore.addEventListener("click",(function(){window.scrollTo({top:i.buttomPosition,left:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){if(!(document.documentElement.getBoundingClientRect().bottom<document.documentElement.clientHeight+10))return;a()}));n("MV5A")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.2d8fa78ba02212d096be.js.map