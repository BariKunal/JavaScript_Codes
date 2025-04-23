// 37. Remove All Spaces from a String
// Description: Remove all spaces from a string.

// Input: "hello world"

// Output: "helloworld"

let str = "hello world"
let emptyStr = ""

for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) != ' '){
        emptyStr += str.charAt(i);
    }
}
console.log(emptyStr);
