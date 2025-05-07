// 54. Check for Perfect Cube
// Description: Write a program to check if a number is a perfect cube.
// Input: n = 27

// Output: Perfect Cube

let num = 27
let cube = 0 
let i = 1
while(i<=num){
    cube += i*i*i
    i++
}
if(num == cube){
    console.log("Perfect Cube...")
}
else{
    console.log("Not");
    
}