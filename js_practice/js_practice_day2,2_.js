let arr = [ 5,15,25,35,45]
let even = 0
let odd = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
     console.log("its even");
     even++
    
    } else {
        console.log("its odd");
    odd++
    }
}