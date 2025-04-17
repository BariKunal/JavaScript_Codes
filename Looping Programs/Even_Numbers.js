// 11. Even Numbers
// Description: Write a program to print all even numbers between 1 and n.
// Input: n = 10
// Output: 2 4 6 8 10

let num = 10
for (let index = 1; index <= num; index++) {
    if (index%2===0) {
        console.log(index);
    }
}