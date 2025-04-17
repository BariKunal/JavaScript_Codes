// 19. Print Inverted Number Pattern
// Description: Write a program to print an inverted number pattern.
// Input: n = 5
// Output:

//  Copy
// 1 2 3 4 5
// 2 3 4 5
// 3 4 5
// 4 5
// 5

for(let i=1; i<=5; i++){
    let row = ""
    for(let j=1; j<=5; j++){
       if(i<=j){

           row += j + " ";
       }
       else{
        row += " ";    
        
       }
    }
    console.log(row.trim());
}