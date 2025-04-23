// 16. Find the Largest Sum of Contiguous Subarray
// Description: Find the largest sum of a contiguous subarray in a given array.

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Output: 6

let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let sum = 0
maxSum = 0
for (let i = 0; i < a.length; i++) {
    sum += a[i]
    if(sum>maxSum){
        maxSum = sum
    }
    else if(sum<0){
        sum = 0
    }
    
}
console.log("Largest Sum of Contiguous Subarray is : "+maxSum);
