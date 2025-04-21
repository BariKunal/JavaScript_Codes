// 8. Find the Second Largest Element in Array
// Description: Find the second largest element in an array.

// Input: [10, 20, 30, 40, 50]
// Output: 40

let a=[10, 20, 30, 40, 45, 50]
let max=a[0]
let SecMax=a[0]

for (let i = 0; i < a.length; i++) {
    if (max<a[i]) {
        max=a[i]
    }   
}
console.log("MAx is :"+max);
for (let i = 0; i < a.length; i++) {
    if (SecMax!=max && a[i]<max) {
        SecMax = a[i]
    }
}
console.log("Second Largest Element In Array Is : "+SecMax);

