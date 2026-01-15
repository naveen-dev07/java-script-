// Nested scopes //

function one (){
    const username = "naveen "


    function two (){    // father of two and in this children are able to access the parent element 
        const website = "youtube"
        console.log(username);
        
    }
    console.log(website); // error 
    
    two() //output:  naveen 



}

one() 

// same as if else 

if (true){
    const username = "naveen "

    if(username === "naveen "){
        const website = "youtube"
        console.log(username+website);
        
    }
      console.log(website);
      


}
console.log(username);

// *********Hoisting in nested scopes **********
// hoisting means function declaration
//  can be called before the function is declared but function
//  expression cannot be called before the function is declared:


console.log(addone(5)); // output : 6 because addone is called after the function declaration
 
function addone(num){
    return num + 1 // here one is called before the function
}


addtwo(5) // output : you get error because addtwo is called before the function declaration
const addtwo = function(num){

return num + 2 // here two is called after the function
}

// in this situation the first one is run but the second one is not run because of hoisting in nested scopes


