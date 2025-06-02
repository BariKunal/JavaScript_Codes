// 57. Sum of Divisors
// Description: Write a program to calculate the sum of divisors of a number.
// Input: n = 12

// Output: 28

let num = 12
let sum = 0
for (let i = 0; i<=num; i++) {
    if (num%i==0) {
        sum += i
    }
}
console.log(`Sum Of Divisiors of ${num} Is = ${sum}`);
