//     *
//    ***
//   *****
//  *******
// *********

let n = 5
for (let i = 1; i <= n; i++) {
    let str = " "
    for (let j = 1; j <= 9; j++) {
        if (j < 5 + i && j > 5 - i) {
            str += "*"
        }
        else {
            str += " "
        }
    }
    console.log(str);
}