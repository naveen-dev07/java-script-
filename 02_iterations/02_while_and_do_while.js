// WHILE LOOP - Checks condition BEFORE executing the loop body
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

// While loop to iterate through array - condition checked first
let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1  // Must manually increment, or loop becomes infinite
}

let score = 11

// DO-WHILE LOOP - Executes body at least ONCE before checking condition
// Even though score (11) > 10, the loop body runs once, then condition fails
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

let score2 = 10

do {
    console.log(`Score2 is ${score2}`);
    score2++  // Increment operator - increases score2 by 1 each iteration (same as score2 = score2 + 1)
} while (score2 <= 10);