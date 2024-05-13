// Reversing the given string 

//split - split a string into array of substrings
//input: Testleaf output: faeltset
let compName = "Testleaf"; //Output:T, e, s, t, l, e, a, f 
function reverseString() { 
    let chars = compName.split(""); 
    console.log(chars); 

    let revString = " "; 
    for (let i = chars.length-1; i >= 0; i--) {
        
        // revString = revString + chars[i]; 
        revString+=chars[i]; 
        
    } 
    return revString; 
} 
console.log(reverseString()); 


console.log("*****************"); 

console.log("Next Method using Reverse inbuilt method.");
// Reversing the string using inbuilt methods 
let inputName = "Welcome to Testleaf"; 
let reversing = inputName.split("").reverse().join(''); 
// let reversing = inputName.split("").reverse().join('-'); 
// Here we are using join to append all the individual characters. 
// Whatever the char we give here in join in single quotes that will be append with each character in the output. 
console.log(reversing); 

