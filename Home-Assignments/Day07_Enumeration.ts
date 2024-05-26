/**
 * 
 * Learning Objective:
Understand and apply the concepts of enums and functions in TypeScript to manage different application environments effectively.
Assignment Details:
Create a TypeScript program that defines an enum for different application environments and a function to simulate running tests on these environments.
Assignment Requirements:
1. Create an enum named `Environment` with four values representing different stages of a software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`, `PRODUCTION`.
2. Write a function named `runTests` that accepts an argument of type `Environment`. The function should print a message indicating the environment against which the tests are running.
3. The function `runTests` should be specified to return `void`, highlighting that it does not return any data.
4. Include example calls to `runTests` using different enum values to demonstrate the function's functionality.
 */ 

enum Environment { //By default enum will assign sum integer value like 0,1 etc to print the values.
    // so here we are giving a String value to display some texts using = ""; 
    Local = "local", 
    Development = "development", 
    Staging = "staging", 
    Production = "production"
} 

function runTests(env: Environment): void { 
    console.log(`Test is executed in ${env}`); 
} 
runTests(Environment.Local); 
runTests(Environment.Development); 
runTests(Environment.Staging); 
runTests(Environment.Production); 


