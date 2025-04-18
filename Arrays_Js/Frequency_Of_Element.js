// 7. Find the Frequency of an Element in Array
// Description: Find how many times an element appears in an array.

// Input: [1, 2, 2, 3, 4, 2, 5], element 2

// Output: 3

let a=[1,2,2,3,4,2,5]
let ele = 2
let count=0
for (let i = 0; i < a.length; i++) {
    if(a[i]==ele)
    {
        count++
    }
}
if(count){
    console.log("Frequency of",ele, "Element IS :",count)
}
else{
    console.log("Not Present...");
    
}