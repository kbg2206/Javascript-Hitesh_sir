
//String methods

let name ="Kushagra"
let age =22
console.log("My name is "+ name +" and my age is "+age) // tHis is not a good practice 

console.log(`My name is ${name} and my age is ${age}`) // Modern way

console.log(name[4],typeof(name))

console.log(name.length)
console.log(name.toUpperCase()) //original string will not change stack method
console.log(name.charAt(5)) // what char present at the 5th position 
console.log(name.indexOf('g')) // give index when first g occur in the string 


let newstr= name.substring(0,5) // give substring from 0 to index 4
console.log(newstr)

let newstr2=name.slice(-5,7)
console.log(newstr2)

let s1= "       kush agra       "
console.log(s1.trim())

let url="https://kushagra.com/kushagra%20jain"
let newurl=url.replace("jain","ji")
console.log(newurl)


let arr=name.split('a')
console.log(arr)