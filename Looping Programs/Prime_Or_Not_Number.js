// 13. Check for Prime Number
// Description: Write a program to check if a number n is prime.
// Input: n = 7
// Output: Prime

let num = 7
let i=1
let count=0
while(i<=num){
    if(num%i==0){
        count++
    }
    i++
}
if(count==2){
    console.log("Prime Number");  
} 
else{
    console.log("Not Prime Number");
    
}
