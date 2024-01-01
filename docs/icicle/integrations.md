# Integrations

ICICLE has been used by companies like [Celer Network](https://github.com/celer-network), [Gnark](https://github.com/Consensys/gnark), [EZKL](https://blog.ezkl.xyz/post/acceleration/) and others to accelerate their ZK proving pipeline.

Many of these integrations have been a collaboration between Ingonyama and the integrating company. We have learned a lot about designing GPU based ZK provers.  

If you're interested in understanding these integrations better or learning how you can use ICICLE to accelerate your existing ZK proving pipeline this is the place for you.

Lets illustrate an ICICLE integration, so you can understand the core API and design overview of ICICLE.

![ICICLE architecture](../../static/img/architecture-highlight.png)

Engineers usually use a cryptography library to implement their ZK protocols. These libraries implement efficient primitives which are used as building blocks for the protocol; ICICLE is such a library. The difference is that ICICLE is designed from the start to run on GPUs; the Rust and Golang APIs abstract away all low level CUDA details. Our goal was to allow developers with no GPU experience to quickly get started with ICICLE. 

A developer may use ICICLE with two main approaches in mind.

1. Drop in replacement approach.
2. Full GPU replacement approach.

The first approach for GPU-accelerating your Prover with ICICLE is quick to implement, but it has limitations, such as reduced memory optimization and limited protocol tuning for GPUs. It's a solid starting point, but those committed to fully leveraging GPU acceleration should consider a more comprehensive approach.

A full GPU replacement means preforming the entire ZK proof on the GPU. This approach will reduce latency to a minimum and requires you to change the way you implement the protocol to be more GPU friendly. This approach will take full advantage of GPU acceleration. Redesigning your prover this way may take more engineering effort but we promise you that its worth it!
