// 19. Reverse a String
// Description: Reverse the given string.
// Input: "hello"

// Output: "olleh"

let str = "hello"
let str1 = ""
for (let i = str.length-1; i >=0; i--) {
    str1 = str1 + str[i]
}
console.log(str1);
