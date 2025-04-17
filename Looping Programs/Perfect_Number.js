// 30. Perfect Number
// Description: Write a program to check if a number is perfect.
// Input: n = 6
// Output: Perfect

let num = 88
let i=1
let sum =                                                                                                                                                   0
while(i<num){
    if(num%i==0){
        // console.log(i);
        sum += i
    }
    i++
}
if(sum==num) 
    console.log("Perfect Number...");
else
    console.log("Not Perfect Number...");
