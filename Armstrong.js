var num = 153
var temp = num;
var sum =0
for(;num>0;){
    let rem = num % 10;
        sum = sum + (rem*rem*rem)
        num = Math.floor(num / 10);
}

if(sum==temp){
    console.log("Armstrong Number")
}
else
    console.log("Not ArmStrong Number")