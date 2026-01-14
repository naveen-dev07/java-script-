// const user = new Object() output:{}     // its a singleton object 
const user1 = {} // output :{}   // its non sigleton obj.
console.log(user1);
console.log(user);


user.id = "1234sjs"
user.name = "micke"
user.login = false

console.log(user)


const regularUser = {
    email: "anyone@gmail.com",
    fullname: {
        firstname: "micky rodveler ", // its nesting into obj.
        lastname : "rodveler"

    }   
    }
 // how to call it there nested obj.

console.log(regularUser.fullname.userfulname.firstname);

// merging there two obj:
const obj1 ={1:"a",2:"w",3:"r"}
const obj2 ={4:"a",5:"w",7:"r"}
const obj3 ={8:"a",9:"w",10:"r"}

const obj4 = {obj1,obj2,obj3} // {1:"a",2:"w",3:"r"},{4:"a",5:"w",7:"r"},{8:"a",9:"w",10:"r"}
console(obj4)     // first way is inappropriat
const obj5 = Object.assign({},obj1,obj2,obj3)
console.log(obj5); // thats the correct way to use it.
// output:

// 3rd way 
const obj6 =  {...obj1,...obj2,...obj3}
console.log(obj6)


const users = [ // arrayobject 
       {
        id : 1 ,                   // make more than 1 obj :
        email : "ajnkja@gmail.com"

       }
]
users[1].email
console.log(user1);

console.log(Object.keys(user1)); // print there all keys in it 
console.log(Object.values(user1)); // there all values 
console.log(Object.entries(user1));// object change into arrays by this 

console.log(user1.hasOwnProperty(login)); // true 


