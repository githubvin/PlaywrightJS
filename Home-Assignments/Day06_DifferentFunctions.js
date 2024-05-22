/**
 * 
 * Assignment Details:
Complete the following tasks to practice function declarations, arrow functions, anonymous functions, and callback functions in JavaScript.
 * 
 */ 

/**
 * 
 * Task 1: Function Declaration
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, <name>!" to the console.
 */ 

function userProfile(name) {
    console.log(`Hello, ${name}!`);
} 
userProfile("Vinoth"); 


/** 
 * Task 2: Arrow Function
Create an arrow function named `double` that takes a number as a parameter and returns double its value.
 */ 

const double = (number)=> {
    console.log(`Doubling the given number ${number*2}`); //Doubling the given arguments and printing it. 
} 
double(34); 

//Another way of implementing this arrow function 
const makeitdouble = (number) => number*2; 
console.log(makeitdouble(57)); 


/**
 * 
 * Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` after 2 seconds.
 */ 

setTimeout(()=> { //Anonymous with arrow function 
    console.log("This message is displayed after 2 seconds delay."); 
},2000); 

// Another way only without arrow and with anonymous function 
setTimeout(function() {
    console.log(`Message is displayed after 2 seconds delay.`);
},2000); 


/**
 * Task 4: Callback Function
Create a function named `getUserData` that takes a callback function as a parameter. Inside `getUserData`, simulate fetching data with `setTimeout` and then call the callback function with a user object after 3 seconds.
Call the `getUserData` function and log the user's name and age using the callback function.
 */ 

function getUserData(callback){
    setTimeout(()=>{
        const user = {name:'Paul Perry', age:56}; 
        callback(user); 
    },3000);
} 
getUserData((user) => {
    console.log(`User's name is ${user.name} and age is ${user.age} after 3 seconds delay.`);
}); 
