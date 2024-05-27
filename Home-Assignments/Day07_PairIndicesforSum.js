/**
 * Learning Objective:
Learn to identify and return pairs of indices whose elements sum up to a specific target using nested loops in JavaScript.
Expected Completion Time:
Best Case: 15 minutes
Average Case: 20 minutes
Assignment Details:
Given the array, const nums = [2, 4, 7, 8, 11, 14];
const target = 18;
return the indices that have matching targets >> 7+11 (2, 4), 4+14 (1, 5)
Assignment Requirements:
1. Initialize an empty array `results`.
2. Use a nested loop to iterate over `nums` array elements.
3. Check if the sum of two distinct elements equals `target`.
4. If true, add their indices to `results`.
5. Return `results` containing pairs of indices.
Hints to Solve:
Iterate with two loops: one for each element, and another for elements ahead. Inside the second loop, check if two elements sum to the target.
Expected Outcome:
Upon completion, you should be able to: - Understand the nested loops and the arrays in JavaScript
 */ 

const nums = [2,4,7,8,11,14]; 
const target = 18; 
let results = []; 

function indicesForTargetSum(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                results.push([i],[j]); 
            }
        }
    } 
    return results; 
    // console.log(`Indices to meet the given target is ${results}`)
} 
// indicesForTargetSum(nums, target); 
console.log(indicesForTargetSum(nums, target));