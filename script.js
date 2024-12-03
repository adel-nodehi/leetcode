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
// 2037. Minimum Number of Moves to Seat Everyone
// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/
function minMovesToSeat(seats, students) {
    seats.sort(function (a, b) { return a - b; });
    students.sort(function (a, b) { return a - b; });
    return seats.reduce(function (moves, seat, i) { return moves + Math.abs(seat - students[i]); }, 0);
}
