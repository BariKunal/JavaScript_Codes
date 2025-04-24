// 32. Remove Leading and Trailing Spaces from String
// Description: Remove any leading and trailing spaces from a string.

// Input: " hello "

// Output: "hello"

let str = " kunal "
let emptyStr = ""
for(let i=0; i<str.length; i++){
    if(str.charAt(i) != ' '){
        emptyStr += str.charAt(i);
    }
}
console.log(emptyStr);
