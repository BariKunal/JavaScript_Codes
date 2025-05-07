// 63. Count Digits Divisible by 3
// Description: Write a program to count the digits divisible by 3 in a number.
// Input: n = 123456

// Output: 2

let num = 123456
let count = 0
while (num != 0) {
    let rem = num % 10
    if (rem % 3 == 0) {
        count++
    }
    num = Math.floor(num / 10)
}
console.log(`Count The Digits Divisible By 3 = ${count}`);
