var num = 153
var temp = num;
var sum =0
while(num!=0){
    let rem = num % 10;
        sum = sum + (rem*rem*rem)
        num = num /10;
}
console.log(temp)
console.log(sum)
if(sum==temp){
    console.log("Armstrong Number")
}
else
    console.log("Not ArmStrong Number")