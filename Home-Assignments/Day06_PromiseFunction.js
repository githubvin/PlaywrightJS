/**
 * Learning Objective:
Understand how to create and use Promises in JavaScript.
 */ 

/**
 * Assignment Details:
Complete the following tasks to practice creating and handling Promises in JavaScript.
Assignment Requirements:
- Create a Promise named conditionalPromise that resolves with the message "Resolved successfully" if a random number is greater than 0.5, and rejects with the message "Rejected" otherwise.
[Hint: Use Math.random()]
- Use the conditionalPromise created to log the resolved or rejected value to the console using .then and .catch.
 */ 

//Creating a Promise function as an object here 
// const conditionalPromise = new Promise((resolve, reject)=>{
//     const randomNumber = Math.random(); //Generates a random number between 0 to 1 
//     console.log(Generated Number is ${randomNumber}); 
//     if (randomNumber > 0.5) {
//         resolve("Resolved successfully.");
//     } else {
//         reject("Rejected the number.");
//     }
// }); 


//creating Promise function 
function conditionalPromise() {
    return new Promise((resolve, reject)=> { //Declaring a new promise 
        const randomNumber = Math.random(); //Using Math function to generate number between 0 to 1 
        console.log(`Generated number is ${randomNumber}`); 
        if (randomNumber > 0.5) {
            resolve("Resolved successfully."); //Fulfill the Promise 
        } else {
            // reject (new Error("Number is rejected."));
            reject("Number is rejected."); //Failed promise 
        }
    })
} 

//Calling the above promise function 
conditionalPromise() 
    .then((message)=>{
        console.log(`Resolved promise: ${message}`);
    }) 
    .catch((error)=>{
        console.error(`Rejected promise: ${error}`);
    })
