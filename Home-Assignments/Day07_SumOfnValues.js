/**
 * 
 * Learning Objective:
Learn to implement a function in JavaScript that calculates and prints the cumulative sum of numbers from 1 to a given `n`.
Expected Completion Time:
Best Case: 10 minutes
Average Case: 15 minutes
Assignment Details:
Write a function to sum all the values between 1 and n, and return the sum
Take n = 5, print between 1 and 5, and keep adding the sum of values
i.e., 1+2=3, 3+3 =6, 6+4=10, 10+5 =15
Assignment Requirements:
1. Define a function with parameter `n`.
2. Initialize `sum` to 0.
3. Iterate from 1 to `n`.
4. Add `i` to `sum` in each iteration.
5. Print `i` and the current `sum`.
6. Return `sum` after the loop.
7. Call the function with a specific value.
Hints to Solve:
Remember to initialize a sum variable before the loop and use a `for` loop to iterate, adding each number to the sum while printing the intermediate sums.
Expected Outcome:
Upon completion, you should be able to: - Understand and apply looping and accumulation techniques to calculate cumulative sums in JavaScript.
 */ 


function sumOfValues(num) {
    let sum = 0; 
    for (let i = 1; i <= num; i++) {
        sum = sum + i; 
        console.log(`Current number is ${i} and current sum is ${sum}`);
    } 
    return sum; 
} 

let resultSum = sumOfValues(8); 
console.log(`Sum of values of the given number is ${resultSum}`);