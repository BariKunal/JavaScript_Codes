// 3. Fibonacci Series
// Description: Write a program to print the first n Fibonacci numbers.
// Input: n = 5

// Output: 0 1 1 2 3

let num = 5;
let f0 = 0;
let f1 = 1;
let fib,i=1;

console.log(f0);
console.log(f1);
// while(i<=num){
//     fib = f0+f1;
//     f0 = f1;
//     f1 = fib;
//     console.log(fib);
//     i++;
// }

for(i=1; i<=num; i++){
    fib = f0 + f1;
    f0 = f1; 
    f1 = fib; 
    console.log(fib);
}

