# MSM

MSM (Multi scalar multiplication) is a important primitive in ZK protocols.

### Using MSM

Our MSM implementation supports two algorithms.

-   Bucket accumulation 
-   Large triangle accumulation

In most scenarios you should be using Bucket accumulation as its a more parallel friendly algorithm and will yield better performance on larger MSMs. 

The exception being a large batch of smaller MSMs.

```rust
...

let mut cfg_bls12377 = msm::get_default_msm_config::<BLS12377CurveCfg>();

// is_big_triangle will determine which algorithm to use 
cfg_bls12377.is_big_triangle = true;

msm::msm(&scalars, &points, &cfg, &mut msm_results).unwrap();
...
```

`is_big_triangle=true` will activate Large triangle accumulation and `is_big_triangle=false` will activate Bucket accumulation.

ICICLE MSM also supports two different modes

- Batch MSM
- Single MSM

Batch MSM allows you to run many MSMs with a single API call, Single MSM will launch a single MSM computation.

You dont need to do anything special to toggle between batch or single MSM.

```rust
...

msm::msm(&scalars, &points, &cfg, &mut msm_results).unwrap();

...
```

You simply call `msm::msm`, if `msm_results` is a single result it will run in single MSM mode, if you are expecting many results MSM will run in batch mode.

### Benchmarks

TODO