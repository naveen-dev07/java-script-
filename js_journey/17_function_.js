function saymyname() {
  console.log("n");
  console.log("a");
  console.log("v");
  console.log("e");
  console.log("e");
  console.log("n");
}
saymyname// its a referance //output:
saymyname()// execute:
 
// function addtwonumbers (number1,number2){ // number1 and number2 is a parameter
    // console.log(number1+number2);
    
// }

addtwonumbers(3,4)
addtwonumbers("3",4)
addtwonumbers(3,null) // 3,null are aguments:


function addtwonumbers (number1,number2){ // number1 and number2 is a parameter
    //let result = number1+number2 // this is the first way 
    //return result    // after the return did not code is included this the kind of end:
    return number1+number2 // there is a second way to take result
}
const result = addtwonumbers()
// console.log("result  :",result) // but there output is undefined;

// function loginuser(username){
//    return `${username} just logged in`
// }
// console.log(loginuser("naveen"));

function loginuser(username = "sam" ){   // never there value is undefined: sam is a default value and it can be overwrite:
    if(username=== undefined){              // ! means not 
        console.log("Please enter a username");
        return
    }
   return `${username} just logged in`
}
console.log(loginuser("naveen")); // output : naveen just logged in 
console.log(loginuser()); // sam just logged in:





















