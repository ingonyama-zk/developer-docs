# Integrations

ICICLE has been used by companies like [Celer Network](https://github.com/celer-network), [Gnark](https://github.com/Consensys/gnark), [EZKL](https://blog.ezkl.xyz/post/acceleration/) and others to accelerate their ZK proving pipeline.

Many of these integrations have been a collaboration between Ingonyama and the integrating company. We have learned alot about designing GPU ZK provers. 

If your interested in understanding these integrations better and learning how you can use ICICLE to accelearte your existing ZK proving pipeline this is the place for you.

Lets illustrate an ICICLE integration, so you can understand the core API and design overview of ICICLE.

![ICICLE architecture](../../static/img/architecture-highlight.png)

Engineers usually use a cryptography library such as Arkworks to implement their ZK protocols. These libraries implement efficient primitives which are used as building blocks for the protocol. ICICLE is such a library the difference is that ICICLE is designed from the start to run on GPUs. The Rust and Golang APIs abstract away all low level CUDA details, our goal was to allow developers with no GPU experience quickly get started with ICICLE. 

A developer may use ICICLE with two main approaches in mind.

1. Drop in replacement approach.
2. Full GPU replacement approach.

The first approach is best suited for teams aiming to quickly implement a GPU version of their Prover. This method predominantly involves substituting the core methods with ICICLE's methods. While this approach can yield significant performance gains it has many draw backs, implementing memory optimizations is limited and optimizing the protocol itself to be more suited for GPU is also limited. This approach is a great way to begin using ICICLE, however for someone who is looking to seriously adopt GPU acceleration we would recommend a more rigorous approach.

A complete GPU replacement means preforming the entire ZK proof on the GPU. This approach will reduce latency to a minimum and requires you to change the way you implement the protocol to be more GPU friendly. This approach will take full advantage of GPU acceleration. Redesigning your prover this way may take more engineering effort but we promise you that its worth it!
