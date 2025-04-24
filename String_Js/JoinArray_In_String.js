// 34. Join an Array of Strings into One String
// Description: Join an array of strings into a single string.

// Input: ["hello", "world"]

// Output: "helloworld"

let arr =["Kunal", "Bari"]
let str = ""
for (let i = 0; i < arr.length; i++) {
    str += arr[i];
}
console.log(str);
