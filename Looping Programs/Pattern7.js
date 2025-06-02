// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

for (let i = 1; i <= 5; i++) {
    let str = ""
    let num = 6 - i
    for (let j = 1; j <= 5; j++) {
        if (i <= j) {
            str += " " + num
            num--
        }
    }
    console.log(str);
}