/**
 * Learning Objective:
Understand and apply basic programming constructs in TypeScript to compute the factorial of a non-negative integer using iterative methods.
Expected Completion Time:
Best Case: 15 min
Average Case: 20 min
Assignment Details:
Create a TypeScript program that defines a function to compute the factorial of a given non-negative integer using a loop (iterative approach).
Assignment Requirements:
1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer, and returns its factorial.
2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative number is passed, the function should throw an error.
3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer from 2 up to `n`.
4. Include example calls to the `factorial` function with different integers to demonstrate the function’s functionality. Include at least one example where an error is thrown due to a negative input.
Expected Outcome:
Upon completion, you should be able to:
- Understand the concept of loops and conditionals in TypeScript.
- Demonstrate the calculation of factorial for various inputs, handling both valid and invalid cases. 
 */ 


function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer and greater than 0"); 
    } 

    let result = 1; 

    for (let i = 2; i <= n; i++) {
        result *= i; 
    } 
    return result; 
} 
console.log(factorial(4)); 



// Another way of implementation 
function factorialAnother(n: number): number { 
    if (n < 0) {
        console.log("Enter a number non-negative and greater than 0.");
        
    }
    let result = 1; 
    for (let j = 1; j <= n; j++) {
        result = result * j; 
    } 
    return result; 
} 
console.log(factorialAnother(-2)); 