const score = 400
console.log(score);  // output ; 400 
                                 // this is the diff btw these 
const balance = new Number(100) //output is Number: 100 // its gives a label to force like its a no.
console.log(balance);

console.log(balance.toString()); // this method is used to change in strig 

console.log(balance.toFixed(1));//method is used to format a number to a specified number of decimal places 
                                 // like: 100.0 this is on one place if there value is 2 so the decimal is 100.00 that's the means 

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // read about this  on mdn docx // output :123.9

const hundreds = 10000000000
console.log((hundreds.toLocaleString("en-IN"))); //is used to add commas btw zeros but there default setting in USA:"en-IN" there way to change there ethnicity acco. to number system



