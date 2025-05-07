// 27. Sum of All Numbers in a Range
// Description: Write a program to calculate the sum of all numbers between m and n.
// Input: m = 1, n = 5

// Output: 15

let m = 1 
let n = 5
let sum = 0
while(m<=n){
    sum += m
    m++
}
console.log(`Sum Of All Numbers Between ${1} to ${n} = ${sum}`);
