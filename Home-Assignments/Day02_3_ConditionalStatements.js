
//if else


function getBrowser(){
if(browserName === "chrome") {
console.log("Supported browser");
}else {
console.log("Unsupported browser");
}
}
let browserName = "safari";
getBrowser();



function getBrowserUsingReturn(){
if(browser === "chrome") {
return "Supported browser"
}else {
return "Unsupported browser"
}
}
let browser = "firefox";
console.log(getBrowserUsingReturn());


//if else if --> multiple conditions


function getBrowserVersion(){
if (browser==='chrome'){
return 124;
}else if(browser==='edge'){
return 123;
}else if(browser==='safari'){
return 17.4;
}else if(browser==='firefox'){
return 119;
}else {
return "Unsupported browser";
}
}
browser = "chrome";
let browserFunc = getBrowserVersion();
console.log(browserFunc);


//switch case


/*function getBrowserVersionOptimized(){

switch (browser) {
case "chrome":
return 124;
case "edge":
return 123
case "safari":
return 17.4
case "firefox":
return 119
default:
return "Unsupported browser"

}
}


browser = "safari";
console.log(getBrowserVersionOptimized());*/


function getBrowserVersionOptimized(){

    // Here break keyword is not required when we use return keyword instead of console log. 
switch (browser) {
case "chrome":
console.log(124);
break;
case "edge":
console.log(123); 
break;
case "safari":
console.log(17.4)
break;
case "firefox":
console.log(119)
break;
default:
console.log("Unsupported browser")
break;

}
}
browser = "safari";
getBrowserVersionOptimized();