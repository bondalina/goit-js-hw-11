import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=document.querySelector(".search-form"),m=document.querySelector(".search-input"),a=document.querySelector(".gallery-list");u.addEventListener("submit",s=>{s.preventDefault();const r=m.value.trim();if(r===""){l.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}a.innerHTML="";const o=`https://pixabay.com/api/?key=36996517-56800863ae540be6945d0f4f2&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(o).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(e.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}a.innerHTML=e.hits.map(t=>`
        
          <li class="gallery-item">
            <a href="${t.largeImageURL}" data-lightbox="gallery" data-title="${t.tags}">
                <img class="img-item" src="${t.webformatURL}" alt="${t.tags}">
            </a>
            <ul class="image-properties">
                <li>Likes <br/>${t.likes}</li>
                <li>Views <br/>${t.views}</li>
                <li>Comments <br/>${t.comments}</li>
                <li>Downloads <br/>${t.downloads}</li>
            </ul>
          </li>`).join(""),new c(".gallery a")}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})});
//# sourceMappingURL=commonHelpers.js.map
