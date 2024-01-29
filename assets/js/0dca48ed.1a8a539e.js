"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[67],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,h=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(8209);const i={},o="ICICLE integrated provers",l={unversionedId:"icicle/integrations",id:"icicle/integrations",title:"ICICLE integrated provers",description:"ICICLE has been used by companies like Celer Network, Gnark and others to accelerate their ZK proving pipeline.",source:"@site/docs/icicle/integrations.md",sourceDirName:"icicle",slug:"/icicle/integrations",permalink:"/icicle/integrations",editUrl:"https://github.com/ingonyama-zk/developer-docs/tree/main/docs/icicle/integrations.md",tags:[],version:"current",lastUpdatedBy:"ImmanuelSegol",lastUpdatedAt:1706527783,formattedLastUpdatedAt:"1/29/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Getting started with ICICLE",permalink:"/icicle/introduction"},next:{title:"Golang bindings",permalink:"/icicle/golang-bindings"}},c={},s=[{value:"A primer to building your own integrations",id:"a-primer-to-building-your-own-integrations",level:2},{value:"Using ICICLE integrated provers",id:"using-icicle-integrated-provers",level:2},{value:"Gnark",id:"gnark",level:3},{value:"Halo2",id:"halo2",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"icicle-integrated-provers"},"ICICLE integrated provers"),(0,a.kt)("p",null,"ICICLE has been used by companies like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celer-network"},"Celer Network"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Consensys/gnark"},"Gnark")," and others to accelerate their ZK proving pipeline."),(0,a.kt)("p",null,"Many of these integrations have been a collaboration between Ingonyama and the integrating company. We have learned a lot about designing GPU based ZK provers."),(0,a.kt)("p",null,"If you're interested in understanding these integrations better or learning how you can use ICICLE to accelerate your existing ZK proving pipeline this is the place for you."),(0,a.kt)("h2",{id:"a-primer-to-building-your-own-integrations"},"A primer to building your own integrations"),(0,a.kt)("p",null,"Lets illustrate an ICICLE integration, so you can understand the core API and design overview of ICICLE."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ICICLE architecture",src:n(2547).Z,width:"906",height:"878"})),(0,a.kt)("p",null,"Engineers usually use a cryptography library to implement their ZK protocols. These libraries implement efficient primitives which are used as building blocks for the protocol; ICICLE is such a library. The difference is that ICICLE is designed from the start to run on GPUs; the Rust and Golang APIs abstract away all low level CUDA details. Our goal was to allow developers with no GPU experience to quickly get started with ICICLE."),(0,a.kt)("p",null,"A developer may use ICICLE with two main approaches in mind."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Drop in replacement approach."),(0,a.kt)("li",{parentName:"ol"},"Full GPU replacement approach.")),(0,a.kt)("p",null,"The first approach for GPU-accelerating your Prover with ICICLE is quick to implement, but it has limitations, such as reduced memory optimization and limited protocol tuning for GPUs. It's a solid starting point, but those committed to fully leveraging GPU acceleration should consider a more comprehensive approach."),(0,a.kt)("p",null,"A full GPU replacement means performing the entire ZK proof on the GPU. This approach will reduce latency to a minimum and requires you to change the way you implement the protocol to be more GPU friendly. This approach will take full advantage of GPU acceleration. Redesigning your prover this way may take more engineering effort but we promise you that its worth it!"),(0,a.kt)("h2",{id:"using-icicle-integrated-provers"},"Using ICICLE integrated provers"),(0,a.kt)("p",null,"Here we cover how a developer can run existing circuits on ICICLE integrated provers."),(0,a.kt)("h3",{id:"gnark"},"Gnark"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Consensys/gnark"},"Gnark")," officially supports GPU proving with ICICLE. Currently only Groth16 on curve ",(0,a.kt)("inlineCode",{parentName:"p"},"BN254")," is supported. This means that if you are currently using Gnark to write your circuits you can enjoy GPU acceleration without making many changes."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Currently ICICLE has been merged to Gnark ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Consensys/gnark"},"master branch"),", however the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Consensys/gnark/releases/tag/v0.9.1"},"latest release")," is from October 2023."))),(0,a.kt)("p",null,"Make sure your golang circuit project has ",(0,a.kt)("inlineCode",{parentName:"p"},"gnark")," as a dependency and that you are using the master branch for now."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get  github.com/consensys/gnark@master\n")),(0,a.kt)("p",null,"You should see two indirect dependencies added."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n    github.com/ingonyama-zk/icicle v0.1.0 // indirect\n    github.com/ingonyama-zk/iciclegnark v0.1.1 // indirect\n...\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"As you may notice we are using ICICLE v0.1 here since golang bindings are only support in ICICLE v0.1 for the time being."))),(0,a.kt)("p",null,"To switch over to ICICLE proving, make sure to change the backend you are using, below is an example of how this should be done."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// toggle on\nproofIci, err := groth16.Prove(ccs, pk, secretWitness, backend.WithIcicleAcceleration())\n\n// toggle off\nproof, err := groth16.Prove(ccs, pk, secretWitness)\n")),(0,a.kt)("p",null,"Now that you have enabled ",(0,a.kt)("inlineCode",{parentName:"p"},"WithIcicleAcceleration")," backend simple change the way your run your circuits to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go run -tags=icicle main.go\n")),(0,a.kt)("p",null,"Your logs should look something like this if everything went as expected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"13:12:05 INF compiling circuit\n13:12:05 INF parsed circuit inputs nbPublic=1 nbSecret=1\n13:12:05 INF building constraint builder nbConstraints=3\n13:12:05 DBG precomputing proving key in GPU acceleration=icicle backend=groth16 curve=bn254 nbConstraints=3\n13:12:05 DBG constraint system solver done nbConstraints=3 took=0.070259\n13:12:05 DBG prover done acceleration=icicle backend=groth16 curve=bn254 nbConstraints=3 took=80.356684\n13:12:05 DBG verifier done backend=groth16 curve=bn254 took=1.843888\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"acceleration=icicle")," indicates that the prover is running in acceleration mode with ICICLE."),(0,a.kt)("p",null,"You can reference the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Consensys/gnark?tab=readme-ov-file#gpu-support"},"Gnark docs")," for further information."),(0,a.kt)("h3",{id:"halo2"},"Halo2"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zkonduit/halo2"},"Halo2")," fork integrated with ICICLE for GPU acceleration. This means that you can run your existing Halo2 circuits with GPU acceleration just by activating a feature flag."),(0,a.kt)("p",null,"To enable GPU acceleration just enable ",(0,a.kt)("inlineCode",{parentName:"p"},"icicle_gpu")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zkonduit/halo2/blob/3d7b5e61b3052680ccb279e05bdcc21dd8a8fedf/halo2_proofs/Cargo.toml#L102"},"feature flag"),"."),(0,a.kt)("p",null,"This feature flag will seamlessly toggle on GPU acceleration for you."))}d.isMDXComponent=!0},2547:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-high-level-3c1ae0f257c7921b77378aa3daaab41c.png"},8209:(e,t,n)=>{n(7294)}}]);