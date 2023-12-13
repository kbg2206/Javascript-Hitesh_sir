// declarration of an object can be done by constructor
//singleton done by constructor
// constructor method =>  Object.create


//object lierals  key-value pair

const mySym=Symbol("key1")

const user={
    name : "Kushagra",
    "Full name": "Kushagra jain",
    age : 22,
    location : "mds",
    email : "jkushagra22@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Wednesday"],
    //mySym : "mykey1",
    [mySym] : "mykey1"
}

//we can access using both the method
//By default key will be treated as String 
// console.log(user.name)
// console.log(user["email"])
// console.log(user.mySym,typeof(user.mySym)) // not used as symbol
// console.log(user[mySym],typeof(user[mySym]))
// console.log(mySym)

// Object.freeze(user)// know we cannot chnage value of object user

//console.log(user)

// user.sex= "male"
// //console.log(user)

// user.greeting = function(){
//     console.log("Hello js user")
//     return 3
// }

// user.greeting()
// console.log(user.greeting())

const reguser={
    email:"google@gmail.com",
    name:{
        first:"kushagra",
        last:"jain"
    }
}
//console.log(reguser.name.last)
const obj={user,reguser}
//console.log(obj)

const obj2=Object.assign({},user,reguser)
const obj3={...user,...reguser}
// console.log(obj3)
// console.log(Object.keys(obj2))
// console.log(Object.values(obj2))


//++++++++++++destructuring++++++++++++
const {location:place}=obj3
//console.log(place)

const navbar=({company}) =>{
    console.log("about us")
}
//navbar(company="hitest")

//+++++++++++ API concept ++++++++++++
//we get data in the format of json which is nothing but object only 
// {
//     "name" : "kushagra",
//     "age" : 22
// }