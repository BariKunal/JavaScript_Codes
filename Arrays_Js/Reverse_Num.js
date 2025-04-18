// 1. Reverse an Array
// Description: Reverse the order of elements in an array.
// Input: [1, 2, 3, 4, 5]

// Output: [5, 4, 3, 2, 1]

let arr=[1,2,3,4,5];

// let res = arr.reverse()
// console.log(res);

let end = arr.length-1;
let mid = arr.length/2;
for (let i = 0; i < mid; i++) {
    let temp = arr[i]
        arr[i] = arr[end]
        arr[end] = temp
        end--
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}
