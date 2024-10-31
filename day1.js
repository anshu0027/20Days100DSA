//  Q-1 Palindrome Checker

function isPalindromeNumber(num) {
  const str = num.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

const number = 121;
console.log(isPalindromeNumber(number));

const anotherNumber = 123;
console.log(isPalindromeNumber(anotherNumber));

//  Q-2 Power of Two
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(16)); // Output: true

// Q-3 Fibonacci Number
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

console.log(fibonacci(6)); // Output: 8

// Q-4 Tribonacci Number
function tribonacci(n) {
  const trib = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
  }
  return trib[n];
}

console.log(tribonacci(4)); // Output: 4

// Q-5 Water Bottles
function numWaterBottles(numBottles, numExchange) {
  let total = numBottles;
  while (numBottles >= numExchange) {
    const newBottles = Math.floor(numBottles / numExchange);
    total += newBottles;
    numBottles = newBottles + (numBottles % numExchange);
  }
  return total;
}

console.log(numWaterBottles(9, 3)); // Output: 13

// Q-6 Two Sum
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// Q-7 Stock Market for max profit
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5

// Q-8 Add to Array-Form of Integer
function addToArrayForm(num, k) {
  let result = [];
  let carry = 0;
  let i = num.length - 1;

  while (i >= 0 || k > 0 || carry > 0) {
    let sum = carry + (i >= 0 ? num[i] : 0) + (k % 10);
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    i--;
    k = Math.floor(k / 10);
  }

  return result.reverse();
}

console.log(addToArrayForm([2, 7, 4], 181)); // Output: [4, 5, 5]

// Q-9 Max Product of Two Elements in Array
function maxProduct(nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
}

console.log(maxProduct([3, 4, 5, 2])); // Output: 12

// Q-10 Median of Two Sorted Arrays
function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  return merged.length % 2 === 0
    ? (merged[mid - 1] + merged[mid]) / 2
    : merged[mid];
}

console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
