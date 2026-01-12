// denoted by ""
// concatnate "+"

const name = "abhishek"
const repoCount = 50

// there is two to concat it 
// first
console.log(name + repoCount + "value"); // i will not recommend you to do this insted of 

// ************************strig interpolation **********************************

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // this is the right way to do it or obviously loking professional also you use methods in doller ;


const gameName = new String('hitesh-hc-com') // search it the meanning of new keyword 

console.log(gameName[0]); // this way to call any char from there place no.


// console.log(gameName.__proto__);// also research on it 


// console.log(gameName.length); // this method used to know the len of any string as you seen there name 


// console.log(gameName.toUpperCase());// it used for chnage the all samll into capital letter 

console.log(gameName.charAt(2));// used for know letter place through there no.

console.log(gameName.indexOf('t')); // used for know there place no. through there letter

const newString = gameName.substring(0, 4) // string.substring(startIndex, endIndex); //method in JavaScript is used to extract a portion of a string 
 

console.log(newString);

const anotherString = gameName.slice(-8, 4) // method in JavaScript is used to extract a portion of a string 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // this is used to know is there element present in your string;

console.log(gameName.split('-')); // method divides a string into an ordered list of substrings and returns them as a new array

