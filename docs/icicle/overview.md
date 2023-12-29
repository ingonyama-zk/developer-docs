# What is ICICLE ?

ICICLE is an cryptography library for ZK using GPUs. ICICLE implements blazing fast cryptographic primitives such as EC operations, MSM, NTT, Poseidon hash and more on GPU.

ICICLE allows developers with minimal GPU experience to effortlessly accelerate there ZK application, from our experiments even the most naive implementation may yield 10X improvement in proving times. 


![ICICLE API overview](../../static/img/iciclestructure.png)

The diagram above displays the general architecture of ICICLE and the API layers that exists. At the lowest level we have CUDA kernels which implement all primitives such as MSM for example. Our C++ wrapper is compiled into a shared library this library can be used with our official Golang and Rust wrappers or you can implement a wrapper for it in any language of your desire. 


To get started with ICICLE quickly follow this guide, getting started with ICICLE. If you want to learn more about CUDA or GPUs please refer to our GPU development guide.


## How can you use ICICLE ?

ICICLE can be used in the same way you would use any other cryptography library. However over the past couple months developing and integrating ICICLE into many systems we found acouple use case catagories.

### Using ready made ICICLE ZK provers

If you are a circuit developer and are experiencing bottlenecks while running your circuits, ICICLE prover may be the solution.

ICICLE has been integrated into a number of popular ZK provers including [Gnark prover](https://github.com/Consensys/gnark) and [Halo2](https://github.com/zkonduit/halo2). This means that you can enjoy GPU acceleration for your existing circuits immediately without writing a single line of code by simply switching on the GPU prover flag!

If you wish to scale your prover across multiple GPUs refer to this guide.

### Integrating into existing ZK provers

From our collaboration with [EZKL](https://blog.ezkl.xyz/post/acceleration/) we have learned that its possible to accelerate a specific part of your prover to solve for a specific bottleneck.

ICICLE can be used to accelerate specific parts of your prover without completely rewriting your ZK prover.

### Developing your own ZK provers

If you are planning on developing your ZK prover from scratch ICICLE can be used develope an extremely optimized and scalable ZK prover. One of the examples GPU give is that you can scale your ZK prover across many machines in a data center.

### Developing proof of concepts

ICICLE is also ideal for developing small prototypes. ICICLE has Golang and Rust bindings so you can easily develop a library implementing a specific primitive using ICICLE. An example would be develop a KZG commitment library using ICICLE.


## How can you access GPUs ?

We understand that not all developer have access to a GPU. We don't want this to limit anyone from developing with ICICLE.

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
