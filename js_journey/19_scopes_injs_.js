let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)

// {} these are scopes if they used with function and with if else statment then it called scope:

if (true){  // true means i defnattly use it 
       let a = 10
       const b = 20    // its a block scope and outside the curly braces called global scope
       var c = 30       // if we right any code will run in block scope but there is just oppsite with block scope it cannot accept global code:
                        // ex : line 19 and 20 get an errir 
}

// why we did'not use var because 
console.log(a) // if we prints then you get error 
console.log(b) // also error 
console.log(c) // but here output : 30 that's the problem because at line 16 there scope gonaa be end:so did'nt give output: 



























