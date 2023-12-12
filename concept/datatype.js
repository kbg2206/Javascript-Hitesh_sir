/*primitive
total 7 primitive data type
String  "hello"
Number  100 ,100.36
Boolean  true,false
Symbol
BigInt  large range of number 
null    example of temp
undefined    not assign to any value
*/

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id,anotherId)
console.log(id==anotherId) // false  we give the value same but they are different symbol


const bigNumber=3146465461516546415316544646n // just put n in the last to define bigInt 


/*
Non primitive 
Array 
objects
function
*/

const heros=["shaktiman","naagraj","mr india"] // array which is written in square bracket like a list in python
let obj={
    name:"kushagra",
    age: 22,

} // object same as dict in python

// function
const solve=function(){
    console.log("Hello World")
}

solve()

//+++++++++++++++++++++++++++++++++++++++++++++++

//stack memory(primitive) ,heap memory(non primitive)

//stack
let name="kushagra"
let clg_name = name
clg_name="kushagra jain" // here value of name variable not change stack space 
console.log(name)
console.log(clg_name) 

//heap
let arr=[1,2,3,4,5]
let nums=arr // address will be pass ie reference variable only create 
nums[2]="kushagra" //both arr and nums change 
console.log(arr)
console.log(nums)