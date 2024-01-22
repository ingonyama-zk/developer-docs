"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[614],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(i),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return i?n.createElement(h,l(l({ref:t},u),{},{components:i})):n.createElement(h,l({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3781:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));i(8209);const r={},l="Getting started with ICICLE",o={unversionedId:"icicle/introduction",id:"icicle/introduction",title:"Getting started with ICICLE",description:"This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to this guide please.",source:"@site/docs/icicle/introduction.md",sourceDirName:"icicle",slug:"/icicle/introduction",permalink:"/icicle/introduction",editUrl:"https://github.com/ingonyama-zk/developer-docs/tree/main/docs/icicle/introduction.md",tags:[],version:"current",lastUpdatedBy:"ImmanuelSegol",lastUpdatedAt:1705918884,formattedLastUpdatedAt:"1/22/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"What is ICICLE?",permalink:"/icicle/overview"},next:{title:"Integrations",permalink:"/icicle/integrations"}},s={},c=[{value:"ICICLE repository overview",id:"icicle-repository-overview",level:2},{value:"ICICLE Core",id:"icicle-core",level:3},{value:"ICICLE Rust and Golang bindings",id:"icicle-rust-and-golang-bindings",level:3},{value:"Running ICICLE",id:"running-icicle",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Optional Prerequisites",id:"optional-prerequisites",level:4},{value:"Setting up ICICLE and running tests",id:"setting-up-icicle-and-running-tests",level:3},{value:"Setting up our environment",id:"setting-up-our-environment",level:4},{value:"ICICLE Core",id:"icicle-core-1",level:4},{value:"ICICLE Rust",id:"icicle-rust",level:4},{value:"ICICLE Golang",id:"icicle-golang",level:4},{value:"Running ICICLE examples",id:"running-icicle-examples",level:3},{value:"Writing new bindings for ICICLE",id:"writing-new-bindings-for-icicle",level:2},{value:"ICICLE Adapters",id:"icicle-adapters",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-icicle"},"Getting started with ICICLE"),(0,a.kt)("p",null,"This guide is oriented towards developers who want to start writing code with the ICICLE libraries. If you just want to run your existing ZK circuits on GPU refer to ",(0,a.kt)("a",{parentName:"p",href:"/icicle/integrations#using-icicle-integrations"},"this guide")," please."),(0,a.kt)("h2",{id:"icicle-repository-overview"},"ICICLE repository overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ICICLE API overview",src:i(5870).Z,width:"1932",height:"996"})),(0,a.kt)("p",null,"The diagram above displays the general architecture of ICICLE and the API layers that exist. The CUDA API, which we also call ICICLE Core, is the lowest level and is comprised of CUDA kernels which implement all primitives such as MSM as well as C++ wrappers which expose these methods for different curves."),(0,a.kt)("p",null,"ICICLE Core compiles into a static library. This library can be used with our official Golang and Rust wrappers or you can implement a wrapper for it in any language."),(0,a.kt)("p",null,"Based on this dependency architecture, the ICICLE repository has three main sections, each of which is independent from the other."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ICICLE core"),(0,a.kt)("li",{parentName:"ul"},"ICICLE Rust bindings"),(0,a.kt)("li",{parentName:"ul"},"ICICLE Golang bindings")),(0,a.kt)("h3",{id:"icicle-core"},"ICICLE Core"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle"},"ICICLE core")," contains all the low level CUDA code implementing primitives such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/primitives"},"points")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/appUtils/msm"},"MSM"),". There also exists higher level C++ wrappers to expose the low level CUDA primitives (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/curves/bn254/msm.cu"},"example"),")."),(0,a.kt)("p",null,"ICICLE Core would typically be compiled into a static library and used in a third party language such as Rust or Golang."),(0,a.kt)("h3",{id:"icicle-rust-and-golang-bindings"},"ICICLE Rust and Golang bindings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust"},"ICICLE Rust bindings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ingonyama-zk/icicle/tree/main/goicicle"},"ICICLE Golang bindings"))),(0,a.kt)("p",null,"These bindings allow you to easily use ICICLE in a Rust or Golang project. Setting up Golang bindings requires a bit of extra steps compared to the Rust bindings which utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo build")," tool."),(0,a.kt)("h2",{id:"running-icicle"},"Running ICICLE"),(0,a.kt)("p",null,"This guide assumes that you have a Linux or Windows machine with a Nvidia GPU installed. If you don't have access to a Nvidia GPU you can access one for free on ",(0,a.kt)("a",{parentName:"p",href:"https://colab.google/"},"Google Colab"),"."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NVCC (version 12.0 or newer)"),(0,a.kt)("li",{parentName:"ul"},"cmake 3.18 and above"),(0,a.kt)("li",{parentName:"ul"},"GCC - version 9 or newer is recommended."),(0,a.kt)("li",{parentName:"ul"},"Any Nvidia GPU"),(0,a.kt)("li",{parentName:"ul"},"Linux or Windows operating system.")),(0,a.kt)("h4",{id:"optional-prerequisites"},"Optional Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker, latest version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/index.html"},"NVIDIA Container Toolkit"))),(0,a.kt)("p",null,"If you don't wish to install these prerequisites you can follow this tutorial using a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile"},"ZK-Container")," (docker container). To learn more about using ZK-Containers ",(0,a.kt)("a",{parentName:"p",href:"/ZKContainers"},"read this"),"."),(0,a.kt)("h3",{id:"setting-up-icicle-and-running-tests"},"Setting up ICICLE and running tests"),(0,a.kt)("p",null,"The objective of this guide is to make sure you can run the ICICLE Core, Rust and Golang tests. Achieving this will ensure you know how to setup ICICLE and run a ICICLE program. For simplicity, we will be using the ICICLE docker container as our environment, however, you may install the prerequisites on your machine and follow the same commands in your terminal."),(0,a.kt)("h4",{id:"setting-up-our-environment"},"Setting up our environment"),(0,a.kt)("p",null,"Lets begin by cloning the ICICLE repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ingonyama-zk/icicle\n")),(0,a.kt)("p",null,"We will proceed to build the docker image ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/Dockerfile"},"found here"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker build -t icicle-demo .\ndocker run -it --runtime=nvidia --gpus all --name icicle_container icicle-demo\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-it")," runs the container in interactive mode with a terminal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--gpus all")," Allocate all available GPUs to the container. You can also specify which GPUs to use if you don't want to allocate all."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--runtime=nvidia")," Use the NVIDIA runtime, necessary for GPU support.")),(0,a.kt)("p",null,"To read more about these settings reference this ",(0,a.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/nvidia-container-runtime"},"article"),"."),(0,a.kt)("p",null,"If you accidentally close your terminal and want to reconnect just call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -it icicle_container bash\n")),(0,a.kt)("p",null,"Lets make sure that we have the correct CUDA version before proceeding"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nvcc --version\n")),(0,a.kt)("p",null,"You should see something like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nvcc: NVIDIA (R) Cuda compiler driver\nCopyright (c) 2005-2023 NVIDIA Corporation\nBuilt on Tue_Aug_15_22:02:13_PDT_2023\nCuda compilation tools, release 12.2, V12.2.140\nBuild cuda_12.2.r12.2/compiler.33191640_0\n")),(0,a.kt)("p",null,"Make sure the release version is at least 12.0."),(0,a.kt)("h4",{id:"icicle-core-1"},"ICICLE Core"),(0,a.kt)("p",null,"ICICLE Core is found under ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle"},(0,a.kt)("inlineCode",{parentName:"a"},"<project_root>/icicle")),". To build and run the tests first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd icicle\n")),(0,a.kt)("p",null,"We are going to compile ICICLE for a specific curve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p build\ncmake -S . -B build -DCURVE=bn254 -DBUILD_TESTS=ON\ncmake --build build\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-DBUILD_TESTS=ON")," compiles the tests, without this flag ",(0,a.kt)("inlineCode",{parentName:"p"},"ctest")," won't work.\n",(0,a.kt)("inlineCode",{parentName:"p"},"-DCURVE=bn254")," tells the compiler which curve to build. You can find a list of supported curves ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/curves"},"here"),"."),(0,a.kt)("p",null,"The output in ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder should include the static libraries for the compiled curve."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure to only use ",(0,a.kt)("inlineCode",{parentName:"p"},"-DBUILD_TESTS=ON")," for running tests as the archive output will only be available when ",(0,a.kt)("inlineCode",{parentName:"p"},"-DBUILD_TESTS=ON")," is not supplied."))),(0,a.kt)("p",null,"To run the test"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd build\nctest\n")),(0,a.kt)("h4",{id:"icicle-rust"},"ICICLE Rust"),(0,a.kt)("p",null,"The rust bindings work by first compiling the CUDA static libraries as seen ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs"},"here"),". The compilation of CUDA and the Rust library is all handled by the rust build toolchain."),(0,a.kt)("p",null,"Similar to ICICLE Core here we also have to compile per curve."),(0,a.kt)("p",null,"Lets compile curve ",(0,a.kt)("inlineCode",{parentName:"p"},"bn254")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd wrappers/rust/icicle-curves/icicle-bn254\n")),(0,a.kt)("p",null,"Now lets build our library"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,a.kt)("p",null,"This may take a couple of minutes since we are compiling both the CUDA and Rust code."),(0,a.kt)("p",null,"To run the tests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo test -- --test-threads=1\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--test-threads=1")," is needed because currently some tests might interfere with one another inside the GPU."),(0,a.kt)("p",null,"We also include some benchmarks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo bench\n")),(0,a.kt)("h4",{id:"icicle-golang"},"ICICLE Golang"),(0,a.kt)("p",null,"Golang is WIP in v1, coming soon. Please checkout a previous ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/releases/tag/v0.1.0"},"release v0.1.0")," for golang bindings."),(0,a.kt)("h3",{id:"running-icicle-examples"},"Running ICICLE examples"),(0,a.kt)("p",null,"ICICLE examples can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle-examples"},"here")," these examples cover some simple use cases using C++, rust and golang."),(0,a.kt)("p",null,"In each example directory, ZK-container files are located in a subdirectory ",(0,a.kt)("inlineCode",{parentName:"p"},".devcontainer"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"msm/\n\u251c\u2500\u2500 .devcontainer\n   \u251c\u2500\u2500 devcontainer.json\n   \u2514\u2500\u2500 Dockerfile\n")),(0,a.kt)("p",null,"Lets run one of our C++ examples, in this case the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle-examples/blob/main/c%2B%2B/msm/example.cu"},"MSM example"),"."),(0,a.kt)("p",null,"Clone the repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ingonyama-zk/icicle-examples.git\ncd icicle-examples\n")),(0,a.kt)("p",null,"Enter the test directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd c++/msm\n")),(0,a.kt)("p",null,"Now lets build our docker file and run the test inside it. Make sure you have installed the ",(0,a.kt)("a",{parentName:"p",href:"#optional-prerequisites"},"optional prerequisites"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker build -t icicle-example-msm -f .devcontainer/Dockerfile .\n")),(0,a.kt)("p",null,"Lets start and enter the container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm --gpus all -v .:/icicle-example icicle-example-msm\n")),(0,a.kt)("p",null,"to run the example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf build\nmkdir -p build\ncmake -S . -B build\ncmake --build build\n./build/example\n")),(0,a.kt)("p",null,"You can now experiment with our other examples, perhaps try to run a rust or golang example next."),(0,a.kt)("h2",{id:"writing-new-bindings-for-icicle"},"Writing new bindings for ICICLE"),(0,a.kt)("p",null,"Since ICICLE Core is written in CUDA / C++ its really simple to generate static libraries. These static libraries can be installed on any system and called by higher level languages such as Golang."),(0,a.kt)("p",null,"static libraries can be loaded into memory once and used by multiple programs, reducing memory usage and potentially improving performance. They also allow you to separate functionality into distinct modules so your static library may need to compile only specific features that you want to use."),(0,a.kt)("p",null,"Lets review the Golang bindings since its a pretty verbose example (compared to rust which hides it pretty well) of using static libraries. Golang has a library named ",(0,a.kt)("inlineCode",{parentName:"p"},"CGO")," which can be used to link static libraries. Here's a basic example on how you can use cgo to link these libraries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'/*\n#cgo LDFLAGS: -L/path/to/shared/libs -lbn254 -lbls12_381 -lbls12_377 -lbw6_671\n#include "icicle.h" // make sure you use the correct header file(s)\n*/\nimport "C"\n\nfunc main() {\n  // Now you can call the C functions from the ICICLE libraries.\n  // Note that C function calls are prefixed with \'C.\' in Go code.\n\n  out := (*C.BN254_projective_t)(unsafe.Pointer(p))\n  in := (*C.BN254_affine_t)(unsafe.Pointer(affine))\n\n  C.projective_from_affine_bn254(out, in)\n}\n')),(0,a.kt)("p",null,"The comments on the first line tell ",(0,a.kt)("inlineCode",{parentName:"p"},"CGO")," which libraries to import as well as which header files to include. You can then call methods which are part of the static library and defined in the header file, ",(0,a.kt)("inlineCode",{parentName:"p"},"C.projective_from_affine_bn254")," is an example."),(0,a.kt)("p",null,"If you wish to create your own bindings for a language of your choice we suggest you start by investigating how you can call static libraries."),(0,a.kt)("h3",{id:"icicle-adapters"},"ICICLE Adapters"),(0,a.kt)("p",null,"One of the core ideas behind ICICLE is that developers can gradually accelerate their provers. Many protocols are written using other cryptographic libraries and completely replacing them may be complex and time consuming."),(0,a.kt)("p",null,"Therefore we offer adapters for various popular libraries, these adapters allow us to convert points and scalars between different formats defined by various libraries. Here is a list:"),(0,a.kt)("p",null,"Golang adapters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ingonyama-zk/iciclegnark"},"Gnark crypto adapter"))))}d.isMDXComponent=!0},5870:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/apilevels-1ab85a883df418516e16eb87aa7b0385.png"},8209:(e,t,i)=>{i(7294)}}]);