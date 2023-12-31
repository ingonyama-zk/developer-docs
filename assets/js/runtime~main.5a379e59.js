(()=>{"use strict";var e,r,t,a,o,d={},n={};function f(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=d,f.c=n,e=[],f.O=(r,t,a,o)=>{if(!t){var d=1/0;for(u=0;u<e.length;u++){t=e[u][0],a=e[u][1],o=e[u][2];for(var n=!0,c=0;c<t.length;c++)(!1&o||d>=o)&&Object.keys(f.O).every((e=>f.O[e](t[c])))?t.splice(c--,1):(n=!1,o<d&&(d=o));if(n){e.splice(u--,1);var i=a();void 0!==i&&(r=i)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,a,o]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var d={};r=r||[null,t({}),t([]),t(t)];for(var n=2&a&&e;"object"==typeof n&&!~r.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((r=>d[r]=()=>e[r]));return d.default=()=>e,f.d(o,d),o},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",58:"a8dc15ca",128:"a09c2993",154:"1fda6057",339:"714d6df7",514:"1be78505",541:"ec013bfd",550:"6d0814ae",614:"2b850a9b",623:"bb0bd8d7",664:"4cdddd57",709:"efdd43bc",742:"56d7fe15",775:"79b09671",918:"17896441",920:"1a4e3797"}[e]||e)+"."+{53:"da2590c0",58:"d72dd6a1",128:"2a1a881d",154:"5016a801",339:"9ae98752",426:"e654100f",514:"5d6a80d6",541:"bb54c1a8",550:"cfeec552",608:"877c8809",614:"6727acb3",623:"d2ce985a",664:"a2a6422e",709:"1a1953a6",742:"efcb727d",775:"38c59ef1",894:"fbf84e18",918:"60dfc074",920:"d7cc8439",945:"a66b494f"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="docusaurus:",f.l=(e,r,t,d)=>{if(a[e])a[e].push(r);else{var n,c;if(void 0!==t)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var l=i[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+t){n=l;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+t),n.src=e),a[e]=[r];var b=(r,t)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=b.bind(null,n.onerror),n.onload=b.bind(null,n.onload),c&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/developer-docs/",f.gca=function(e){return e={17896441:"918","935f2afb":"53",a8dc15ca:"58",a09c2993:"128","1fda6057":"154","714d6df7":"339","1be78505":"514",ec013bfd:"541","6d0814ae":"550","2b850a9b":"614",bb0bd8d7:"623","4cdddd57":"664",efdd43bc:"709","56d7fe15":"742","79b09671":"775","1a4e3797":"920"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(r,t)=>{var a=f.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var d=f.p+f.u(r),n=new Error;f.l(d,(t=>{if(f.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;n.message="Loading chunk "+r+" failed.\n("+o+": "+d+")",n.name="ChunkLoadError",n.type=o,n.request=d,a[1](n)}}),"chunk-"+r,r)}},f.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,d=t[0],n=t[1],c=t[2],i=0;if(d.some((r=>0!==e[r]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(c)var u=c(f)}for(r&&r(t);i<d.length;i++)o=d[i],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(u)},t=self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();