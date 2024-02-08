# NTT - Number Theoretic Transform

The Number Theoretic Transform (NTT) is a variant of the Fourier Transform used over finite fields or rings, particularly those of integers modulo a prime number. NTT operates in a discrete domain and is used primarily in applications requiring modular arithmetic, such as cryptography and polynomial multiplication.

NTT is defined similarly to the Discrete Fourier Transform (DFT), but instead of using complex roots of unity, it uses roots of unity within a finite field. The definition hinges on the properties of the finite field, specifically the existence of a primitive root of unity of order \(N\) (where \(N\) is typically a power of 2), and the modulo operation is performed with respect to a specific prime number that supports these roots.

Formally, given a sequence of integers \(a_0, a_1, ..., a_{N-1}\), the NTT of this sequence is another sequence of integers \(A_0, A_1, ..., A_{N-1}\), computed as follows:

\[ A_k = \sum_{n=0}^{N-1} a_n \cdot \omega^{nk} \mod p \]

where:
- \(N\) is the size of the input sequence and is a power of 2,
- \(p\) is a prime number such that \(p = kN + 1\) for some integer \(k\), ensuring that \(p\) supports the existence of \(N\)th roots of unity,
- \(\omega\) is a primitive \(N\)th root of unity modulo \(p\), meaning \(\omega^N \equiv 1 \mod p\) and no smaller positive power of \(\omega\) is congruent to 1 modulo \(p\),
- \(k\) ranges from 0 to \(N-1\), and it indexes the output sequence.

The NTT is particularly useful because it enables efficient polynomial multiplication under modulo arithmetic, crucial for algorithms in cryptographic protocols, and other areas requiring fast modular arithmetic operations. 

There exists also INTT which is the inverse operation of NTT. INTT can take as input an output sequence of integers from an NTT and reconstruct the original sequence.


# Using NTT

## Supported curves

NTT supports the following curves:

`bls12-377`, `bls12-381`, `bn-254`, `bw6-761`

## Supported algorithms

Our NTT implementation supports two algorithms `` and ``.
