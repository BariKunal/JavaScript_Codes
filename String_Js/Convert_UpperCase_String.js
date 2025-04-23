// 26. Convert String to Uppercase
// Description: Convert a string to uppercase.

// Input: "hello"

// Output: "HELLO"

let str = "Kunal BaRi"
let str1 = ""

// str1 = str.toUpperCase()
for (let i = 0; i < str.length; i++) {
    let Hashcode = str.charCodeAt(i)
    if(Hashcode>=97 && Hashcode<=122){

        str1 += String.fromCharCode(Hashcode-32)
    }
    else{
        str1 += str[i];
    }
}
console.log("Upper Case String : "+str1);
