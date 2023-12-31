"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?i.createElement(h,n(n({ref:t},p),{},{components:r})):i.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,n[1]=l;for(var s=2;s<a;s++)n[s]=r[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(7462),o=(r(7294),r(3905));r(8209);const a={},n="ICICLE Overview",l={unversionedId:"icicle/overview",id:"icicle/overview",title:"ICICLE Overview",description:"ICICLE is a GPU Library for cryptographic acceleration, currently focused primarily on Zero Knowledge Proof acceleration. ICICLE offers developers GPU accelerated cryptographic primitives such as EC operations, MSM, NTT, and Poseidon hash.",source:"@site/docs/icicle/overview.md",sourceDirName:"icicle",slug:"/icicle/overview",permalink:"/developer-docs/icicle/overview",editUrl:"https://github.com/ingonyama-zk/developer-docs/docs/icicle/overview.md",tags:[],version:"current",lastUpdatedBy:"ImmanuelSegol",lastUpdatedAt:1704018434,formattedLastUpdatedAt:"12/31/2023",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Introduction",permalink:"/developer-docs/"},next:{title:"Getting started with ICICLE",permalink:"/developer-docs/icicle/introduction"}},c={},s=[{value:"Why are we excited about GPUs?",id:"why-are-we-excited-about-gpus",level:2},{value:"ICICLE integration overview",id:"icicle-integration-overview",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"icicle-overview"},"ICICLE Overview"),(0,o.kt)("p",null,"ICICLE is a GPU Library for cryptographic acceleration, currently focused primarily on Zero Knowledge Proof acceleration. ICICLE offers developers GPU accelerated cryptographic primitives such as EC operations, MSM, NTT, and Poseidon hash."),(0,o.kt)("p",null,"ICICLE allows developers with minimal GPU experience to effortlessly accelerate there ZK application, from our experiments even the most naive implementation may yield 10X improvement in proving times. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ICICLE API overview",src:r(4296).Z,width:"1400",height:"835"})),(0,o.kt)("p",null,"The diagram above displays the general architecture of ICICLE and the API layers that exists. At the lowest level we have CUDA kernels which implement all primitives such as MSM for example. Our C++ wrapper is compiled into a shared library this library can be used with our official Golang and Rust wrappers or you can implement a wrapper for it in any language of your desire. "),(0,o.kt)("p",null,"To get started with ICICLE quickly follow this guide, getting started with ICICLE. If you want to learn more about CUDA or GPUs please refer to our GPU development guide."),(0,o.kt)("h2",{id:"why-are-we-excited-about-gpus"},"Why are we excited about GPUs?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GPUs are a perfect match for ZK compute - around 97% of ZK protocol runtime is parallel by nature."),(0,o.kt)("li",{parentName:"ul"},"GPUs are simple for developers to use and scale compared to other hardware platforms."),(0,o.kt)("li",{parentName:"ul"},"GPUs are extremely competitive in terms of power / performance and price (3x cheaper)."),(0,o.kt)("li",{parentName:"ul"},"GPUs are popular and readily available.")),(0,o.kt)("p",null,"For a more in-depth understanding on this topic we suggest you read ",(0,o.kt)("a",{parentName:"p",href:"https://www.ingonyama.com/blog/revisiting-paradigm-hardware-acceleration-for-zero-knowledge-proofs"},"our article on the subject"),"."),(0,o.kt)("h2",{id:"icicle-integration-overview"},"ICICLE integration overview"),(0,o.kt)("p",null,"Lets illustrate an ICICLE integration, so you can understand the core API and design overview of ICICLE."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ICICLE architecture",src:r(5569).Z,width:"1294",height:"1043"})),(0,o.kt)("p",null,"Engineers usually use a cryptography library such as Arkworks to implement their ZK protocols. These libraries implement efficient primitives which are used as building blocks for the protocol. ICICLE is such a library the difference is that ICICLE is designed from the start to run on GPUs. The Rust and Golang APIs abstract away all low level CUDA details, our goal was to allow developers with no GPU experience quickly get started with ICICLE. "),(0,o.kt)("p",null,"A developer may use ICICLE with two main approaches in mind."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Drop in replacement approach."),(0,o.kt)("li",{parentName:"ol"},"Full GPU replacement approach.")),(0,o.kt)("p",null,"The first approach is best suited for teams aiming to quickly implement a GPU version of their Prover. This method predominantly involves substituting the core methods with ICICLE's methods. While this approach can yield significant performance gains it has many draw backs, implementing memory optimizations is limited and optimizing the protocol itself to be more suited for GPU is also limited. This approach is a great way to begin using ICICLE, however for someone who is looking to seriously adopt GPU acceleration we would recommend a more rigorous approach."),(0,o.kt)("p",null,"A complete GPU replacement means preforming the entire ZK proof on the GPU. This approach will reduce latency to a minimum and requires you to change the way you implement the protocol to be more GPU friendly. This approach will take full advantage of GPU acceleration. Redesigning your prover this way may take more engineering effort but we promise you that its worth it!"))}d.isMDXComponent=!0},5569:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/architecture-highlight-9a19bcf9ece0bff03bd798e5c3aa5cf1.png"},4296:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/iciclestructure-53ea6e56234092aa781f52be6cd1f21c.png"},8209:(e,t,r)=>{r(7294)}}]);