
// Problem 1: Three ways to sum to n [Assumes input n is a positive integer]

// Recursive Function O(n) time complexity
var sum_to_n_a = function(n) {
  return n == 1 ? 1 : n + sum_to_n_a(n-1);
}

// Iterative Function O(n) time complexity
var sum_to_n_b = function(n) {
  var sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}

// Uses summation formula O(1) time complexity
var sum_to_n_c = function(n) {
  return (n * (n + 1))/ 2;
}