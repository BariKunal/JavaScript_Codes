
//     1
//    121
//   12321
//  1234321

for (let i = 1; i <= 4; i++) {
    let str = ""
    let num = 1
    for (let j = 1; j <= 7; j++) {
        if (j > 4 - i && j < 4 + i) {
            str += num
            if (j <= 3) {
                num++
            }
            else {
                num--
            }
        }
        else {
            str += " "
        }
    }
    console.log(str);
}