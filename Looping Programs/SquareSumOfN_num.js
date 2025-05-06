// 20. Sum of Squares of First N Natural Numbers
// Description: Write a program to calculate the sum of squares of the first n natural numbers.
// Input: n = 3

// Output: 14

let num = 2;
let i=1, sum = 0;
while(i<=num){
    sum += i*i
    i++
}
console.log(`Sum Of Squares of First ${num} = ${sum}`);