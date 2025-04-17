// 12. Odd Numbers
// Description: Write a program to print all odd numbers between 1 and n.
// Input: n = 10
// Output: 1 3 5 7 9

let num = 10
for (let i = 1; i <= num; i++){
    if(i%2===1){
        console.log(i)
    }
}