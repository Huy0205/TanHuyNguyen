"use strict";
// Method 1: Using a loop (O(n))  
// Iterates from 1 to n, summing up values. Simple but not the most efficient.
function sum_to_n_a(n) {
    if (n < 1)
        return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// Method 2: Using a formula (O(1))  
// Fastest approach using the mathematical formula (n * (n + 1)) / 2.
function sum_to_n_b(n) {
    return (n < 1) ? 0 : n * (n + 1) / 2;
}
// Method 3: Using recursion (O(n))  
// Calls itself recursively until n == 1. Can cause stack overflow for large n.
function sum_to_n_c(n) {
    return n < 1 ? 0 : n + sum_to_n_c(n - 1);
}
// Test
console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
