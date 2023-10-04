---
slug: /
displayed_sidebar: GettingStartedSidebar
---
# Introduction

Ingonyama is a next-generation semiconductor company, focusing on Zero-Knowledge Proof hardware acceleration. We build accelerators for advanced cryptography, unlocking real-time applications. Our focus is on democratizing access to compute intesive cryptography and making it acceible for developers to build ontop of.

- **[ICICLE]**:
A GPU Library for Zero-Knowledge Acceleration. ICICLE allows you to acclerate your ZK protocols in a matter of hours.

- **[Blaze]**: 
Blaze is a Rust library for ZK acceleration on Xilinx FPGAs. It make it easier then ever for developres to interact with FPGAs and for FPGA designers to give developers access to their hardware.

---
## Our current take on hardware accleration

At Ingonyama we belive that GPUs are emerging as an essential infrastructure component for enabling ZK acceleartion. This is due to their mass avalbilty, industry proven scaliblity, competitve preformace to power ratio and the ease at which developers can intergarte GPUs into their software stack. For a complete review of this topic we suggest you read [this article](https://medium.com/@omershlomovits/revisiting-paradigm-hardware-acceleration-for-zero-knowledge-proofs-16f717a49555) by our CEO.

We belive GPUs are as important for ZK as to AI.

However despite our current focus on GPUs we are still hard at work developing a ZPU (ZK Processing Unit), with the goal of offering a programable hardware platform for ZK.

## ICICLE

ICICLE is a CUDA library implementing cryptographic primitives, its designed to be used as a crypro library in any ZK protocol. What this means is that if you are looking to accelerate your exsisting prover or are writing a prover from scratch its possible to simply use ICICLE and enjoy GPU acclerated primitives such as EC operations, MSM, NTT and more without having to write a single line of CUDA code!

ICICLE comes with Rust and Golang bindings offically supported by Ingonyama. Using ICICLE is as simple as installing a Golang or Rust package in your project.
Using ICICLE you wont only enjoy faster prover runtimes but compute scalability as well, now that your proving pipeline supports GPU its possible to use ICICLE's multi GPU support to scale your prover across any number of GPUs.

Learn more about ICICLE and GPUs [here](./icicle/overview.md).

## Blaze

Blaze is a Rust library for ZK acceleration on Xilinx FPGAs. Blaze can be used by both FPGA developer and software engineers looking to integrate FPGAs into their software. 

Software engineers will enjoy Blazes abstractions allowing them to interact with FPGA drivers at a high level without having to implement low level read/write operations, we also allow developers to programmatically load binary's to an FPGA and much more. FPGA developers can benefit by building their accelerators based on our shell named [Wrapshell](https://github.com/Quarky93/warpshell). Wrapshell offers common features, such as the PCIe subsystem (DMA), AXI Firewalls, and infrastructure to reconfigure the user-partition at runtime as well as many more features which simplify and speed up the development of FPGA-based accelerators. Wrapshell with Blaze allow you to deliver easy to integrate custom PCIe-based FPGA accelerator.

Learn more about Blaze and FPGAs [here](./icicle/overview.md).

## Get in Touch

If you have any questions, ideas, or are thinking of building something in this space join our discssion on [Discord]. Most of our work is open source, you can explore our code on [github](https://github.com/ingonyama-zk) or perhaps read some of [our research papers](https://github.com/ingonyama-zk/papers).

Follow us on [Twitter](https://x.com/Ingo_zk) and [YouTube](https://www.youtube.com/@ingo_ZK), and sign up for our [mailing list](https://wkf.ms/3LKCbdj) to get our latest announcements.

[ICICLE]: bonsai/bonsai-overview.md
[BLAZE]: proof-system/proof-system.mdi 
[Discord]: https://discord.gg/6vYrE7waPj
