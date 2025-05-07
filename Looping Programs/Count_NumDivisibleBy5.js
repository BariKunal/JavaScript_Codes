// 56. Count Numbers Divisible by 5
// Description: Write a program to count the numbers divisible by 5 between 1 and n.
// Input: n = 20

// Output: 4

let num = 20
let i = 1
let count = 0

while(i<=num){
    if(i%5==0){
        // console.log(i)
        count++
    }
    i++
}
console.log(`Count Of Numbers Are Divided By 5 Between ${1} To ${num} = ${count}`);

