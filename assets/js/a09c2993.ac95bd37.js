"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var o=r(7462),a=(r(7294),r(3905));r(8209);const n={slug:"/",displayed_sidebar:"GettingStartedSidebar",title:""},i="Welcome to Ingonyama's Developer Documentation",c={unversionedId:"introduction",id:"introduction",title:"",description:"Ingonyama is a next-generation semiconductor company, focusing on Zero-Knowledge Proof hardware acceleration. We build accelerators for advanced cryptography, unlocking real-time applications. Our focus is on democratizing access to compute intensive cryptography and making it accessible for developers to build on top of.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/ingonyama-zk/developer-docs/tree/main/docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Leon Hibnik",lastUpdatedAt:1706022967,formattedLastUpdatedAt:"1/23/2024",frontMatter:{slug:"/",displayed_sidebar:"GettingStartedSidebar",title:""},sidebar:"GettingStartedSidebar",next:{title:"What is ICICLE?",permalink:"/icicle/overview"}},l={},s=[{value:"Our current take on hardware acceleration",id:"our-current-take-on-hardware-acceleration",level:2},{value:"ICICLE",id:"icicle",level:2},{value:"Get in Touch",id:"get-in-touch",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-ingonyamas-developer-documentation"},"Welcome to Ingonyama's Developer Documentation"),(0,a.kt)("p",null,"Ingonyama is a next-generation semiconductor company, focusing on Zero-Knowledge Proof hardware acceleration. We build accelerators for advanced cryptography, unlocking real-time applications. Our focus is on democratizing access to compute intensive cryptography and making it accessible for developers to build on top of."),(0,a.kt)("p",null,"Currently our flagship products are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ICICLE"),":\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ingonyama-zk/icicle"},"ICICLE")," is a fully featured GPU accelerated cryptography library for building ZK provers. ICICLE allows you to accelerate your ZK existing protocols in a matter of hours or implement your protocol from scratch on GPU.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"our-current-take-on-hardware-acceleration"},"Our current take on hardware acceleration"),(0,a.kt)("p",null,"We believe GPUs are as important for ZK as for AI."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GPUs are a perfect match for ZK compute - around 97% of ZK protocol runtime is parallel by nature."),(0,a.kt)("li",{parentName:"ul"},"GPUs are simple for developers to use and scale compared to other hardware platforms."),(0,a.kt)("li",{parentName:"ul"},"GPUs are extremely competitive in terms of power / performance and price (3x cheaper)."),(0,a.kt)("li",{parentName:"ul"},"GPUs are popular and readily available.")),(0,a.kt)("p",null,"For a more in-depth understanding on this topic we suggest you read ",(0,a.kt)("a",{parentName:"p",href:"https://www.ingonyama.com/blog/revisiting-paradigm-hardware-acceleration-for-zero-knowledge-proofs"},"our article on the subject"),"."),(0,a.kt)("p",null,"Despite our current focus on GPUs we are still hard at work developing a ZPU (ZK Processing Unit), with the goal of offering a programmable hardware platform for ZK. To read more about ZPUs we suggest you read this ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@ingonyama/zpu-the-zero-knowledge-processing-unit-f886a48e00e0"},"article"),"."),(0,a.kt)("h2",{id:"icicle"},"ICICLE"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle"},"ICICLE")," is a cryptography library for ZK using GPUs.\nICICLE implements blazing fast cryptographic primitives such as EC operations, MSM, NTT, Poseidon hash and more on GPU."),(0,a.kt)("p",null,"ICICLE is designed to be easy to use, developers don't have to touch a single line of CUDA code. Our Rust and Golang bindings allow your team to transition from CPU to GPU with minimal changes."),(0,a.kt)("p",null,"Learn more about ICICLE and GPUs ",(0,a.kt)("a",{parentName:"p",href:"/icicle/overview"},"here"),"."),(0,a.kt)("h2",{id:"get-in-touch"},"Get in Touch"),(0,a.kt)("p",null,"If you have any questions, ideas, or are thinking of building something in this space join the discussion on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/6vYrE7waPj"},"Discord"),". You can explore our code on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk"},"github")," or read some of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/papers"},"our research papers"),"."),(0,a.kt)("p",null,"Follow us on ",(0,a.kt)("a",{parentName:"p",href:"https://x.com/Ingo_zk"},"Twitter")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@ingo_ZK"},"YouTube")," and sign up for our ",(0,a.kt)("a",{parentName:"p",href:"https://wkf.ms/3LKCbdj"},"mailing list")," to get our latest announcements."))}d.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);