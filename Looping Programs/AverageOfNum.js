// 39. Calculate Average of First N Natural Numbers
// Description: Write a program to calculate the average of the first n natural numbers.
// Input: n = 5

// Output: 3.0

let num = 5
let sum = 0, avg
for (let i = 0; i <= num; i++) {
    sum += i
}
avg = parseFloat(sum / num)
console.log(`Average of 1 To ${num} Natural Numbers Is = ${avg}`);
