/**
 * 
 * Assignment Details:
Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 */


// Finding the length of the last word 
// Declaring the String of multiple words 

let s = "Javascript is so cool!"; 

// Creating a new function to find the last word 
function lastWordLength() {

    // Splitting the given string to array 
    let arrStr = s.split(" "); 
    console.log(arrStr); 

    // Getting the length of the array 
    let arrLength = arrStr.length; 

    // Printing the last word in the string array 
    let lastWord = arrStr[arrLength-1]; 
    console.log("Last word of the string is " + lastWord); 

    // Printing the length of the last word in the string array 
    console.log(`Length of the last word is ${lastWord.length}`)

} 
lastWordLength() 


console.log("*******Next Assignment below******"); 

// Creating a function and variable to execute the task. 

let str = " fly me to the moon "; 

function getLastWordLength() {

    // Trimming the given string and splitting it to string array 
    let arrStr = str.trim().split(" "); 

    // Getting the length and the last word in the string array 
    let arrLen = arrStr.length; 
    let lastString = arrStr[arrLen-1]; 
    console.log("Last word of the string is " + lastString); 

    // Printing the length of the last string in the array 
    console.log("Length of the last word in the given string is " + lastString.length)

}
getLastWordLength()