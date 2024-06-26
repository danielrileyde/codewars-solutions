// Description:

// You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

//     products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
//     amounts: [3, 24, 8]
//     prices: [199, 299, 399]

// return the three product names with the highest revenue (amount * price).

// Note: if multiple products have the same revenue, order them according to their original positions in the input list.

// MY SOLUTION
function top3(products, amounts, prices) {
  return products
    .map((product, index) => {
      return {
        name: product,
        revenue: amounts[index] * prices[index],
        index: index,
      };
    })
    .sort((a, b) => b.revenue - a.revenue || a.index - b.index)
    .slice(0, 3)
    .map((product) => product.name);
}
