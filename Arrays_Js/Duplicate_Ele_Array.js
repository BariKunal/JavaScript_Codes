// 12. Find the Duplicate Elements in Array
// Description: Find all the duplicate elements in an array.

// Input: [1, 2, 3, 4, 5, 1, 3]

// Output: [1, 3]

let a = [1, 2, 3, 4, 5, 1, 3]
let flag=false;
console.log("Duplicates Elements In Array :");

for (let i = 0; i < a.length; i++) {
    for (let j = i+1; j < a.length; j++) {
        if (a[i] == a[j]) {
            console.log(a[i], " ");
        }
    }
}
