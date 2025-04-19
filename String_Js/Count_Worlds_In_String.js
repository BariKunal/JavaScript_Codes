// 22. Count Words in a String
// Description: Count the number of words in a string.

// Input: "hello world"

// Output: 2

let str="kunal r bari "
str = str.trim()
let CountWorlds = 0
for (let i = 0; i < str.length; i++) {
    if (str[i]==' ') {
        CountWorlds++
    }
}
if(CountWorlds>0){

    console.log("Worlds Count In a String Are : "+(CountWorlds+1));
}
else{
    
    console.log("String Is Empty...");
}