import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-d07556bb.js";const r=document.querySelector(".form");r.addEventListener("submit",m);function m(t){t.preventDefault();let o=t.target.elements.delay.value,a=t.target.elements.state.value;(()=>new Promise((e,i)=>{setTimeout(()=>{a==="fulfilled"?e(`✅ Fulfilled promise in ${o}ms`):i(`❌ Rejected promise in ${o}ms`)},o)}))().then(e=>s.info({message:e,backgroundColor:"#59a10d",messageColor:"#fff",timeout:"2000"})).catch(e=>s.info({message:e,backgroundColor:"#ef4040",messageColor:"#fff",timeout:"2000"})),r.reset()}
//# sourceMappingURL=commonHelpers2.js.map
