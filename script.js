"use strict";
// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/description/
function maximumWealth(accounts) {
    return Math.max.apply(Math, accounts.map(function (customer) { return customer.reduce(function (sum, cur) { return sum + cur; }); }, 0));
}
