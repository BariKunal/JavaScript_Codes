// 60. Power of a Number
// Description: Write a program to calculate the power of a number x^y.
// Input: x = 2, y = 3
// Output: 8

let base = 2
let index = 3
let i = 1
let power = 1
while (i<=index) {
    power = power*base
    i++
}
console.log("Power Is "+power);
