// 10. Count Digits
// Description: Write a program to count the number of digits in a number n.
// Input: n = 12345

// Output: 5

let num = 12345
let count = 0
while(num!=0){
    let rem = num % 10;
        count++
        num = Math.floor(num/10)
}
console.log("Count OF Digits IS :",count);
