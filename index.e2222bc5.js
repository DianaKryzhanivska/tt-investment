!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t={form:document.querySelector(".hero-form"),investInput:document.getElementById("invest"),profitInput:document.getElementById("profit"),investSum:document.querySelector(".invest-sum"),profitSum:document.querySelector(".profit-sum"),paymentSum:document.querySelector(".payment-sum"),bonusSum:document.querySelector(".bonus-sum")};t.form.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("name").value.trim(),o=document.getElementById("surname").value.trim(),n=document.getElementById("phone").value.trim(),r=document.getElementById("email").value.trim();if(t&&o&&n&&r){if(/^(\+?380|\+?38|\(?0)\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(n)){if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){var i={name:t,surname:o,phone:n,email:r};console.log(i),alert("Дані успішно відправлені.")}else alert("Будь ласка, введіть коректну адресу електронної пошти")}else alert("Будь ласка, введіть коректний номер телефону. Наприклад, +380501234567 або +38(050)123-45-67")}else alert("Будь ласка, заповніть всі поля форми.")}));t.investInput.addEventListener("input",(function(e){var o=parseFloat(e.target.value);t.investSum.textContent=o.toLocaleString();var n=7.5*o;t.profitInput.value=n,t.profitSum.textContent=n.toLocaleString();var r=.05*n;t.bonusSum.textContent=r.toFixed(2).toLocaleString();var i=n+r;t.paymentSum.textContent=i.toLocaleString()})),t.profitInput.addEventListener("input",(function(e){var o=parseFloat(e.target.value);t.profitSum.textContent=o.toLocaleString();var n=o/7.5;t.investInput.value=n,t.investSum.textContent=n.toLocaleString();var r=.05*o;t.bonusSum.textContent=r.toFixed(2).toLocaleString();var i=o+r;t.paymentSum.textContent=i.toLocaleString()}));var o={};e(o,"disableBodyScroll",(function(){return p})),e(o,"clearAllBodyScrollLocks",(function(){return g})),e(o,"enableBodyScroll",(function(){return b}));var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],d=!1,u=-1,a=void 0,c=void 0,s=void 0,m=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},v=function(e){var t=e||window.event;return!!m(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},f=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},y=function(){if(void 0!==c){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=c.position,document.body.style.top=c.top,document.body.style.left=c.left,window.scrollTo(t,e),c=void 0}},p=function(e,t){if(e){if(!l.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(l),[o]),i?window.requestAnimationFrame((function(){if(void 0===c){c={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-u;!m(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?v(e):e.stopPropagation())}(t,e)},d||(document.addEventListener("touchmove",v,n?{passive:!1}:void 0),d=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},g=function(){i&&(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),d&&(document.removeEventListener("touchmove",v,n?{passive:!1}:void 0),d=!1),u=-1),i?y():f(),l=[]},b=function(e){e?(l=l.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,d&&0===l.length&&(document.removeEventListener("touchmove",v,n?{passive:!1}:void 0),d=!1)),i?y():f()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},h=document.querySelector(".menu-container"),S=document.querySelector(".burger-button"),w=document.querySelector(".menu-container .close-button"),E=document.querySelectorAll(".nav-list-mobile .nav-item-mobile"),L=function(){var e="true"===S.getAttribute("aria-expanded");S.setAttribute("aria-expanded",!e),h.classList.toggle("is-open"),o[e?"enableBodyScroll":"disableBodyScroll"](document.body)};S.addEventListener("click",L),w.addEventListener("click",L),E.forEach((function(e){e.addEventListener("click",L)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(h.classList.remove("is-open"),S.setAttribute("aria-expanded","false"),disableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.e2222bc5.js.map
