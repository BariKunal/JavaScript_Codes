// 62. Sum of First N Perfect Squares
// Description: Write a program to calculate the sum of the first n perfect squares.
// Input: n = 4

// Output: 30

let num = 4
let sum = 0
let i = 1
while(i<=num){
    sum += i*i
    i++
}
console.log(`Sum Of 1 to ${num}th Perfect Square Is = ${sum}`);
