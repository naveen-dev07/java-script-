// if statement 

// if
const isUserloggedIn = true
const temperature = 41
  if ( temperature === 40 ){    
  console.log("less than 50");  } 
  else {      console.log("temperature is greater than 50");  }
//   console.log("Execute");
//   <, >, <=, >=, ==, !=, ===, !== // these are comparison operators 

// const score = 200
 // if (score > 100) {
//  let power = "fly"
 console.log(`User power: ${power}`);  
console.log(`User power: ${power}`);

  const balance = 1000
  if (balance > 500) console.log("test"),console.log("test2"); // there is also another way to write if statement without curly braces but not recommended
  if (balance < 500) {      console.log("less than 500");  } else if (balance < 750) {      console.log("less than 750");
 } else if (balance < 900) {    
        
    console.log("less than 750");
    } else {      
        console.log("less than 1200");
  }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // and  //  It returns true only if all the expressions it connects are true. This is commonly used 
                                          // in if statements for complex decision-making.
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // primarily used to check if at least one of two or more conditions is true. 
                                               // It is also commonly used for providing default (fallback) values to variables. 
    console.log("User logged in");
}