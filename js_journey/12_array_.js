//***********************Array************************

const myarr = [0,1,3,4,5,6,7, true , "hitesh"] // array is denoting in [ ] bracket and this data types accpet all types elements like bollean, string,etc:
// its mutabale. 

console.log(myarr);
console.log(myarr[0]);// output:0 
// read the articals of "mdn"

//*******mathods of array*********

myarr.push(6) // is used to add elemnt in array 
myarr.push(7)
console.log(myarr);
myarr.pop() // is used to remove the last value ;
myarr.unshift(41) // is used add element in first place in array
myarr.shift()// is used to remove the first element is array :
console.log(myarr.includes(9));// output:false 
console.log(myarr.indexOf(9)); // gives : -1 it means value is not existed

const newarr = myarr.join()// add all the array into string
console.log(typeof myarr); // change into strig:


//slice,splice
console.log("a",myarr);


const myn1 = myarr.slice(1, 3) //Does not change the original array; it creates a new shallow copy

console. Log (myn1) ;
mconsole. log("B ", myarr) ;

// there is main difference btw slice() and splice()

 const myn2 = myarr.splice(1, 3)// Modifies the original array directly (mutates it).
console. log("c",myarr) ;
console. log (myn2) ;
// check more about methods on mdn docs:
