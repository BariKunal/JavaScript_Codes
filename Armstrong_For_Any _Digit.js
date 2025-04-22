let n = 9474   //153
let temp = n
let count = 0
while (temp != 0) {
    temp = parseInt(temp / 10)
    count++
}

let sum = 0
let OrgNum = n
while (n != 0) {
    let power = 1
    let rem = n % 10
    for (let i = 1; i <= count; i++) {
        power = power * rem
    }
    sum = sum + power
    n = parseInt(n / 10)
}
if (sum === OrgNum) {
    console.log("Armstrong Number...");
}
else {
    console.log("Not Armstrong Number...");
}