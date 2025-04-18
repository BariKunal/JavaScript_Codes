// 32. Multiplication of Numbers from 1 to N
// Description: Write a program to find the multiplication of all numbers from 1 to n.
// Input: n = 4
// Output: 24

let num = 4
let i=1
let mul=1
while(i<=num){
    mul = i*mul
    i++
}
console.log("Multiplication from 1 to",num,"is = ",mul);
