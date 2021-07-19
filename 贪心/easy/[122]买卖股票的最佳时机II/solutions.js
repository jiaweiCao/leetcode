/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const profire = prices[i + 1] - prices[i];
    if (profire > 0) {
      result += profire;
    }
  }
  return result;
};
