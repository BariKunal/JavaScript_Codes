// 54. Check for Perfect Cube
// Description: Write a program to check if a number is a perfect cube.
// Input: n = 27

// Output: Perfect Cube

let num = 27
let i = 1
while (i * i * i < num) {
    i++
}
console.log(cube);

if (num == i * i * i) {
    console.log("Perfect Cube...")
}
else {
    console.log("Not Perfect Cubes...");
}