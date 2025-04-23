// 22. Count Words in a String
// Description: Count the number of words in a string.

// Input: "hello world"

// Output: 2

let str = "hello world"
let count = 0
let flag = false
// let delSpace = str.trim()
for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) != ' ' && flag==false)
    {
        count++
        flag = true
    }
    else if(str.charAt(i) == ' '){
        flag = false
    }
}
console.log(count);

