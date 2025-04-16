// 5. Palindrome Number
// Description: Write a program to check if a number is a palindrome.
// Input: n = 121

// Output: Palindrome

let num = 120;
let temp = num;
let rev=0;
while(num>0){
    let rem = num%10;
        rev = (rev*10)+rem;
        num=Math.floor(num/10);   //remove the decimal 12.1 remove the 1
}
// console.log(rev);
if(temp===rev)
    console.log("Palindrome Number ");
else
    console.log("Not Palindrome Number ");