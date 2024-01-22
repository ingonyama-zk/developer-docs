"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));n(8209);const a={},o="Supporting Additional Curves",l={unversionedId:"icicle/supporting-additional-curves",id:"icicle/supporting-additional-curves",title:"Supporting Additional Curves",description:"Supporting additional curves is still a work in progress and is bound to change in the future. Currently, the process is very manual but plan to automate the majority of it in future releases.",source:"@site/docs/icicle/supporting-additional-curves.md",sourceDirName:"icicle",slug:"/icicle/supporting-additional-curves",permalink:"/icicle/supporting-additional-curves",editUrl:"https://github.com/ingonyama-zk/developer-docs/tree/main/docs/icicle/supporting-additional-curves.md",tags:[],version:"current",lastUpdatedBy:"ImmanuelSegol",lastUpdatedAt:1705918884,formattedLastUpdatedAt:"1/22/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Rust bindings",permalink:"/icicle/rust-bindings"},next:{title:"Run ICICLE on Google Colab",permalink:"/icicle/colab-instructions"}},c={},s=[{value:"ICICLE Core",id:"icicle-core",level:2},{value:"Bindings",id:"bindings",level:2},{value:"Rust",id:"rust",level:3},{value:"Golang",id:"golang",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"supporting-additional-curves"},"Supporting Additional Curves"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Supporting additional curves is still a work in progress and is bound to change in the future. Currently, the process is very manual but plan to automate the majority of it in future releases."))),(0,i.kt)("p",null,"We understand the need for ZK developers to use different curves, some common some more exotic. For this reason we designed ICICLE to allow developers to add any curve they desire."),(0,i.kt)("h2",{id:"icicle-core"},"ICICLE Core"),(0,i.kt)("p",null,"ICICLE core is very generic by design so all algorithms and primitives are designed to work based of configuration files ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/curves/curve_config.cuh"},"selected during compile")," time. This is why we compile ICICLE Core per curve."),(0,i.kt)("p",null,"To add support a new curve you must create a new file under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/curves"},(0,i.kt)("inlineCode",{parentName:"a"},"icicle/curves")),". The file should be named ",(0,i.kt)("inlineCode",{parentName:"p"},"<curve_name>_params.cuh"),"."),(0,i.kt)("p",null,"We also require some changes to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/curves/curve_config.cuh#L16-L29"},(0,i.kt)("inlineCode",{parentName:"a"},"curve_config.cuh")),", we need to add a new curve id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"...\n\n#define BN254     1\n#define BLS12_381 2\n#define BLS12_377 3\n#define BW6_761   4\n#define <curve_name> 5\n\n...\n")),(0,i.kt)("p",null,"Make sure to modify the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/4beda3a900eda961f39af3a496f8184c52bf3b41/icicle/curves/curve_config.cuh#L16-L29"},"rest of the file")," accordingly."),(0,i.kt)("p",null,"Finally we must modify the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/CMakeLists.txt#L64"},(0,i.kt)("inlineCode",{parentName:"a"},"make")," file")," to make sure we can compile our new curve."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"set(SUPPORTED_CURVES bn254;bls12_381;bls12_377;bw6_761;<curve_name>)\n")),(0,i.kt)("h2",{id:"bindings"},"Bindings"),(0,i.kt)("p",null,"In order to support a new curves in the binding libraries you first must support it in ICICLE core."),(0,i.kt)("h3",{id:"rust"},"Rust"),(0,i.kt)("p",null,"Create a new folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"icicle-<curve_name>")," under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust/icicle-curves"},"rust wrappers folder"),". Your new directory should look like this."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"icicle-<curve_name>/",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"src/",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ntt/",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mod.rs"))),(0,i.kt)("li",{parentName:"ul"},"msm/",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mod.rs"))),(0,i.kt)("li",{parentName:"ul"},"curve.rs"),(0,i.kt)("li",{parentName:"ul"},"lib.rs"))),(0,i.kt)("li",{parentName:"ul"},"Cargo.toml"),(0,i.kt)("li",{parentName:"ul"},"build.rs")))),(0,i.kt)("p",null,"Lets look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/src/ntt/mod.rs"},(0,i.kt)("inlineCode",{parentName:"a"},"ntt/mod.rs"))," for example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'...\n\nextern "C" {\n    #[link_name = "bn254NTTCuda"]\n    fn ntt_cuda<\'a>(\n        input: *const ScalarField,\n        size: usize,\n        is_inverse: bool,\n        config: &NTTConfig<\'a, ScalarField>,\n        output: *mut ScalarField,\n    ) -> CudaError;\n\n    #[link_name = "bn254DefaultNTTConfig"]\n    fn default_ntt_config() -> NTTConfig<\'static, ScalarField>;\n\n    #[link_name = "bn254InitializeDomain"]\n    fn initialize_ntt_domain(primitive_root: ScalarField, ctx: &DeviceContext) -> CudaError;\n}\n\n...\n')),(0,i.kt)("p",null,"Here you would need to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"bn254NTTCuda")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"<curve_name>NTTCuda"),". Most of these changes are pretty straight forward. One thing you should pay attention to is limb sizes as these change for different curves. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"BN254")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/4beda3a900eda961f39af3a496f8184c52bf3b41/wrappers/rust/icicle-curves/icicle-bn254/src/curve.rs#L15"},"has limb size of 8")," but for your curve this may be different."),(0,i.kt)("h3",{id:"golang"},"Golang"),(0,i.kt)("p",null,"Golang is WIP in v1, coming soon. Please checkout a previous ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/releases/tag/v0.1.0"},"release v0.1.0")," for golang bindings."))}d.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);