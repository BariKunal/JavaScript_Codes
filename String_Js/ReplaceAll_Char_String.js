// 25. Replace All Occurrences of a Character in String
// Description: Replace all occurrences of a character in a string with another character.

// Input: "hello", o -> x

// Output: "hellx"

let str = "hollo"
let str1 = "o"
let rep = "x"
let result = ""
for (let i = 0; i < str.length; i++) {
    if(str[i] == str1){
        result += rep 
    }    
    else{
        result += str[i]
    }
}
console.log(result);
