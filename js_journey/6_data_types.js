//**************************DATA TYPES PART 2*********************************

// two types primitive and non primitive data types 

// primitive 

// 7 types : string , number , boolean , null , undifined , symbol, Bigint 

const score = 100
const score_value = 100.3 // float value 

const isloggedin = false 
const outsidetemp = null
let userEmail; // undefined 


const id = Symbol("123")
const anotherId = symbol("123") // if ever pass in symbol never be same value assined in it ex: id and anotherId there value is differnt 
                                // even there value is same  so remember it carefully 
console.log(id === anotherId);  // this way to check it 


const bigNumber = 895398589472920749058948974n;// "n" reperents bigint it's use in the last of the no.


// *******************THE END *********************************


// reference or (non- primitive )

// array , object , functions 

const heros = [ "sakktiman", "naagraj" ," spiderman"] // this is a array use in square barcket spreated by commas 

let myObj = {
    name:"Naveen", // this is objects 
    age: 22,
}

const myFunction = function(){  // type of function is but output is function  "objectfunction"
    console.log("hello world ");

    
}


// one main thing:

console.log(typeof  bigNumber); // ans is undefined :
 // if know more about so go to ecma script they are  briefly explain it .
