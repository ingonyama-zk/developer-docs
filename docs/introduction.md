---
slug: /
displayed_sidebar: GettingStartedSidebar
---
# Introduction

Ingonyama is a next-generation semiconductor company, focusing on Zero-Knowledge Proof hardware acceleration. We build accelerators for advanced cryptography, unlocking real-time applications. Our focus is on democratizing access to compute intensive cryptography and making it accessible for developers to build on top of.

Currently our flagship products are:

- **[ICICLE]**:
ICICLE is a fully featured GPU accelerated cryptography library for building ZK provers. ICICLE allows you to accelerate your ZK existing protocols in a matter of hours or implement your protocol from scratch on GPU.

- **[Blaze]**: 
Blaze is a Rust library for ZK acceleration on Xilinx FPGAs. It make it easier then ever for developres to interact with FPGAs and for FPGA designers to give developers access to their hardware.

---

## Our current take on hardware acceleration

At Ingonyama we belive that GPUs are emerging as an essential infrastructure component for enabling ZK acceleartion. This is due to their mass avalbilty, industry proven scalability, competitive preformace to power ratio and the ease at which developers can intergarte GPUs into their software stack. For a complete review of this topic we suggest you read [this article](https://www.ingonyama.com/blog/revisiting-paradigm-hardware-acceleration-for-zero-knowledge-proofs) by our CEO.

We belive GPUs are as important for ZK as to AI.

However despite our current focus on GPUs we are still hard at work developing a ZPU (ZK Processing Unit), with the goal of offering a programable hardware platform for ZK. To read more about ZPUs we suggest you read this [article](https://medium.com/@ingonyama/zpu-the-zero-knowledge-processing-unit-f886a48e00e0).

## ICICLE

ICICLE is is a fully featured GPU accelerated cryptography library, the cryptographic primitives such as EC operations, MSM, NTT and more implemented in CUDA.

ICICLE is designed to be easy to use, developers don't have to touch a single line of CUDA code. Our Rust and Golang ICICLE bindings allow your team to transition from CPU to GPU with minimal re-engineering. ICICLE you wont only enjoy faster prover runtime on GPU but scalability as well, now that your proving pipeline supports GPU its possible to use ICICLE's multi GPU support to scale your prover across any number of GPUs.

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
