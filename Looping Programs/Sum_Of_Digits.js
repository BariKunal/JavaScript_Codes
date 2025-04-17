// 9. Sum of Digits
// Description: Write a program to calculate the sum of digits of a given number.
// Input: n = 234

// Output: 9

let num = 2341
let sum = 0

while(num!=0){
    let rem = num%10
    sum += rem
    num = Math.floor(num/10)
  
}
console.log("Sum of Digits Is :",sum)