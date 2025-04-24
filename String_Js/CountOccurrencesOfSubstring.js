// 35. Count Occurrences of a Substring in String
// Description: Count how many times a substring occurs in a string.

// Input: "hello world hello", substring "hello"

// Output: 2

let str = "hello world hello"
let str1 = "hello"
let count = 0
for (let i = 0; i <= str.length - str1.length; i++) {
    let flag = true;
    for (let j = 0; j < str1.length; j++) {
        if (str[i + j] !== str1[j]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        count++;
    }
}

console.log("Occurence " + count);