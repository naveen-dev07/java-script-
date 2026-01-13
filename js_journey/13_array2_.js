const marvel_heros =["thor","ironman","spiderman"]
const dc_heros = ["superman",'flash',"wonderwoman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros); // ["thor","ironman","spiderman",["superman",'flash',"wonderwoman"]]
console.log(marvel_heros[3][1]);// flash


const allheros= marvel_heros.concat(dc_heros)
console.log(marvel_heros); //["thor","ironman","spiderman","flash","batman"]
 

// spread() method in array 
const all_new_heros = [...marvel_heros,...dc_heros] // there is a  short way to add 2 array ["thor","ironman","spiderman","flash","batman"]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]] 
const real_another_array = another_array.flat(Infinity)//creates a new array with all sub-array elements concatenated into it recursively up to a specified depth : value is requrid 
console.log(real_another_array); // output: [1,2,3,4,5,6,7,6,7,4,5]



console.log( Array.isArray("abhi")); // false
console.log(Array.from("abhi"));// is used to change any elment in array

console.log(Array.from({name:"abhi"})); // intresting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // returns a new array fom a set of element.






