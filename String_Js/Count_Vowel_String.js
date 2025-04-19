// 20. Count Vowels in String
// Description: Count the number of vowels in a given string.

// Input: "hello"

// Output: 2

let str = "hello"
let Vowelcount=0
for (let i = 0; i < str.length; i++) {
    if(str[i]==='a' || str[i]==='e' || str[i]==='i' ||str[i]==='o' || str[i]==='u'){
        Vowelcount++;
    }
    
}
console.log("Total Vowels In String : "+Vowelcount);
