import{i as c}from"./vendor-BbbuE1sJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const l=t=>c.show({position:"topRight",timeout:4e3,close:!1,progressBar:!1,backgroundColor:"#fd5548",title:"",icon:!1,message:`
      <div class="custom-error-toast" style="color: #fff;">
        <span class="toast-icon"></span>
        <span class="toast-message">${t}</span>
      </div>
    `}),f=t=>c.show({position:"topRight",timeout:4e3,close:!1,progressBar:!1,backgroundColor:"#3bcd8d",title:"",icon:!1,message:`
      <div class="custom-success-toast" style="color: #fff;">
        <span class="toast-icon"></span>
        <span class="toast-message">${t}</span>
      </div>
    `});export{l as e,f as s};
//# sourceMappingURL=izi-toast-Dql4GTvY.js.map
