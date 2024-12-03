"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// 3285. Find Indices of Stable Mountains
// https://leetcode.com/problems/find-indices-of-stable-mountains/description/
function stableMountains(height, threshold) {
    return height.reduce(function (stableMountains, _, i) {
        if (height[i - 1] > threshold)
            return __spreadArray(__spreadArray([], stableMountains, true), [i], false);
        return stableMountains;
    }, []);
}
