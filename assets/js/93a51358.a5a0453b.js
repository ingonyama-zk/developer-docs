"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[984],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?i.createElement(g,c(c({ref:n},u),{},{components:t})):i.createElement(g,c({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=t[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));t(8209);const a={},c="Rust bindings",o={unversionedId:"icicle/rust-bindings",id:"icicle/rust-bindings",title:"Rust bindings",description:"Rust bindings allow you to use ICICLE as a rust library.",source:"@site/docs/icicle/rust-bindings.md",sourceDirName:"icicle",slug:"/icicle/rust-bindings",permalink:"/icicle/rust-bindings",editUrl:"https://github.com/ingonyama-zk/developer-docs/tree/main/docs/icicle/rust-bindings.md",tags:[],version:"current",lastUpdatedBy:"Leon Hibnik",lastUpdatedAt:1705566368,formattedLastUpdatedAt:"1/18/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Golang bindings",permalink:"/icicle/golang-bindings"},next:{title:"Supporting Additional Curves",permalink:"/icicle/supporting-additional-curves"}},l={},s=[{value:"Using ICICLE Rust bindings in your project",id:"using-icicle-rust-bindings-in-your-project",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rust-bindings"},"Rust bindings"),(0,r.kt)("p",null,"Rust bindings allow you to use ICICLE as a rust library."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"icicle-core")," defines all interfaces, macros and common methods."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"icicle-cuda-runtime")," defines DeviceContext which can be used to manage a specific GPU as well as wrapping common CUDA methods."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"icicle-curves")," implements all interfaces and macros from icicle-core for each curve. For example icicle-bn254 implements curve bn254. Each curve has its own build script which will build the CUDA libraries for that curve as part of the rust-toolchain build."),(0,r.kt)("h2",{id:"using-icicle-rust-bindings-in-your-project"},"Using ICICLE Rust bindings in your project"),(0,r.kt)("p",null,"Simply add the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# GPU Icicle integration\nicicle-cuda-runtime = { git = "https://github.com/ingonyama-zk/icicle.git", tag = "v1.0.0" }\nicicle-core = { git = "https://github.com/ingonyama-zk/icicle.git", tag = "v1.0.0" }\nicicle-bn254 = { git = "https://github.com/ingonyama-zk/icicle.git", tag = "v1.0.0" }\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"icicle-bn254")," being the curve you wish to use and ",(0,r.kt)("inlineCode",{parentName:"p"},"icicle-core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"icicle-cuda-runtime")," contain ICICLE utilities and CUDA wrappers."),(0,r.kt)("p",null,"If you wish to point to a specific ICICLE branch add ",(0,r.kt)("inlineCode",{parentName:"p"},'branch = "<name_of_branch>"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'tag = "<name_of_tag>"')," to the ICICLE dependency. For a specific commit add ",(0,r.kt)("inlineCode",{parentName:"p"},'rev = "<commit_id>"'),"."),(0,r.kt)("p",null,"When you build your project ICICLE will be built as part of the build command."),(0,r.kt)("h1",{id:"how-do-the-rust-bindings-work"},"How do the rust bindings work?"),(0,r.kt)("p",null,"The rust bindings are just rust wrappers for ICICLE Core static libraries which can be compiled. We integrate the compilation of the static libraries into rusts toolchain to make usage seamless and easy. This is achieved by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs"},"extending rusts build command"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use cmake::Config;\nuse std::env::var;\n\nfn main() {\n    println!("cargo:rerun-if-env-changed=CXXFLAGS");\n    println!("cargo:rerun-if-changed=../../../../icicle");\n\n    let cargo_dir = var("CARGO_MANIFEST_DIR").unwrap();\n    let profile = var("PROFILE").unwrap();\n\n    let out_dir = Config::new("../../../../icicle")\n                .define("BUILD_TESTS", "OFF") //TODO: feature\n                .define("CURVE", "bn254")\n                .define("CMAKE_BUILD_TYPE", "Release")\n                .build_target("icicle")\n                .build();\n\n    println!("cargo:rustc-link-search={}/build", out_dir.display());\n\n    println!("cargo:rustc-link-lib=ingo_bn254");\n    println!("cargo:rustc-link-lib=stdc++");\n    // println!("cargo:rustc-link-search=native=/usr/local/cuda/lib64");\n    println!("cargo:rustc-link-lib=cudart");\n}\n')))}d.isMDXComponent=!0},8209:(e,n,t)=>{t(7294)}}]);