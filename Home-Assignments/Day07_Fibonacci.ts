/**
 * Learning Objective:
Understand and apply basic programming constructs in TypeScript to compute the Fibonacci sequence using iterative methods.
Expected Completion Time:
Best Case: 15 min
Average Case: 20 min
Assignment Details:
Create a TypeScript program that defines a function to compute the nth Fibonacci number using a loop (iterative approach).
Assignment Requirements:
1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative integer, and returns the nth Fibonacci number.
2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two Fibonacci numbers and update these iteratively up to `n`.
3. Provide example calls to the `fibonacci` function with different integers to demonstrate the function’s functionality.
Expected Outcome:
Upon completion, you should be able to:
- Understand the concept of loops in TypeScript.
- Compute Fibonacci numbers efficiently for a range of inputs, demonstrating the iterative approach to solving common algorithmic problems.
 */ 

function fibonacci(n: number): number {
    if (n < 0) {
        throw new Error("Given number is negative. Please provide positive integer.");  
    } 
    let a = 0, b = 1; 
    if (n === 0) return a; // here we are just returning the nth fibonoacci when it is very small 
    if (n === 1) return b; 

    // starting the for loop from 2 because for the first two numbers we have the return number above. 
    for (let i = 2; i <= n; i++) {
        let temp = a + b; 
        a = b; 
        b = temp; 
    } 
    return b; 
} 

console.log(fibonacci(0)); 
