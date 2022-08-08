/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a
 different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
 */
var maxProfit = function (prices) {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit
      max_profit = Math.max(max_profit, profit);
    } else left = right;

    right++;
  }
  return max_profit;
};

var maxProfit2 = function (prices) {
  let max_profit = 0,
    min_price = Number.MAX_SAFE_INTEGER;

  prices.forEach((price) => {
    if (price < min_price) min_price = price;
    if (price - min_price > max_profit) max_profit = price - min_price;
  });
  return max_profit;
};

prices = [7, 1, 5, 3, 6, 4];
prices = [7, 3, 6, 2, 3, 1, 3];
// prices = [7, 6, 4, 3, 1];

console.log(maxProfit2(prices));
