"use strict" // treat all js code as modern js but it already use if it'not righten

// alert(3 +3) // we are using nodejs , not browser so alert is not working here

// always know about your code have you write a code  can anyone read it.

//  console.log(3+
//     3); console.log( " sum of 
    //    two Number");  code readability is very important.

 //"ecma international"  use "MDN FOR JS " this is the actual documentation of js they difine all about js


                          // NOW DATA TYPES IN JS
let name = "ankit" // string data type use for text
let age = 23 // number data type use for number
let isLoggedIn = false // boolean data type use for true or false value.


// number data type
let marks = 34.4 // decimal value is also consider as number in js

// string data type
let firstName = "ankit" // use double quotes
let lastName = 'kumar' // use single quotes
let middleName = `singh` // use backticks

// boolean data type
let isLoggedOut = true // true or false value

// undefined data type
let city; // if we not assign any value to variable it taken as undifined value

// null data type
let state = null // null is an empty value it's a standlone value

// bigInt data type
let bigNumber = 1234567890123456789012345678901234567890n // use for large number

// symbol data type
let sym = Symbol("mySymbol") // used to create unique identifiers

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof marks);
console.log(typeof firstName);
console.log(typeof isLoggedOut);
console.log(typeof city);
console.log(typeof state);
console.log(typeof bigNumber);
console.log(typeof sym);    // use for what the type of these data types 

//obejct data type
let myObject = {   // we know more about object later
    name: "ankit",
    age: 23,
    isLoggedIn: true
}

console.log(typeof myObject); 

// use typeof to know the data type of null and undefined
console.log(typeof null); // it gives object data types (this is a known bug in JavaScript)
console.log(typeof undefined); // it shows  undefined  