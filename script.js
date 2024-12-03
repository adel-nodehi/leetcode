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
// 2574. Left and Right Sum Differences
// https://leetcode.com/problems/left-and-right-sum-differences/description/
function sum(arr) {
    return arr.reduce(function (sum, cur) { return sum + cur; }, 0);
}
function leftRightDifference(nums) {
    return nums.map(function (_, i) {
        var leftSum = sum(nums.slice(0, i));
        var rightSum = sum(nums.slice(i + 1));
        return Math.abs(leftSum - rightSum);
    });
}
