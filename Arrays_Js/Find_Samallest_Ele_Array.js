// 3. Find Minimum Element in Array
// Description: Find the smallest element in an array.

// Input: [10, 20, 30, 5, 15]

// Output: 5

let a = [10,20,30,5,15]
let min=a[0]
for (let i = 0; i < a.length; i++) {
    if(a[i]<min)
    {
        min=a[i]
    }
}
console.log("Samllest Element in Array Is : "+min);
