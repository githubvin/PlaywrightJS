/**
 * 
 * Assignment Details:
Create a JavaScript program that defines a function to compute the intersection of two arrays. The intersection should include elements that appear in both arrays without any duplicates.
Assignment Requirements:
1. Write a function named `intersection` that accepts two arguments, `arr1` and `arr2`, which are arrays of numbers, and returns an array of their intersection.
2. Ensure no duplicate elements in the resulting array. If an element appears in both `arr1` and `arr2`, it should appear only once in the result.
3. Use a loop to find common elements. Iterate through each element of `arr1` and check if it is present in `arr2` and not already included in the result array.
4. Include example calls to the `intersection` function with different arrays to demonstrate the function’s functionality. Include examples with no common elements, all elements common, and typical cases.
Expected Outcome:
Upon completion, you should be able to:
- Understand the concept of arrays and loops in JavaScript.
- Demonstrate the calculation of intersection for various array inputs, handling both typical and edge cases.
 */ 


// function intersection(arr1, arr2) { 
    
//     // using a set to store unique elements from arr2 for faster lookup 
//     let set2 = new Set(arr2); 

//     // Looping through each element in arr1 
//     for (let i=0; i < arr1.length-1; i++){
//         if (set2.has(arr1[i]) && !resourceLimits.includes([i])) {
//             mixedArr.push([i]); 
//         }
//     } 
//     return mixedArr; 
    
// } 
// intersection(); 


// Trying the solution with For each loop 
let array1 = [2,45,5,65,54,66]; 
let array2 = [4,32,54,22,2,25]; 
let mixedArr = []; 

function intersetion(arr1, arr2) {

    // using a set to store unique elements from arr2 for faster lookup 
    let set2 = new Set(arr2); 

    // Looping through each element in arr1 
    for (let ele of arr1) {

        // check if the element is in arr2 and not already in the result array 
        if (set2.has(ele) && !mixedArr.includes(ele)) {
            mixedArr.push(ele); 
        }
    } 
    return mixedArr; 

} 
console.log(intersetion(array1, array2));


