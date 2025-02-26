"use strict";

/*
// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/description/

function maximumWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((customer) => customer.reduce((sum, cur) => sum + cur), 0)
  );
}
*/

/*
// 2037. Minimum Number of Moves to Seat Everyone
// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/

function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  return seats.reduce(
    (moves, seat, i) => moves + Math.abs(seat - students[i]),
    0
  );
}
*/

/*
// 2574. Left and Right Sum Differences
// https://leetcode.com/problems/left-and-right-sum-differences/description/

function sum(arr: number[]): number {
  return arr.reduce((sum, cur) => sum + cur, 0);
}

function leftRightDifference(nums: number[]): number[] {
  return nums.map((_, i) => {
    const leftSum = sum(nums.slice(0, i));
    const rightSum = sum(nums.slice(i + 1));

    return Math.abs(leftSum - rightSum);
  });
}
*/

/*
// 3285. Find Indices of Stable Mountains
// https://leetcode.com/problems/find-indices-of-stable-mountains/description/

function stableMountains(height: number[], threshold: number): number[] {
  return height.reduce((stableMountains: number[], _, i) => {
    if (height[i - 1] > threshold) return [...stableMountains, i];

    return stableMountains;
  }, []);
}
*/

// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
  return `${x}` === `${x}`.split("").reverse().join("");
}
