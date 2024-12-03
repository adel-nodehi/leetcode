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

function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  return seats.reduce(
    (moves, seat, i) => moves + Math.abs(seat - students[i]),
    0
  );
}
