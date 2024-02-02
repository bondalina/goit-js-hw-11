import{i as a,S as m}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f=document.querySelector(".search-form"),c=document.querySelector(".search-input"),u=document.querySelector(".gallery-list"),s=document.querySelector(".loader");f.addEventListener("submit",n=>{n.preventDefault();const o=c.value.trim();if(o===""){a.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}s.style.display="block",u.innerHTML="";const i=`https://pixabay.com/api/?key=36996517-56800863ae540be6945d0f4f2&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}setTimeout(()=>{u.innerHTML=e.hits.map(r=>`<li class="gallery-item">
                <a href="${r.largeImageURL}" data-lightbox="gallery" data-title="${r.tags}">
                <img class="img-item" src="${r.webformatURL}" alt="${r.tags}">
                </a>
                <ul class="image-properties">
                <li>Likes <br/>${r.likes}</li>
                <li>Views <br/>${r.views}</li>
                <li>Comments <br/>${r.comments}</li>
                <li>Downloads <br/>${r.downloads}</li>
                </ul>
                </li>`).join(""),c.value="",s.style.display="none",new m(".gallery a").refresh()},2e3)}).catch(e=>{console.error("There has been a problem with your fetch operation:",e),s.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
