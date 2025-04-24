// 30. Remove Vowels from a String
// Description: Remove all vowels from a given string.

// Input: "hello"

// Output: "hll"

let str = "KunAl"
let str1 = ""
let Vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U']

for (let i = 0; i < str.length; i++) {
    let flag = true
    for (let j = 0; j < Vowels.length; j++) {

        if (str[i] === Vowels[j]) {
            flag = false
            break
        }
    }
    if (flag) {
        str1 += str[i]
    }
}
console.log(str1)

