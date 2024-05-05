/**
 * Assignment 1
 * 
 * Create the following variables using let (not using var) and check their typeOf
 a) firstName
 b) companyName
 c) mobileNumber
 d) isAutomation
 e) hasPlaywright (do not assign)
Print and confirm the values and data types
 */ 

let firstName = "Vinoth Kumar"; 
let companyName = "Instellars"; 
let mobileNumber = 9894402305; 
let isAutomation = true; 
let hasPlaywright; 

console.log(firstName); 
console.log("Type of First Name: " + typeof firstName); 

console.log(companyName); 
console.log("Type of Company Name: " + typeof companyName);

console.log(mobileNumber); 
console.log("Type of Mobile Number: " + typeof mobileNumber); 

console.log(isAutomation); 
console.log("Type of isAutomation: " + typeof isAutomation); 

console.log(hasPlaywright); 
console.log("Type of hasPlaywright: " + typeof hasPlaywright);  


console.log("*******************************");

/**
 *  Assignment 2 
 * 
 *  Declare a const name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript
 * 
 */

const browser = "Chrome"; 
function getBrowserVersion() { 
    if (browser == "Chrome") { 
        var browserVersion = 124; 
    }
    console.log(browserVersion);
}
getBrowserVersion(); 
