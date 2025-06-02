// 47. Count Non-Zero Digits
// Description: Write a program to count the number of non-zero digits in a number.
// Input: n = 1203

// Output: 3

let num = 1203
count = 0
while (num != 0) {
    let rem = num % 10
    if (rem != 0) {
        count++
    }
    num = parseInt(num / 10)
}
console.log(count)