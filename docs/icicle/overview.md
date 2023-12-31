# What is ICICLE ?

ICICLE is a cryptography library for ZK using GPUs. ICICLE implements blazing fast cryptographic primitives such as EC operations, MSM, NTT, Poseidon hash and more on GPU.

ICICLE allows developers with minimal GPU experience to effortlessly accelerate there ZK application, from our experiments even the most naive implementation may yield 10X improvement in proving times. 

ICICLE has been used by many leading ZK companies such as [Celer Network](https://github.com/celer-network), [Gnark](https://github.com/Consensys/gnark), [EZKL](https://blog.ezkl.xyz/post/acceleration/) and others to accelerate their ZK proving pipeline.

## How can you use ICICLE ?

ICICLE can be used in the same way you would use any other cryptography library. However over the past couple months developing and integrating ICICLE into many systems we found a couple use case catagories.

### ICICLE for circuit developers

If you are a circuit developer and are experiencing bottlenecks while running your circuits, an ICICLE integrated prover may be the solution.

ICICLE has been integrated into a number of popular ZK provers including [Gnark prover](https://github.com/Consensys/gnark) and [Halo2](https://github.com/zkonduit/halo2). This means that you can enjoy GPU acceleration for your existing circuits immediately without writing a single line of code by simply switching on the GPU prover flag!

If you wish to scale your prover across multiple GPUs refer to this guide.

### Integrating into existing ZK provers

From our collaboration with [EZKL](https://blog.ezkl.xyz/post/acceleration/) we have learned that its possible to accelerate a specific part of your prover to solve for a specific bottleneck.

ICICLE can be used to accelerate specific parts of your prover without completely rewriting your ZK prover.

### Developing your own ZK provers

If you are planning on developing your ZK prover from scratch ICICLE can be used develope an extremely optimized and scalable ZK prover. One of the advantages GPUs provide is that you can scale your ZK prover across many machines in a data center.

### Developing proof of concepts

ICICLE is also ideal for developing small prototypes. ICICLE has Golang and Rust bindings so you can easily develop a library implementing a specific primitive using ICICLE. An example would be develop a KZG commitment library using ICICLE.


## How can you access GPUs ?

We understand that not all developers have access to a GPU. We don't want this to limit anyone from developing with ICICLE.

There for if you are working on an exciting project and you dont have access to a GPU please reach out to us via [telegram](https://t.me/RealElan) or [email](immanuel@ingonyama.com) we will be happy to assist you. 

Ingonyama also offers two other options

#### Grants

At Ingonyama we are interested in accelerating the progress of ZK and cryptography. If are an engineer, developer or an academic researcher we invite you to checkout [our grant program](https://www.ingonyama.com/blog/icicle-for-researchers-grants-challenges). We will pay you to do your dream research !

#### Google Colab

This is a great way to get started with ICICLE instantly. Google Colab offers free GPU access the down side being that the GPU doesn't have a lot of RAM but it should be enough for experimenting and even prototyping with ICICLE.

For an extensive guide on how to setup Google Colab with ICICLE refer [here](https://github.com/gkigiermo/rust-cuda-colab).

## Why are we excited about GPUs?

- GPUs are a perfect match for ZK compute - around 97% of ZK protocol runtime is parallel by nature.
- GPUs are simple for developers to use and scale compared to other hardware platforms.
- GPUs are extremely competitive in terms of power / performance and price (3x cheaper).
- GPUs are popular and readily available.

For a more in-depth understanding on this topic we suggest you read [our article on the subject](https://www.ingonyama.com/blog/revisiting-paradigm-hardware-acceleration-for-zero-knowledge-proofs).
