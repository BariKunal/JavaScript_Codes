// 24. Check if Two Strings are Anagrams
// Description: Check if two strings are anagrams of each other.

// Input: "listen", "silent"

// Output: Anagram

let str1 = "listen"
let str2 = "silent"

let a1=[]
let a2=[]
if (str1.length !== str2.length) {
    console.log("Not Anagram String...");
}
for (let i = 0; i < str1.length; i++) {
    a1[i]=str1[i];
    a2[i]=str2[i];
}
for (let i = 0; i < a1.length; i++){
    for (let j = i + 1; j < a1.length; j++) {
        if (a1[i] > a1[j]) {
            let temp = a1[i]
            a1[i] = a1[j]
            a1[j] = temp
        }
    }
}
for (let i = 0; i < a2.length; i++) {
    for (let j = i + 1; j < a2.length; j++) {
        if (a2[i] > a2[j]) {
            let temp = a2[i]
            a2[i] = a2[j]
            a2[j] = temp
        }
    }
}
let flag = true
for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
        flag = false
        break
    }
}

if (flag) {
    console.log("Anagram String...");
    
}
else{
    console.log("Not Anagram String...");
    
}

