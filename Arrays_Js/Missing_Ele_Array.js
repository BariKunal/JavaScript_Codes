// 17. Find Missing Number in Array
// Description: Find the missing number in an array containing numbers from 1 to n.

// Input: [1, 2, 4, 5]

// Output: 3

let a=[1,2,4,5]
console.log("Missing Elements In Array :");

for (let i = 0; i < a.length; i++) {
    for (let j = a[i]+1; j <a[i+1] ; j++) {
        console.log(j);
    }  
}