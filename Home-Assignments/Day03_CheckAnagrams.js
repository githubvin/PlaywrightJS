// Checking the two given strings are Anagrams or not 

// Creating a function and variables 

let str1 = "Dusty"; 
let str2 = "Study"; 

function checkAnagram() {

    // Trimming the given two strings and then splitting into array 
    // Then sorting and joining the characters 
    str1 = str1.trim().toUpperCase().split("").sort().join(); 
    str2 = str2.trim().toUpperCase().split("").sort().join(); 

    if (str1.length == str2.length && str1 == str2) {
        console.log("Both the given strings are Anagrams.")
    } else {
        console.log("Given strings are not Anagrams.")
    }

} 
checkAnagram()