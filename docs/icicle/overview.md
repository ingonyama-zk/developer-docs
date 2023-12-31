# What is ICICLE ?

ICICLE is a cryptography library for ZK using GPUs. ICICLE implements blazing fast cryptographic primitives such as EC operations, MSM, NTT, Poseidon hash and more on GPU.

ICICLE allows developers with minimal GPU experience to effortlessly accelerate there ZK application; from our experiments, even the most naive implementation may yield 10X improvement in proving times. 

ICICLE has been used by many leading ZK companies such as [Celer Network](https://github.com/celer-network), [Gnark](https://github.com/Consensys/gnark), [EZKL](https://blog.ezkl.xyz/post/acceleration/) and others to accelerate their ZK proving pipeline.

Dont have a GPU? [read this](#dont-have-access-to-a-gpu)

## How can you use ICICLE?

ICICLE can be used in the same way you would use any other cryptography library. However, over the past couple of months developing and integrating ICICLE into many systems we found a couple use case catagories.

### ICICLE for circuit developers

If you are a circuit developer and are experiencing bottlenecks while running your circuits, an ICICLE integrated prover may be the solution.

ICICLE has been integrated into a number of popular ZK provers including [Gnark prover](https://github.com/Consensys/gnark) and [Halo2](https://github.com/zkonduit/halo2). This means that you can enjoy GPU acceleration for your existing circuits immediately without writing a single line of code by simply switching on the GPU prover flag!

If you wish to scale your prover across multiple GPUs refer to this guide.

### Integrating into existing ZK provers

From our collaboration with [EZKL](https://blog.ezkl.xyz/post/acceleration/) we have learned that its possible to accelerate a specific part of your prover to solve for a specific bottleneck.

ICICLE can be used to accelerate specific parts of your prover without completely rewriting your ZK prover.

### Developing your own ZK provers

If you are planning on developing your ZK prover from scratch ICICLE can be used to develop an extremely optimized and scalable ZK prover. One of the advantages GPUs provide is scaling your ZK prover across many machines in a data center.

### Developing proof of concepts

ICICLE is also ideal for developing small prototypes. ICICLE has Golang and Rust bindings so you can easily develop a library implementing a specific primitive using ICICLE. An example would be develop a KZG commitment library using ICICLE.


## Dont have access to a GPU?

We understand that not all developers have access to a GPU and we don't want this to limit anyone from developing with ICICLE. Here are some ways we can help you gain access to GPUs.

#### Grants

At Ingonyama we are interested in accelerating the progress of ZK and cryptography. If are an engineer, developer or an academic researcher we invite you to checkout [our grant program](https://www.ingonyama.com/blog/icicle-for-researchers-grants-challenges). We will give you access to GPUs and even pay you to do your dream research!

#### Google Colab

This is a great way to get started with ICICLE instantly. Google Colab offers free GPU access the down side being that the GPU doesn't have a lot of RAM but it should be enough for experimenting and even prototyping with ICICLE.

For an extensive guide on how to setup Google Colab with ICICLE refer to [this article](https://github.com/gkigiermo/rust-cuda-colab).

If none of these options are appropriate for you reach out to us on [telegram](https://t.me/RealElan) we will do our best to help you.
