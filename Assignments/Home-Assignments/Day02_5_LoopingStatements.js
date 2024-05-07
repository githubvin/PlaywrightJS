/**
 * 
 * Assignment Details:
Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25
Assignment Requirements:
1. Create a function - print odd numbers (from 1 to 25) and execute in debug mode
2. Call that function from the javascript
Hints to Solve:
Use the modulo operator for odd number detection and a for loop to iterate values from 1 to 25
 */ 

function printOddNumbers() {
    for (let num = 1; num <= 25; num++) {
        if (num%2 != 0) {
            console.log(num);
        } 
    }
} 
printOddNumbers(); 