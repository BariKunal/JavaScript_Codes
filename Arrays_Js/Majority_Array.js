// 1. Find the Majority Element in an Array
// Description: Write a program to find the element that appears more than n/2 times in the array. If no such element exists, return -1.

// Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]

// Output: 4

let a = [3, 3, 4, 2, 4, 4, 2, 4, 4]
let count = 0
let MaxCount = 0
let MajorityEle 
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
        
        if(a[i]==a[j]){
            count++
        }
        if(count>MaxCount){
            MaxCount = count
            MajorityEle = a[i]
        }
    }
        
}
if(MaxCount > a.length/2){
    
    console.log("Array Is Majority : "+MajorityEle);
}
else{
    console.log("Not Majority...");
    
}