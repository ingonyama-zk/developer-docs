# Rust bindings

Rust bindings allow you to use ICICLE as a rust library.

`icicle-core` defines all interfaces, macros and common methods.

`icicle-cuda-runtime` defines DeviceContext which can be used to manage a specific GPU as well as wrapping common CUDA methods.

`icicle-curves` implements all interfaces and macros from icicle-core for each curve. For example icicle-bn254 implements curve bn254. Each curve has its own build script which will build the CUDA libraries for that curve as part of the rust-toolchain build.

## Using ICICLE Rust bindings in your project

Simply add the following to your `Cargo.toml`.

```
# GPU Icicle integration
icicle-cuda-runtime = { git = "https://github.com/ingonyama-zk/icicle.git", tag = "v1.0.0" }
icicle-core = { git = "https://github.com/ingonyama-zk/icicle.git", tag = "v1.0.0" }
icicle-bn254 = { git = "https://github.com/ingonyama-zk/icicle.git", tag = "v1.0.0" }
```

`icicle-bn254` being the curve you wish to use and `icicle-core` and `icicle-cuda-runtime` contain ICICLE utilities and CUDA wrappers.

If you wish to point to a specific ICICLE branch add `branch = "<name_of_branch>"` or `tag = "<name_of_tag>"` to the ICICLE dependency. For a specific commit add `rev = "<commit_id>"`.
 
Lets write a quick example to demonstrate how you would use the Rust ICICLE library. Create a file named `main.rs` in your project, with the following:

```rust
use icicle_bn254::curve::{
    ScalarCfg,
    ScalarField,
};

use icicle_bls12_377::curve::{
    ScalarCfg as BLS12377ScalarCfg,
    ScalarField as BLS12377ScalarField
};

use icicle_cuda_runtime::{
    stream::CudaStream,
    memory::DeviceSlice,
    device_context::get_default_device_context
};

use icicle_core::{
    ntt::{self, NTT},
    traits::{GenerateRandom, FieldImpl}
};

use icicle_core::traits::ArkConvertible;

use ark_bn254::Fr as Bn254Fr;
use ark_bls12_377::Fr as Bls12377Fr;
use ark_ff::FftField;
use ark_poly::{EvaluationDomain, Radix2EvaluationDomain};
use ark_std::cmp::{Ord, Ordering};
use std::convert::TryInto;

#[cfg(feature = "profile")]
use std::time::Instant;

use clap::Parser;

fn main() {
    let size = 1 << 23;
    let scalars = ScalarCfg::generate_random(size);
    let mut ntt_results: DeviceSlice<'_, ScalarField> = DeviceSlice::cuda_malloc(size).unwrap();
    
    let icicle_omega = <Bn254Fr as FftField>::get_root_of_unity(size.try_into().unwrap()).unwrap();
    let ctx = get_default_device_context();
    ScalarCfg::initialize_domain(ScalarField::from_ark(icicle_omega), &ctx).unwrap();

    let stream = CudaStream::create().unwrap();
    let mut cfg = ntt::get_default_ntt_config::<ScalarField>();
    cfg.ctx.stream = &stream;
    cfg.is_async = true;
    cfg.are_outputs_on_device = true;

    ntt::ntt(scalars.as_slice(), ntt::NTTDir::kForward, &cfg, ntt_results.as_slice()).unwrap();

    stream.synchronize().unwrap();
    let mut host_bn254_results = vec![ScalarField::zero(); size];
    ntt_results.copy_to_host(&mut host_bn254_results[..]).unwrap();
    
    stream.destroy().unwrap();
}
```

Using `ScalarCfg::generate_random` we generate random inputs for our `NTT` method, we also initialize the domain `initialize_domain` this generates twiddle factors which will be used to compute NTTs. 

We also create a CUDA stream by calling `CudaStream::create().unwrap()`, this stream will be used to send the data over to the GPU and return the result.


By calling `ntt::ntt(scalars.as_slice(), ntt::NTTDir::kForward, &cfg, ntt_results.as_slice()).unwrap();` we send the configurations, scalars and result pointer over to the GPU to preform the NTT computation.

By default CUDA kernels run in parallel to the CPU, so after triggering your `ntt` method if you need to wait for the result you must synchronize your stream. This can be done easily with `stream.synchronize().unwrap();` your CPU thread will now wait for all CUDA kernels to resolve.

To retrieve the result you must copy the result from device to host.

```
...
ntt_results.copy_to_host(&mut host_bn254_results[..]).unwrap();
...
```

Finally to clean up just destroy the stream you have been using.

This example covers the basic usage of the ICICLE Rust bindings.

For more examples refer [here](https://github.com/ingonyama-zk/icicle/tree/main/examples).


# How do the rust bindings work?

The rust bindings are just rust wrappers for ICICLE Core static libraries which can be compiled. We integrate the compilation of the static libraries into rusts toolchain to make usage seamless and easy. This is achieved by [extending rusts build command](https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs).


```rust
use cmake::Config;
use std::env::var;

fn main() {
    println!("cargo:rerun-if-env-changed=CXXFLAGS");
    println!("cargo:rerun-if-changed=../../../../icicle");

    let cargo_dir = var("CARGO_MANIFEST_DIR").unwrap();
    let profile = var("PROFILE").unwrap();

    let out_dir = Config::new("../../../../icicle")
                .define("BUILD_TESTS", "OFF") //TODO: feature
                .define("CURVE", "bn254")
                .define("CMAKE_BUILD_TYPE", "Release")
                .build_target("icicle")
                .build();

    println!("cargo:rustc-link-search={}/build", out_dir.display());

    println!("cargo:rustc-link-lib=ingo_bn254");
    println!("cargo:rustc-link-lib=stdc++");
    // println!("cargo:rustc-link-search=native=/usr/local/cuda/lib64");
    println!("cargo:rustc-link-lib=cudart");
}
```
