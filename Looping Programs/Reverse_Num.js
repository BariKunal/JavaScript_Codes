// 7. Reverse a Number
// Description: Write a program to reverse the digits of a given number.
// Input: n = 12345

// Output: 54321

let num = 12345;
let rev = 0;
while(num!=0)
{
    let rem = num % 10;
        rev = (rev*10) + rem;
        num = Math.floor(num / 10);
}
console.log("Reverse Number Is :",rev);