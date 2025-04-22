// 36. Find the Position of a Character in a String
// Description: Find the index of a specific character in a string.

// Input: "hello", character o

// Output: 4

let str = "hello"
let char = "h"
let index = -1
let flag = false;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
        index = i
        // console.log(i);
        flag = true
        break
    }
}
if (index != -1) {
    console.log(index);
}
else {
    console.log("Not Present In String ");
}