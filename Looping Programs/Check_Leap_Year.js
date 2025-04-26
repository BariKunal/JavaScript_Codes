// 24. Check Leap Year
// Description: Write a program to check if a given year is a leap year.
// Input: year = 2020

// Output: Leap Year

let year = 2002
if(year%100!=0 && (year%400==0 || year%4==0)){
    console.log("Leap Year...");
}
else{
    console.log("Not Leap Year...");
}