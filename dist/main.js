(()=>{var n={917:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var i=t(537),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,"*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video  {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.1;\n}\n\na {\n    text-decoration: none;\n    background-color: transparent;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nmain, article, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nimg {\n    border-style: none;\n}\n\nbutton, input {\n    overflow: visible;\n}\n\nabbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n}\n\nstrong, b {\n    font-weight: bolder;\n}","",{version:3,sources:["webpack://./src/reset.css"],names:[],mappings:"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;CACC,gBAAgB;AACjB;;AAEA;;CAEC,cAAc;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;AACvB",sourcesContent:["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video  {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.1;\n}\n\na {\n    text-decoration: none;\n    background-color: transparent;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nmain, article, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nimg {\n    border-style: none;\n}\n\nbutton, input {\n    overflow: visible;\n}\n\nabbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n}\n\nstrong, b {\n    font-weight: bolder;\n}"],sourceRoot:""}]);const s=a},426:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var i=t(537),r=t.n(i),o=t(645),a=t.n(o)()(r());a.push([n.id,"* {\n  font-size: 1.2rem;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5rem;\n  gap: 2rem;\n  background-color: rgb(167, 139, 97);\n}\n\nbody > div:first-child {\n  visibility: hidden;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transition: opacity 0.3s ease-in;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.overlay {\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.form-sec {\n  background-color: rgb(127, 193, 196);\n  width: 25rem;\n  height: auto;\n  padding-top: 0.1rem;\n}\n\n.form-sec > div {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  gap: 0.5rem;\n}\n\n.form-sec > div:first-child {\n  border: 2px solid white;\n  border-radius: 50%;\n  padding: 0 0.3rem;\n  width: fit-content;\n  margin-left: auto;\n  font-size: 2rem;\n  text-align: right;\n  cursor: pointer;\n}\n\n.form-sec > div:first-child:hover {\n  color: crimson;\n}\n\n.form-sec > button {\n  margin: 2rem 0;\n  margin-left: 45%;\n}\n\n.main-sec {\n  visibility: hidden;\n  opacity: 0;\n  transition:\n    transform 0.3s ease-in,\n    opacity 0.3s ease-in;\n  z-index: 2;\n}\n\n.main-sec.active {\n  visibility: visible;\n  opacity: 1;\n  transform: scale(1.1);\n}\n\nbody > div:last-child {\n  position: relative;\n}\n\nimg {\n  position: absolute;\n  visibility: hidden;\n  bottom: 15rem;\n  left: -5rem;\n  width: 10rem;\n  height: 10rem;\n  opacity: 0;\n  transition:\n    opacity 1s ease-in-out,\n    transform 1s ease-in-out;\n}\n\n.high-five {\n  visibility: visible;\n  opacity: 1;\n  transform: scale(2);\n  z-index: 10;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,UAAU;EACV,gCAAgC;EAChC,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV;;wBAEsB;EACtB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,aAAa;EACb,UAAU;EACV;;4BAE0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,mBAAmB;EACnB,WAAW;AACb",sourcesContent:["* {\n  font-size: 1.2rem;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5rem;\n  gap: 2rem;\n  background-color: rgb(167, 139, 97);\n}\n\nbody > div:first-child {\n  visibility: hidden;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transition: opacity 0.3s ease-in;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.overlay {\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.form-sec {\n  background-color: rgb(127, 193, 196);\n  width: 25rem;\n  height: auto;\n  padding-top: 0.1rem;\n}\n\n.form-sec > div {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  gap: 0.5rem;\n}\n\n.form-sec > div:first-child {\n  border: 2px solid white;\n  border-radius: 50%;\n  padding: 0 0.3rem;\n  width: fit-content;\n  margin-left: auto;\n  font-size: 2rem;\n  text-align: right;\n  cursor: pointer;\n}\n\n.form-sec > div:first-child:hover {\n  color: crimson;\n}\n\n.form-sec > button {\n  margin: 2rem 0;\n  margin-left: 45%;\n}\n\n.main-sec {\n  visibility: hidden;\n  opacity: 0;\n  transition:\n    transform 0.3s ease-in,\n    opacity 0.3s ease-in;\n  z-index: 2;\n}\n\n.main-sec.active {\n  visibility: visible;\n  opacity: 1;\n  transform: scale(1.1);\n}\n\nbody > div:last-child {\n  position: relative;\n}\n\nimg {\n  position: absolute;\n  visibility: hidden;\n  bottom: 15rem;\n  left: -5rem;\n  width: 10rem;\n  height: 10rem;\n  opacity: 0;\n  transition:\n    opacity 1s ease-in-out,\n    transform 1s ease-in-out;\n}\n\n.high-five {\n  visibility: visible;\n  opacity: 1;\n  transform: scale(2);\n  z-index: 10;\n}\n"],sourceRoot:""}]);const s=a},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(a[A]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},537:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(r," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],s=0;s<n.length;s++){var A=n[s],c=i.base?A[0]+i.base:A[0],l=o[c]||0,d="".concat(c," ").concat(l);o[c]=l+1;var u=t(d),m={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var p=r(m,i);i.byIndex=s,e.splice(s,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var A=i(n,r),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=A}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},594:(n,e,t)=>{var i={"./star.png":339};function r(n){var e=o(n);return t(e)}function o(n){if(!t.o(i,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return i[n]}r.keys=function(){return Object.keys(i)},r.resolve=o,n.exports=r,r.id=594},339:(n,e,t)=>{"use strict";n.exports=t.p+"assets/star.png"}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!n;)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),i=t(795),r=t.n(i),o=t(569),a=t.n(o),s=t(565),A=t.n(s),c=t(216),l=t.n(c),d=t(589),u=t.n(d),m=t(917),p={};p.styleTagTransform=u(),p.setAttributes=A(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),e()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var f,b=t(426),v={};v.styleTagTransform=u(),v.setAttributes=A(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),e()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals,(f=t(594)).keys().map(f);const g=function(){const n=document.querySelector("body > button"),e=document.querySelector(".form-sec > div:first-child"),t=document.querySelector(".main-sec"),i=document.querySelector("body > div"),r=document.getElementById("mail"),o=document.getElementById("country"),a=document.getElementById("zip"),s=document.getElementById("pwd"),A=document.getElementById("pwd-confirm"),c=[r,o,a,s],l=document.querySelector("form");return{displayFormButton:n,mainSection:t,overlay:i,exit:e,inputs:c,pwd:s,pwdConfirm:A,submitButton:document.querySelector(".form-sec button"),starImg:document.querySelector("img"),form:l}}(),C=(g.displayFormButton.addEventListener("click",(()=>{g.mainSection.classList.add("active"),g.overlay.classList.add("overlay"),h.colorUnfocused(),h.colorLive(),C()})),g.exit.addEventListener("click",(()=>{g.mainSection.classList.remove("active"),g.overlay.classList.remove("overlay")})),function(){g.inputs.forEach((n=>{n.validity.valueMissing&&(n.setCustomValidity(`${n.getAttribute("data-label")} is required`),n.addEventListener("input",(()=>{n.setCustomValidity("")})))}))}),h={colorUnfocused:function(){g.inputs.forEach((n=>{n.addEventListener("blur",(()=>{n.validity.valid&&(n.style.backgroundColor="lightgreen"),n.validity.valid||(n.style.backgroundColor="lightcoral")}))}))},colorLive:function(){g.inputs.forEach(((n,e)=>{n.addEventListener("input",(()=>{n.validity.valid&&(n.style.backgroundColor="lightgreen"),n.validity.valid||(n.style.backgroundColor="lightcoral")}))}))}};g.pwdConfirm.validity.valueMissing&&g.pwdConfirm.setCustomValidity(`${g.pwdConfirm.getAttribute("data-label")} is required`),g.pwdConfirm.addEventListener("input",(()=>{g.pwdConfirm.value===g.pwd.value?g.pwdConfirm.style.backgroundColor="lightgreen":g.pwdConfirm.style.backgroundColor="lightcoral",g.pwdConfirm.setCustomValidity("")})),g.submitButton.addEventListener("click",(n=>{g.form.checkValidity()&&(n.preventDefault(),g.starImg.classList.add("high-five"),setTimeout((()=>{g.starImg.classList.remove("high-five")}),2e3),g.inputs.forEach((n=>{n.style.backgroundColor="white"})),g.pwdConfirm.style.backgroundColor="white",g.form.reset(),g.mainSection.classList.remove("active"))}))})()})();
//# sourceMappingURL=main.js.map