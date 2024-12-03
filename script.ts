"use strict";

// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/description/

function maximumWealth(accounts: number[][]): number {
  return Math.max(
    ...accounts.map((customer) => customer.reduce((sum, cur) => sum + cur), 0)
  );
}
