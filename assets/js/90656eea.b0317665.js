"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[827],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>v});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(i),d=n,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return i?r.createElement(v,a(a({ref:t},p),{},{components:i})):r.createElement(v,a({ref:t},p))}));function v(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8296:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=i(7462),n=(i(7294),i(3905));i(8209);const o={},a="ICICLE Primitives",c={unversionedId:"icicle/primitives/overview",id:"icicle/primitives/overview",title:"ICICLE Primitives",description:"This section of the documentation is dedicated to the ICICLE primitives, we will cover the usage and internal details of our primitives such as hashing algorithms, MSM and NTT.",source:"@site/docs/icicle/primitives/overview.md",sourceDirName:"icicle/primitives",slug:"/icicle/primitives/overview",permalink:"/icicle/primitives/overview",editUrl:"https://github.com/ingonyama-zk/developer-docs/tree/main/docs/icicle/primitives/overview.md",tags:[],version:"current",lastUpdatedBy:"Otsar",lastUpdatedAt:1708947589,formattedLastUpdatedAt:"2/26/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Rust bindings",permalink:"/icicle/rust-bindings"},next:{title:"MSM - Multi scalar multiplication",permalink:"/icicle/primitives/msm"}},s={},l=[{value:"Supported primitives",id:"supported-primitives",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"icicle-primitives"},"ICICLE Primitives"),(0,n.kt)("p",null,"This section of the documentation is dedicated to the ICICLE primitives, we will cover the usage and internal details of our primitives such as hashing algorithms, MSM and NTT."),(0,n.kt)("h2",{id:"supported-primitives"},"Supported primitives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./msm"},"MSM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/icicle/primitives/poseidon"},"Poseidon Hash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/icicle/primitives/ntt"},"NTT"))))}m.isMDXComponent=!0},8209:(e,t,i)=>{i(7294)}}]);