# Golang bindings

Golang bindings allow you to use ICICLE as a Golang library.

The `curves` directory contains implementations for every supported curve. Each curve is its own package and includes all the required primitives and methods. There is no need to import all curves into your project, only the ones your project requires.

`goicicle.go` contains wrappers for CUDA memory allocation methods.

`templates` contains scripts to generate new packages for new curves, so if you ever want to add support for a new curve you can generate it based off these templates.

## Using ICICLE Golang bindings in your project

Too add ICICLE to your `go.mod` file. 

```
go get github.com/ingonyama-zk/icicle/goicicle
```

If you want to specify a specific branch

```
go get github.com/ingonyama-zk/icicle/goicicle@<branch_name>
```

For a specific commit

```
go get github.com/ingonyama-zk/icicle/goicicle@<commit_id>
```

While this will add the ICICLE library to your project you sill need to build the shared library, refer to TODO[this guide](https://github.com/ingonyama-zk/icicle/tree/main/icicle) in order to build the shared library.

Once the shared library has been built

```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH/<path_to_shared_libs>
```

Now you should be able to run your ICICLE program as usual.

# How do the Golang bindings work?

The shared libraries produced from the CUDA code compilation are used to bind Golang to ICICLE's CUDA code.

1. These shared libraries (`libbn254.so`, `libbls12_381.so`, `libbls12_377.so`, `libbw6_671.so`) can be imported in your Go project to leverage the GPU accelerated functionalities provided by ICICLE.

2. In your Go project, you can use `cgo` to link these shared libraries. Here's a basic example on how you can use `cgo` to link these libraries:

```go
/*
#cgo LDFLAGS: -L/path/to/shared/libs -lbn254 -lbls12_381 -lbls12_377 -lbw6_671
#include "icicle.h" // make sure you use the correct header file(s)
*/
import "C"

func main() {
    // Now you can call the C functions from the ICICLE libraries.
    // Note that C function calls are prefixed with 'C.' in Go code.
}
```

Replace `/path/to/shared/libs` with the actual path where the shared libraries are located on your system.

## Common issues

### Cannot find shared library

In some cases you may encounter the following error, despite exporting the correct `LD_LIBRARY_PATH`.

```
/usr/local/go/pkg/tool/linux_amd64/link: running gcc failed: exit status 1
/usr/bin/ld: cannot find -lbn254: No such file or directory
/usr/bin/ld: cannot find -lbn254: No such file or directory
/usr/bin/ld: cannot find -lbn254: No such file or directory
/usr/bin/ld: cannot find -lbn254: No such file or directory
/usr/bin/ld: cannot find -lbn254: No such file or directory
collect2: error: ld returned 1 exit status
```

This is normally fixed by exporting the path to the shared library location in the following way: `export CGO_LDFLAGS="-L/<path_to_shared_lib>/"`
