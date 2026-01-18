// ============ METHOD CHAINING ============
// Chaining = Using multiple array methods one after another
// Each method returns an array that becomes input for the next method
// This keeps the code cleaner and more readable

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ============ WITHOUT CHAINING (Step-by-step) ============
// const newNums = myNumers.map( (num) => { return num + 10})
// This would first multiply each number, but we want multiple operations

// ============ WITH CHAINING (Better approach) ============
// Process: 1 → multiply by 10 → add 1 → filter (keep >= 40)
const newNums = myNumers
                .map((num) => num * 10 )        // Step 1: [10, 20, 30, ..., 100]
                .map( (num) => num + 1)         // Step 2: [11, 21, 31, ..., 101]
                .filter( (num) => num >= 40)    // Step 3: [41, 51, 61, ..., 101]

// Result: [41, 51, 61, 71, 81, 91, 101]

// ============ WHY CHAINING IS BETTER? ============
// ✓ More readable - Clearly shows the transformation steps
// ✓ Less variable pollution - No need for intermediate variables
// ✓ Easier to debug - Each method is on a new line
// ✓ Functional programming style - Cleaner and more modern

console.log(newNums);
