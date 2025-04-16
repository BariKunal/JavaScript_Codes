// 4. Prime Numbers
// Description: Write a program to print all prime numbers up to a given number n.
// Input: n = 10

// Output: 2 3 5 7

let num = 10;
for(let i=2; i<=num; i++){
    let flag = true;

    for(let j=2; j<=i/2; j++){
        if(i%j===0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(i);
    }
}
