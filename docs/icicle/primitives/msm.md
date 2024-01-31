# MSM

MSM (Multi scalar multiplication) is a important primitive in ZK protocols.

### Using MSM

#### Supported algorithms

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

#### MSM Modes

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


#### Extension fields

MSM also supports extension fields (G2). 

Using MSM in G2 requires a G2 config, and of course your Points should also be G2 Points.

```rust
... 

let scalars = HostOrDeviceSlice::Host(upper_scalars[..size].to_vec());
let g2_points = HostOrDeviceSlice::Host(g2_upper_points[..size].to_vec());
let mut g2_msm_results: HostOrDeviceSlice<'_, G2Projective> = HostOrDeviceSlice::cuda_malloc(1).unwrap();
let mut g2_cfg = msm::get_default_msm_config::<G2CurveCfg>();

msm::msm(&scalars, &g2_points, &g2_cfg, &mut g2_msm_results).unwrap();
```

Here you can [find an example](https://github.com/ingonyama-zk/icicle/blob/5a96f9937d0a7176d88c766bd3ef2062b0c26c37/examples/rust/msm/src/main.rs#L114) of MSM on G2 Points.

### Benchmarks

TODO