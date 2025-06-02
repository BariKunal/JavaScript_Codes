// 69. Print Hollow Right-Angle Triangle Pattern
// Description: Write a program to print a hollow right-angle triangle pattern.
// Input: n = 4

// *       
// * *     
// *   *   
// * * * *


for(let i = 1; i <= 4; i++){
    let str = ""
    for(let j = 1; j <= 4; j++){
        if (i>=j && (j==1 || j==i || i==4)) {
            str += "* "
        }
        else{
            str += "  "
        }
    }
    console.log(str);
}