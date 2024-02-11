"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[244],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=p(t),h=s,k=c["".concat(l,".").concat(h)]||c[h]||u[h]||m;return t?n.createElement(k,r(r({ref:a},o),{},{components:t})):n.createElement(k,r({ref:a},o))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,r=new Array(m);r[0]=h;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:s,r[1]=i;for(var p=2;p<m;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5540:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>m,metadata:()=>i,toc:()=>p});var n=t(7462),s=(t(7294),t(3905));t(8209);const m={},r="MSM - Multi scalar multiplication",i={unversionedId:"icicle/primitives/msm",id:"icicle/primitives/msm",title:"MSM - Multi scalar multiplication",description:"MSM stands for Multi scalar multiplication, its defined as:",source:"@site/docs/icicle/primitives/msm.md",sourceDirName:"icicle/primitives",slug:"/icicle/primitives/msm",permalink:"/icicle/primitives/msm",editUrl:"https://github.com/ingonyama-zk/developer-docs/tree/main/docs/icicle/primitives/msm.md",tags:[],version:"current",lastUpdatedBy:"ImmanuelSegol",lastUpdatedAt:1707655414,formattedLastUpdatedAt:"2/11/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"ICICLE Primitives",permalink:"/icicle/primitives/overview"},next:{title:"Poseidon",permalink:"/icicle/primitives/poseidon"}},l={},p=[{value:"Supported curves",id:"supported-curves",level:2},{value:"Supported algorithms",id:"supported-algorithms",level:2},{value:"Bucket accumulation",id:"bucket-accumulation",level:3},{value:"When should I use Bucket accumulation?",id:"when-should-i-use-bucket-accumulation",level:4},{value:"Large triangle accumulation",id:"large-triangle-accumulation",level:3},{value:"When should I use Large triangle accumulation?",id:"when-should-i-use-large-triangle-accumulation",level:4},{value:"How do I toggle between the supported algorithms?",id:"how-do-i-toggle-between-the-supported-algorithms",level:3},{value:"MSM Modes",id:"msm-modes",level:2},{value:"Which mode should I use?",id:"which-mode-should-i-use",level:3},{value:"How do I toggle between MSM modes?",id:"how-do-i-toggle-between-msm-modes",level:3},{value:"Support for G2 group",id:"support-for-g2-group",level:2}],o={toc:p},c="wrapper";function u(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"msm---multi-scalar-multiplication"},"MSM - Multi scalar multiplication"),(0,s.kt)("p",null,"MSM stands for Multi scalar multiplication, its defined as:"),(0,s.kt)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("mi",null,"M"),(0,s.kt)("mi",null,"S"),(0,s.kt)("mi",null,"M"),(0,s.kt)("mo",{stretchy:"false"},"("),(0,s.kt)("mi",null,"a"),(0,s.kt)("mo",null,","),(0,s.kt)("mi",null,"G"),(0,s.kt)("mo",{stretchy:"false"},")"),(0,s.kt)("mo",null,"="),(0,s.kt)("munderover",null,(0,s.kt)("mo",{"data-mjx-texclass":"OP",movablelimits:"false"},"\u2211"),(0,s.kt)("mrow",{"data-mjx-texclass":"ORD"},(0,s.kt)("mi",null,"j"),(0,s.kt)("mo",null,"="),(0,s.kt)("mn",null,"0")),(0,s.kt)("mrow",{"data-mjx-texclass":"ORD"},(0,s.kt)("mi",null,"n"),(0,s.kt)("mo",null,"\u2212"),(0,s.kt)("mn",null,"1"))),(0,s.kt)("msub",null,(0,s.kt)("mi",null,"a"),(0,s.kt)("mi",null,"j")),(0,s.kt)("msub",null,(0,s.kt)("mi",null,"G"),(0,s.kt)("mi",null,"j"))),(0,s.kt)("p",null,"Where"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"G"),(0,s.kt)("mi",{parentName:"msub"},"j")),(0,s.kt)("mo",{parentName:"mrow"},"\u2208"),(0,s.kt)("mi",{parentName:"mrow"},"G")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G_j \\in G")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G")))))," - points from an Elliptic Curve group."),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"a"),(0,s.kt)("mn",{parentName:"msub"},"0")),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mo",{parentName:"mrow"},"\u2026"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"a"),(0,s.kt)("mi",{parentName:"msub"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a_0, \\ldots, a_n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"minner"},"\u2026"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))))))," - Scalars"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"M"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"M"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"G"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u2208"),(0,s.kt)("mi",{parentName:"mrow"},"G")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"MSM(a, G) \\in G")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"MSM"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"G")))))," - a single EC (elliptic curve point) point"),(0,s.kt)("p",null,"In words, MSM is the sum of scalar and EC point multiplications. We can see from this definition that the core operations occurring are Modular Multiplication and Elliptic curve point addition. Each multiplication can be computed independently and then the products are summed, making MSM inherently parallelizable."),(0,s.kt)("p",null,"Accelerating MSM is crucial to a ZK protocol's performance due to the ",(0,s.kt)("a",{parentName:"p",href:"https://hackmd.io/@0xMonia/SkQ6-oRz3#Hardware-acceleration-in-action"},"large percent of run time")," they take when generating proofs."),(0,s.kt)("p",null,"You can learn more about how MSMs work from this ",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Bl5mQA7UL2I"},"video")," and from our resource list on ",(0,s.kt)("a",{parentName:"p",href:"https://www.ingonyama.com/ingopedia/msm"},"Ingopedia"),"."),(0,s.kt)("h1",{id:"using-msm"},"Using MSM"),(0,s.kt)("h2",{id:"supported-curves"},"Supported curves"),(0,s.kt)("p",null,"MSM supports the following curves:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"bls12-377"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"bls12-381"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"bn-254"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"bw6-761")),(0,s.kt)("h2",{id:"supported-algorithms"},"Supported algorithms"),(0,s.kt)("p",null,"Our MSM implementation supports two algorithms ",(0,s.kt)("inlineCode",{parentName:"p"},"Bucket accumulation")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Large triangle accumulation"),"."),(0,s.kt)("h3",{id:"bucket-accumulation"},"Bucket accumulation"),(0,s.kt)("p",null,'The Bucket Accumulation algorithm is a method of dividing the overall MSM task into smaller, more manageable sub-tasks. It involves partitioning scalars and their corresponding points into different "buckets" based on the scalar values.'),(0,s.kt)("p",null,"Bucket Accumulation can be more parallel-friendly because it involves dividing the computation into smaller, independent tasks, distributing scalar-point pairs into buckets and summing points within each bucket. This division makes it well suited for parallel processing on GPUs."),(0,s.kt)("h4",{id:"when-should-i-use-bucket-accumulation"},"When should I use Bucket accumulation?"),(0,s.kt)("p",null,"In scenarios involving large MSM computations with many scalar-point pairs, the ability to parallelize operations makes Bucket Accumulation more efficient. The larger the MSM task, the more significant the potential gains from parallelization."),(0,s.kt)("h3",{id:"large-triangle-accumulation"},"Large triangle accumulation"),(0,s.kt)("p",null,"Large Triangle Accumulation is a method for optimizing MSM which focuses on reducing the number of point doublings in the computation. This algorithm is based on the observation that the number of point doublings can be minimized by structuring the computation in a specific manner."),(0,s.kt)("h4",{id:"when-should-i-use-large-triangle-accumulation"},"When should I use Large triangle accumulation?"),(0,s.kt)("p",null,"The Large Triangle Accumulation algorithm is more sequential in nature, as it builds upon each step sequentially (accumulating sums and then performing doubling). This structure can make it less suitable for parallelization but potentially more efficient for a ",(0,s.kt)("b",null,"large batch of smaller MSM computations"),"."),(0,s.kt)("h3",{id:"how-do-i-toggle-between-the-supported-algorithms"},"How do I toggle between the supported algorithms?"),(0,s.kt)("p",null,"When creating your MSM Config you may state which algorithm you wish to use. ",(0,s.kt)("inlineCode",{parentName:"p"},"is_big_triangle=true")," will activate Large triangle accumulation and ",(0,s.kt)("inlineCode",{parentName:"p"},"is_big_triangle=false")," will activate Bucket accumulation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"...\n\nlet mut cfg_bls12377 = msm::get_default_msm_config::<BLS12377CurveCfg>();\n\n// is_big_triangle will determine which algorithm to use \ncfg_bls12377.is_big_triangle = true;\n\nmsm::msm(&scalars, &points, &cfg, &mut msm_results).unwrap();\n...\n")),(0,s.kt)("p",null,"You may reference the rust code ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/77a7613aa21961030e4e12bf1c9a78a2dadb2518/wrappers/rust/icicle-core/src/msm/mod.rs#L54"},"here"),"."),(0,s.kt)("h2",{id:"msm-modes"},"MSM Modes"),(0,s.kt)("p",null,"ICICLE MSM also supports two different modes ",(0,s.kt)("inlineCode",{parentName:"p"},"Batch MSM")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Single MSM")),(0,s.kt)("p",null,"Batch MSM allows you to run many MSMs with a single API call, Single MSM will launch a single MSM computation."),(0,s.kt)("h3",{id:"which-mode-should-i-use"},"Which mode should I use?"),(0,s.kt)("p",null,"This decision is highly dependent on your use case and design. However, if your design allows for it, using batch mode can significantly improve efficiency. Batch processing allows you to perform multiple MSMs leveraging the parallel processing capabilities of GPUs."),(0,s.kt)("p",null,"Single MSM mode should be used when batching isn't possible or when you have to run a single MSM."),(0,s.kt)("h3",{id:"how-do-i-toggle-between-msm-modes"},"How do I toggle between MSM modes?"),(0,s.kt)("p",null,"Toggling between MSM modes occurs automatically based on the number of results you are expecting from the ",(0,s.kt)("inlineCode",{parentName:"p"},"msm::msm")," function. If you are expecting an array of ",(0,s.kt)("inlineCode",{parentName:"p"},"msm_results"),", ICICLE will automatically split ",(0,s.kt)("inlineCode",{parentName:"p"},"scalars")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"points")," into equal parts and run them as multiple MSMs in parallel."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"...\n\nlet mut msm_result: HostOrDeviceSlice<'_, G1Projective> = HostOrDeviceSlice::cuda_malloc(1).unwrap();\nmsm::msm(&scalars, &points, &cfg, &mut msm_result).unwrap();\n\n...\n")),(0,s.kt)("p",null,"In the example above we allocate a single expected result which the MSM method will interpret as ",(0,s.kt)("inlineCode",{parentName:"p"},"batch_size=1")," and run a single MSM."),(0,s.kt)("p",null,"In the next example, we are expecting 10 results which sets ",(0,s.kt)("inlineCode",{parentName:"p"},"batch_size=10")," and runs 10 MSMs in batch mode."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"...\n\nlet mut msm_results: HostOrDeviceSlice<'_, G1Projective> = HostOrDeviceSlice::cuda_malloc(10).unwrap();\nmsm::msm(&scalars, &points, &cfg, &mut msm_results).unwrap();\n\n...\n")),(0,s.kt)("p",null,"Here is a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/77a7613aa21961030e4e12bf1c9a78a2dadb2518/wrappers/rust/icicle-core/src/msm/mod.rs#L108"},"reference")," to the code which automatically sets the batch size. For more MSM examples have a look ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/77a7613aa21961030e4e12bf1c9a78a2dadb2518/examples/rust/msm/src/main.rs#L1"},"here"),"."),(0,s.kt)("h2",{id:"support-for-g2-group"},"Support for G2 group"),(0,s.kt)("p",null,"MSM also supports G2 group. "),(0,s.kt)("p",null,"Using MSM in G2 requires a G2 config, and of course your Points should also be G2 Points."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"... \n\nlet scalars = HostOrDeviceSlice::Host(upper_scalars[..size].to_vec());\nlet g2_points = HostOrDeviceSlice::Host(g2_upper_points[..size].to_vec());\nlet mut g2_msm_results: HostOrDeviceSlice<'_, G2Projective> = HostOrDeviceSlice::cuda_malloc(1).unwrap();\nlet mut g2_cfg = msm::get_default_msm_config::<G2CurveCfg>();\n\nmsm::msm(&scalars, &g2_points, &g2_cfg, &mut g2_msm_results).unwrap();\n\n...\n")),(0,s.kt)("p",null,"Here you can ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/5a96f9937d0a7176d88c766bd3ef2062b0c26c37/examples/rust/msm/src/main.rs#L114"},"find an example")," of MSM on G2 Points."))}u.isMDXComponent=!0},8209:(e,a,t)=>{t(7294)}}]);