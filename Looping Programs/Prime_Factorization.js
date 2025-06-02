// 29. Prime Factorization
// Description: Write a program to perform prime factorization of a number n.
// Input: n = 12

// Output: 2 2 3

let num = 12
// for (let i = 2; i != 1; i++) {
//     while (num % i == 0) {
//         console.log(i)
//         num = parseInt(num / i) 
//     }
// }
for (let i = num / 2; i >= 2; i--) {
    let count = 0
    if (num % i == 0) {

        let j = 1
        while (j <= i) {
            if (i % j == 0) {
                count++
            }
            j++
        }
        num = num / i   
    }
    if (count == 2) {
        console.log(i);
    }
}