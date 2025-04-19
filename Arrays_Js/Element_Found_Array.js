// 18. Check if Array Contains a Specific Element
// Description: Check if a specific element exists in an array.

// Input: [1, 2, 3, 4], element 3

// Output: Found

let a=[1,2,3,'Kunal',4,5]
let searchEle = 'Kunal'
let flag=false
for (let i = 0; i < a.length; i++) {
    if(a[i]===searchEle){
        flag = true;
        break;   
    }
}
if(flag){
    console.log("Element Found...");
    
}
else{
    console.log("Element Not Found...");
    
}