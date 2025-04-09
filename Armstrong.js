var num = 9474
var temp = num;
var sum =0

var digit = num.toString().length;

for(;num>0;){
    let rem = num % 10;
        // sum = sum + (rem*rem*rem)
        sum += Math.pow(rem,digit)
        num = Math.floor(num / 10);
}

if(sum==temp){
    console.log("Armstrong Number")
}
else
    console.log("Not ArmStrong Number")