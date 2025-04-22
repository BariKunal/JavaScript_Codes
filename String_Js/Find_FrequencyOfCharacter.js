// 31. Find the Frequency of a Character in a String
// Description: Find how many times a character appears in a string.

// Input: "hello", character l

// Output: 2

let str = "hello"
let str1 = 'e'
let count=0
for (let i = 0; i < str.length; i++) {
    
    if(str.charAt(i)==str1){
        count++
    }
    
}
if(count>0){
    console.log("Frequency Is : "+count);
}
else{
    console.log("Not Present this character...");
    
}