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

user.sex= "male"
//console.log(user)

user.greeting = function(){
    console.log("Hello js user")
    return 3
}

user.greeting()
console.log(user.greeting())