// 27. Convert String to Lowercase
// Description: Convert a string to lowercase.

// Input: "HELLO"

// Output: "hello"

let str = "HELLO"
let str1 = ""
for (let i = 0; i < str.length; i++) {
    let hashcode = str.charCodeAt(i)

    if(hashcode>=65 && hashcode<=90){
        str1 += String.fromCharCode(hashcode+32)

    }
    else{
        str1 += str[i]
    }
}
console.log("Lower Case : "+str1);
