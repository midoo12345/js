function printPrimes(n, m) {
    for (let num = n; num <= m; num++) {  // Step 1
        let isPrime = true;               // Step 2
        for (let i = 2; i <= Math.sqrt(num); i++) { // Step 3
            if (num % i === 0) {          // Step 4
                isPrime = false;          // Step 5
                break;                    // Step 6
            }
        }
        if (isPrime && num > 1) console.log(num); // Step 7
    }
}
