/**
 * Calculates the sum of integers from 1 to n using a loop.
 *
 * Complexity:
 * - Time: O(n) → iterates from 1 to n
 * - Space: O(1) → only uses a single accumulator
 *
 */
function sumToNIterative(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Calculates the sum of integers from 1 to n using the arithmetic series formula.
 *
 * Formula: n * (n + 1) / 2
 *
 * Complexity:
 * - Time: O(1) → constant-time computation
 * - Space: O(1) → no additional memory used
 *
 */
function sumToNFormula(n: number): number {
  return (n * (n + 1)) / 2;
}

/**
 * Calculates the sum of integers from 1 to n using recursion.
 *
 * Complexity:
 * - Time: O(n) → one recursive call per number down to 1
 * - Space: O(n) → call stack grows with n
 *
 */
function sumToNRecursive(n: number): number {
  if (n <= 1) return n;
  return n + sumToNRecursive(n - 1);
}