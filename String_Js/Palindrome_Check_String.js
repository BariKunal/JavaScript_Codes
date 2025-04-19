// 21. Check if a String is Palindrome
// Description: Check if the given string is a palindrome.

// Input: "madam"

// Output: Palindrome

let str = "racescar"
let last = str.length-1
let flag=true
for (let i = 0; i < str.length/2; i++) {
    if(str[i]!=str[last]){
        flag = false
        break
    }
    last--;
}
if(flag){
    console.log("Palindrome String...");
}
else{
    console.log("Not Palindrome String...");
}