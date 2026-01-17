/*
===== FOR...OF LOOP =====
- Used to iterate over iterable objects (arrays, strings, maps, sets, etc.)
- Gives access to VALUES directly (unlike for...in which gives keys/indices)
- Works with any object that has a Symbol.iterator method
- Cannot be used with regular objects {} directly
- Syntax: for (const value of iterable) { }
*/

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// Example 1: Iterating over an array
for (const num of arr) {
    //console.log(num); // prints each number: 1, 2, 3, 4, 5
}

const greetings = "Hello world!"

// Example 2: Iterating over a string
// Strings are iterable - for...of goes through each character
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`) // prints each character
}

// Example 3: Maps (key-value pairs)
// Maps are iterable and preserve insertion order
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // Overwrites the previous 'IN' value but its not print it because of maps do't allow two entries with same key

// console.log(map);

// Destructuring to get [key, value] pairs from Map
for (const [key, value] of map) {
     console.log(key, ':-', value);
     
   
}
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {           // this is the way you will get values  
    // console.log(key, ':-', value);
}

// second way to get values from map
 for (const [key] of myObject) {
 
    console.log(key, ':-', value); // if we print this it gives a array of all values    in line 71 
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 for (const [key, value] of myObject) {
     console.log(key, ':-', value);    // IMPORTANT: Regular objects are NOT iterable with for...of
                                      // Use for...in loop for objects or convert to entries: Object.entries(myObject)
    
 }

