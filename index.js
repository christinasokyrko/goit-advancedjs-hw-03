import{S as d,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const f="50555446-a2cf9db12dc2e06100b3b332c",m="https://pixabay.com/api/";async function u(s){const r=`${m}?key=${f}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(r);if(!e.ok)throw new Error("Network response was not ok");return(await e.json()).hits}const l=document.getElementById("gallery");function p(s){const r=s.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item" title="${e.tags}">
      <img src="${e.webformatURL}" alt="${e.tags}" />
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${e.likes}</p>
        <p class="info-item"><b>Views:</b> ${e.views}</p>
        <p class="info-item"><b>Comments:</b> ${e.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </a>
  `).join("");l.insertAdjacentHTML("beforeend",r)}function g(){l.innerHTML=""}const y=document.getElementById("search-form"),h=document.getElementById("search-input"),c=document.getElementById("loader");document.getElementById("gallery");const b=new d(".gallery a");y.addEventListener("submit",async s=>{s.preventDefault();const r=h.value.trim();if(!r){a.warning({message:"Поле пошуку не може бути порожнім!",position:"topRight"});return}c.classList.remove("hidden"),g();try{const e=await u(r);e.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(p(e),b.refresh())}catch(e){a.error({message:"Сталася помилка при отриманні зображень",position:"topRight"}),console.error(e)}finally{c.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
