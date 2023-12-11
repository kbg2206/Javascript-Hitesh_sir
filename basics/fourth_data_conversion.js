// conversion from string to number
let score="33asdfg" //"null" "undefined" "33"
console.log(score,typeof(score))

let value =Number(score) // convert string to number
//value will contain value by converting score to number but if score is not a number then value contains NaN(not a number)
console.log(value,typeof(value)) 

//Number will convert null value to 0
//Number will convert undefined as NaN
//Number will convert boolean value as 0 and 1

//coversion to string ==> String 
//conversion to boolean ==> Boolean
// "" =>false in boolean
// "wdtgeh" =>true 
// any number except 0 will covert to true