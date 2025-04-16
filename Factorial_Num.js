// 2. Factorial of a Number
// Description: Write a program to compute the factorial of a given number n.
// Input: n = 4

// Output: 24

let num = 4;
let fact = 1; let i=1;

while(i<=num){
    fact = fact*i;
    i++;
}
console.log("Factorial of Number Is :"+fact);