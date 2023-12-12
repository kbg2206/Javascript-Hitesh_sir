// let arr=[1,2,3,4]

// arr.push(5)
// arr.push(9)
// console.log(arr.length)

// arr.pop()
// arr.shift()//delete element from starting 
// arr.unshift(5) //add element at starting position
// console.log(arr)


// let newarr= arr.join("#") // join every elemnt into string 
// console.log(newarr)


// //slice and splice 
// const a= arr.slice(1,4) // here arr is not change arr remain as it is 
// console.log(a,arr)

// const b=arr.splice(1,3) // 3th index also used and arr change with remaining element 
// console.log(b,arr)


//concat 

// let a=[1,2,3,4]
// let b=['a','b','c','d','e']

// let c=a.concat(b)
// console.log(a)
// console.log(c)

// //spread
// let d=[...a,...b,...c]
// console.log(d)

// let e=[1,2,3,[4,5,[7,8,9]]]
// console.log(e)
// console.log(e.flat(Infinity))


let name="kushagra"
let arr=[1,2,3,4]

console.log(Array.isArray(name))// false 
console.log(Array.isArray(arr)) //true

let a=Array.from(name) // convert name into array 
console.log(Array.isArray(a),a)


let a1=10
let a2=20
let a3=30
console.log(Array.of(a1,a2,a3)) // convert variable ino array 