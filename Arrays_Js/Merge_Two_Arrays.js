// 10. Merge Two Arrays
// Description: Merge two arrays into one.

// Input: [1, 2, 3], [4, 5, 6]

// Output: [1, 2, 3, 4, 5, 6]

let a=[1,2,3]
let b=[4,5,6]
let c=[a.length + b.length];
let k=0
for (let i = 0; i < a.length; i++) {
    c[k++]=a[i];
}

for (let i = 0; i < b.length; i++) {
    c[k++]=b[i];
}

// console.log(c);
console.log("Merge Two Arrays Are :");

for (let i = 0; i < c.length; i++) {
    console.log(c[i]); 
}

