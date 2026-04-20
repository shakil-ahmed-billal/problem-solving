/**
 * Squid Game Problem Solving - Assessment Solutions
 * 
 * This file contains implementations for 10 problems as per the assessment instructions.
 */

// 1. Reverse a String
// Task: Write a function that takes a string and returns it reversed.
export function reverseString(s: string): string {
    // We can use split-reverse-join for a clean implementation in TypeScript/JavaScript
    return s.split('').reverse().join('');
}

// 2. FizzBuzz
// Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".
export function fizzBuzz(n: number): string[] {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

// 3. Find the Largest Number in an Array
// Task: Given an array of integers, return the largest value.
export function findLargest(nums: number[]): number {
    if (nums.length === 0) throw new Error("Array is empty");
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

// 4. Check for Palindrome
// Task: Determine if a word reads the same forward and backward.
export function isPalindrome(s: string): boolean {
    // Normalize string: lowercase and remove non-alphanumeric characters (optional but recommended)
    const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}

// 5. Sum of Array Elements
// Task: Calculate the total sum of all numbers in an array.
export function sumArray(nums: number[]): number {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// 7. Factorial Calculation
// Task: Find the factorial of a non-negative integer n.
export function factorial(n: number): number {
    if (n < 0) throw new Error("n must be non-negative");
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 8. Even or Odd List
// Task: Given an array of numbers, return a new array containing only the even numbers.
export function getEvens(nums: number[]): number[] {
    return nums.filter(n => n % 2 === 0);
}

// 9. Fibonacci Sequence
// Task: Generate the first n numbers of the Fibonacci sequence.
export function fibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    while (sequence.length < n) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
    }
    return sequence;
}

// 12. Check Prime Number
// Task: Determine if a number n is prime.
export function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// 13. Remove Duplicates from a List
// Task: Given an array, return a new array with duplicate values removed.
export function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

// --- Test Runner ---
function runTests() {
    console.log("--- Running Tests ---");

    // 1. Reverse String
    console.log("1. reverseString('hello'):", reverseString('hello')); // expected: 'olleh'

    // 2. FizzBuzz
    console.log("2. fizzBuzz(15):", fizzBuzz(15).join(', '));

    // 3. Find Largest
    console.log("3. findLargest([1, 5, 3, 9, 2]):", findLargest([1, 5, 3, 9, 2])); // expected: 9

    // 4. Palindrome
    console.log("4. isPalindrome('Racecar'):", isPalindrome('Racecar')); // expected: true

    // 5. Sum Array
    console.log("5. sumArray([1, 2, 3, 4, 5]):", sumArray([1, 2, 3, 4, 5])); // expected: 15

    // 7. Factorial
    console.log("7. factorial(5):", factorial(5)); // expected: 120

    // 8. Get Evens
    console.log("8. getEvens([1, 2, 3, 4, 5, 6]):", getEvens([1, 2, 3, 4, 5, 6])); // expected: [2, 4, 6]

    // 9. Fibonacci
    console.log("9. fibonacci(8):", fibonacci(8)); // expected: [0, 1, 1, 2, 3, 5, 8, 13]

    // 12. Is Prime
    console.log("12. isPrime(17):", isPrime(17)); // expected: true
    console.log("12. isPrime(15):", isPrime(15)); // expected: false

    // 13. Remove Duplicates
    console.log("13. removeDuplicates([1, 2, 2, 3, 4, 4, 5]):", removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // expected: [1, 2, 3, 4, 5]

    console.log("--- All tests completed ---");
}

// Execute tests if file is run directly
if (require.main === module) {
    runTests();
}
