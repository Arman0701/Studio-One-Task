// export default function isPrime(n) {
//     if (n <= 5) {
//         return isPrime_simple(n);
//     }

//     let before = (n + 1) % 6 === 0;
//     let after = (n - 1) % 6 === 0;

//     console.log("before ::: ", before);
//     console.log("number ::: ", n);
//     console.log("after ::: ", after);

//     return before || after;
// }

// function isPrime_simple(n) {
//     if (n < 2) {
//         return false;
//     }

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// ==============================================================================
// ==============================================================================

export default function test_prime(n) {
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else if (n === Infinity) {
		return false;
	} else {
        for (let x = 2; x <= Math.ceil(Math.sqrt(n)); x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

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