// 11. Check if Array is Palindrome
// Description: Check if an array is the same when reversed.

// Input: [1, 2, 3, 2, 1]

// Output: Palindrome

let a = [1, 2, 3, 2, 1]
let end = a.length - 1
let flag = true
for (let i = 0; i < a.length / 2; i++) {
    if (a[i] != a[end]) {
        flag = false;
        break;
    }
    end--;
}
if (flag) {
    console.log("Palindrome Array...");
}
else {
    console.log("Not Palindrome Array...");
}