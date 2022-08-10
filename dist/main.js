(()=>{"use strict";var n,e,r,t,o,i,a,s,c,l,d,p,f,u,h={426:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Crete+Round&family=Inter:wght@100;400;500;600;700;800&family=Lato&family=Poppins:wght@100;300;400;500;600;700&family=Roboto+Mono:wght@100;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap);"]),a.push([n.id,"body {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  font-family: 'Poppins', sans-serif;\r\n  color: hsl(0, 0%, 14%);\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  font-style: italic;\r\n}\r\n\r\n.icon {\r\n  width: auto;\r\n  height: 15px;\r\n  padding-right: 12px;\r\n}\r\n\r\n#ParentContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.introList {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  font-family: 'Roboto', sans-serif;\r\n  height: 30px;\r\n  color: hsl(0, 0%, 14%);\r\n  border-bottom: 1px solid grey;\r\n}\r\n\r\n#list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.hideme {\r\n  opacity: 0;\r\n}\r\n\r\n#list-container li {\r\n  border-top: 1px solid grey;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.vertical {\r\n  justify-self: flex-end;\r\n  color: grey;\r\n}\r\n\r\n#Addition {\r\n  height: 48px;\r\n  font-family: 'Inter', sans-serif;\r\n  border: none;\r\n  color: hsl(0, 0%, 14%);\r\n  letter-spacing: 0.87px;\r\n  width: 100%;\r\n  font-weight: 600;\r\n}\r\n\r\n#Addition:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n#Addition::placeholder {\r\n  color: grey;\r\n  font-family: 'Inter', sans-serif;\r\n}\r\n\r\n#Addition:active {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.clearAll {\r\n  border-top: 1px solid grey;\r\n  border-bottom: 1px solid grey;\r\n  width: 100%;\r\n  border-left: none;\r\n  border-right: none;\r\n  height: 48px;\r\n  text-align: center;\r\n  font-family: 'Inter', sans-serif;\r\n  color: hsl(0, 0%, 14%);\r\n  font-weight: 600;\r\n  letter-spacing: 0.23px;\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var f=r(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var h=o(u,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=t(n,o),l=0;l<i.length;l++){var d=r(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function y(n){var e=m[n];if(void 0!==e)return e.exports;var r=m[n]={id:n,exports:{}};return h[n](r,r.exports,y),r.exports}y.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return y.d(e,{a:e}),e},y.d=(n,e)=>{for(var r in e)y.o(e,r)&&!y.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},y.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),y.nc=void 0,n=y(379),e=y.n(n),r=y(795),t=y.n(r),o=y(569),i=y.n(o),a=y(565),s=y.n(a),c=y(216),l=y.n(c),d=y(589),p=y.n(d),f=y(426),(u={}).styleTagTransform=p(),u.setAttributes=s(),u.insert=i().bind(null,"head"),u.domAPI=t(),u.insertStyleElement=l(),e()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{(class{static ShowList(){[{description:"Learn JavaScript",completed:!1,index:0},{description:"Learn React",completed:!1,index:1}].forEach((n=>{n.index+=1;const e=document.createElement("li");e.innerHTML=`\n                <div class = "sibling">\n                <input type="checkbox" ${n.completed?"checked":""}>\n                <span>${n.description}</span>\n                </div>\n                \n                <p class="hideme">${n.index}</p>\n                <svg class="icon vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">\x3c!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"/></svg>\n            `,document.getElementById("list-container").appendChild(e)}))}}).ShowList()}))})();