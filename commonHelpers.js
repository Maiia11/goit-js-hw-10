import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as y}from"./assets/vendor-d07556bb.js";const n=document.querySelector("[data-start]"),c=document.querySelector("#datetime-picker"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let s=null,o;n.disabled=!0;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0],console.log(o),o<Date.now()?y.error({message:"Please choose a date in the future",position:"topRight",color:"#ef4040",messageColor:"#fff",timeout:"2000"}):n.disabled=!1}};n.addEventListener("click",q);function q(){o&&(s=setInterval(()=>{const e=o-new Date;if(e<=0){g();return}const a=C(e);i(a)},1e3),c.disabled=!0,n.disabled=!0)}function r(t){return String(t).padStart(2,"0")}function C(t){const d=r(Math.floor(t/864e5)),l=r(Math.floor(t%864e5/36e5)),m=r(Math.floor(t%864e5%36e5/6e4)),f=r(Math.floor(t%864e5%36e5%6e4/1e3));return{days:d,hours:l,minutes:m,seconds:f}}function g(){clearInterval(s),i(time),s=null,c.disabled=!1,n.disabled=!1}function i({days:t,hours:e,minutes:a,seconds:u}){p.textContent=`${t}`,S.textContent=`${e}`,D.textContent=`${a}`,b.textContent=`${u}`}h(c,T);
//# sourceMappingURL=commonHelpers.js.map