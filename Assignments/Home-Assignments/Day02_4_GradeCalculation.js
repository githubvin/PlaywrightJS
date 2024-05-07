/** 
 * 
 * Assignment Details:
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement to assess score ranges.
Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.
Hints to Solve:
Use a `switch` statement with `true` for score range checks to assign grades.
 */ 

function scoreGrade(studentScore) {
    switch (true) { 
        // Here break keyword is not required when we use return keyword instead of console log.
        case studentScore >= 400:
            return "Grade A"; 
        case studentScore >= 300: 
            return "Grade B"; 
        case studentScore >= 200: 
            return "Grade C"; 
    
        default:
            return "Score is too low.";
    }
} 

// let studentScore = 332; // Using variable declaration. 
// Here we are using console log since the above function uses return keyword and passing the arguments inside. 
console.log(scoreGrade(246.3)); 