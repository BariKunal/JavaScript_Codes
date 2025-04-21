// 14. Sort Array in Descending Order
// Description: Sort the elements of the array in descending order.

// Input: [10, 2, 30, 4, 5]

// Output: [30, 10, 5, 4, 2]


let a = [10, 2, 30, 4, 5]
for (let i = 0; i < a.length-1; i++) {
    for (let j = i+1; j < a.length; j++) {
        if (a[i]<a[j]) {
            let temp = a[i]
            a[i] = a[j]
            a[j] = temp
        }
    }
}
console.log("Sorted Array in Descending Order :");

for (let i = 0; i < a.length; i++) {
    
    console.log(a[i]);
}