// immediately invoked function expression (IIFE) 

//a JavaScript function that runs as soon as it is defined.
//  It is a common design pattern used to create a private scope, 
// preventing variables from "polluting" the global namespace

(function coffee(){
    //this is named iife
    const username = "naveen"
    console.log(`hello ${username}`); // output : hello  naveen
} )(); // we have to add () at the end to invoke the function immediately
       // ";" this is used to end the iife function.
// another way  
(function(website){ 
    const username = "naveen"
    console.log(`hello iife ${username} welcome to ${website}`); // output : hello iife naveen welcome to youtube
} )("youtube"); // we have to add () at the end to invoke the function immediately and pass argument

// why we use iife : to avoid global scope pollution 
// example without iife

((name) => {
    console.log(`hello ${name}`); // output : hello naveen
} )("naveen");

// example with iife