// 15. Rotate Array by N Positions
// Description: Rotate the array by n positions to the right.


// Input: [1, 2, 3, 4, 5], n = 3


// Output: [4, 5, 1, 2, 3]

let a=[1,2,3,4,5]
let n = 3
for (let i = n; i < a.length; i++) {
    console.log(a[i]);
}
for (let i = 0; i < n ; i++) {
    console.log(a[i]);
    
}