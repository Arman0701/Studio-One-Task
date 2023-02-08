export default function test_prime(n) {
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let x = 2; x < Math.sqrt(n); x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

// console.log(test_prime(1651651606));

// ==============================================================================
// ==============================================================================

// export default function isPrime(n) {
// 	if (n < 2) {
// 		return false;
// 	}

// 	for (let i = 2; i < n; i++) {
// 		if (n % i === 0) {
// 			return false;
// 		}
// 	}

// 	return true
// }

// ==============================================================================
// ==============================================================================

// function power(x, y, p) {
//     let res = 1;
//     x = x % p;
//     while (y > 0) {
//         if (y & 1) res = (res * x) % p;
//         y = y >> 1;
//         x = (x * x) % p;
//     }
//     return res;
// }

// export default function isPrime(n, k) {
//     if (n <= 1 || n == 4) return false;
//     if (n <= 3) return true;

//     let d = n - 1;
//     while (d % 2 === 0) {
//         d /= 2;
//     }

//     for (let i = 0; i < k; i++) {
//         let a = Math.floor(Math.random() * (n - 4)) + 2;
//         let x = power(a, d, n);

//         if (x === 1 || x === n - 1) continue;

//         for (let r = 0; r < d - 1; r++) {
//             x = (x * x) % n;
//             if (x === n - 1) break;
//         }

//         if (x !== n - 1) return false;
//     }

//     return true;
// }

// ==============================================================================
// ==============================================================================

// export default function sieveOfEratosthenes(n) {
//     let isPrime = new Array(n+1).fill(true);
//     // isPrime[0] = isPrime[1] = false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (isPrime[i] === true) {
//             for (let j = i * i; j <= n; j += i) {
//                 isPrime[j] = false;
//             }
//         }
//     }

//     let primeNumbers = [];
//     for (let i = 2; i <= n; i++) {
//         if (isPrime[i] === true) {
//             primeNumbers.push(i);
//         }
//     }
//     return primeNumbers;
// }

// ==============================================================================
// ==============================================================================

// function SieveOfEratosthenes(n) {
//     let prime = [];
//     for (let i = 0; i <= n; i++) {
//         prime[i] = true;
//     }
//     let p = 2;
//     while (p * p <= n) {
//         if (prime[p] === true) {
//             for (let i = p * p; i <= n; i += p) {
//                 prime[i] = false;
//             }
//         }
//         p++;
//     }
//     return prime[n];
// }

// export default function checkPrimeNumber(n) {
//     if (n <= 1) {
//         return false;
//     }
//     return SieveOfEratosthenes(n);
// }
