# ICICLE Overview

ICICLE is a GPU Library for cryptographic acceleration, currently focused primarily on Zero Knowledge Proof acceleration. ICICLE offers developers GPU accelerated cryptographic primitives such as EC operations, MSM, NTT, and Poseidon hash.

ICICLE allows developers with minimal GPU experience to effortlessly accelerate there ZK application, from our experiments even the most naive implementation may yield 10X improvement in proving times. 


![ICICLE API overview](../../static/img/iciclestructure.png)


The diagram above displays the general architecture of ICICLE and the API layers that exists. At the lowest level we have CUDA kernels which implement all primitives such as MSM for example. Our C++ wrapper is compiled into a shared library this library can be used with our official Golang and Rust wrappers or you can implement a wrapper for it in any language of your desire. 


To get started with ICICLE quickly follow this guide, getting started with ICICLE. If you want to learn more about CUDA or GPUs please refer to our GPU development guide.

## Why are we excited about GPUs?

- GPUs are a perfect match for ZK compute - around 97% of ZK protocol runtime is parallel by nature.
- GPUs are simple for developers to use and scale compared to other hardware platforms.
- GPUs are extremely competitive in terms of power / performance and price (3x cheaper).
- GPUs are popular and readily available.

For a more in-depth understanding on this topic we suggest you read [our article on the subject](https://www.ingonyama.com/blog/revisiting-paradigm-hardware-acceleration-for-zero-knowledge-proofs).

## ICICLE integration overview

Lets illustrate an ICICLE integration, so you can understand the core API and design overview of ICICLE.


![ICICLE architecture](../../static/img/architecture-highlight.png)

Engineers usually use a cryptography library such as Arkworks to implement their ZK protocols. These libraries implement efficient primitives which are used as building blocks for the protocol. ICICLE is such a library the difference is that ICICLE is designed from the start to run on GPUs. The Rust and Golang APIs abstract away all low level CUDA details, our goal was to allow developers with no GPU experience quickly get started with ICICLE. 

A developer may use ICICLE with two main approaches in mind.

1. Drop in replacement approach.
2. Full GPU replacement approach.

The first approach is best suited for teams aiming to quickly implement a GPU version of their Prover. This method predominantly involves substituting the core methods with ICICLE's methods. While this approach can yield significant performance gains it has many draw backs, implementing memory optimizations is limited and optimizing the protocol itself to be more suited for GPU is also limited. This approach is a great way to begin using ICICLE, however for someone who is looking to seriously adopt GPU acceleration we would recommend a more rigorous approach.

A complete GPU replacement means preforming the entire ZK proof on the GPU. This approach will reduce latency to a minimum and requires you to change the way you implement the protocol to be more GPU friendly. This approach will take full advantage of GPU acceleration. Redesigning your prover this way may take more engineering effort but we promise you that its worth it!
