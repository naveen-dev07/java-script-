// ============ REDUCE() METHOD ============
// reduce() = Condenses an array into a SINGLE value
// Syntax: array.reduce((accumulator, current) => operation, initialValue)
// acc = accumulated result, curr = current element

const myNums = [1, 2, 3]

// Example 1: Sum all numbers (0 is starting value)
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// Arrow function version (same as above)
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// Process: 0+1=1 → 1+2=3 → 3+3=6
console.log(myTotal);  // Output: 6


// ============ REAL-WORLD EXAMPLE: Shopping Cart Total ============
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Calculate total price of all items
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// Start at 0, keep adding each item's price
console.log(priceToPay);
