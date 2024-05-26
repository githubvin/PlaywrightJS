/**
 * Learning Objective:
Learn how to count the occurrences of a specific element in an array using JavaScript.
Expected Completion Time:
Best Case: 10 minutes
Average Case: 15 minutes
Assignment Details:
Find the number of occurrences.
Given the array, const nums = [2,4,5,2,1,2];
if const k = 2, then output >> 3
Assignment Requirements:
1. Initialize count to 0.
2. Loop through the array `nums`.
3. If the element equals `k`, increment count.
4. Return the count of `k` in `nums`.
Hints to Solve:
Loop through the array and compare the k with the array index value and if matches, increase the count
Expected Outcome:
Upon completion, you should be able to: - Understand how to operate the arrays in JavaScript
 */ 


const nums = [2,4,5,2,1,2]; 
let count = 0; // count is initialized to 0 
let k = 2; 

const countOccur = ()=> { //creating an arrow function here 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === k) {
            count++;   //incrementing the count 
        }
    } 
    return count; //returning the count here 

}
console.log(countOccur()); 


// // We can also pass the arguments in the function and get the values in runtime here. 
// function occurNum (nums, k) {
//     for (let i=0; i < nums.length; i++) {
//         if (nums[i] === k) {
//             count++; 
//         }
//     } 
//     return count; 
// } 
// console.log(occurNum(nums, k)); // taking the same above inputs in these arguments 

