/** 
 * 0. CONDITIONAL STATEMENTS
 * 
 * If, else, else if  and switch statements are used to perform actions based on different conditions
 * 
 * If allows you to specify a block of code to be executed, if a specific condition is true
 * Else allows to to specify a block of code to be executed, if the same condition is false
 * Else if allows you to specify a new condition to test, if the first condition is false
 * Switch allows you to specify many alternative blocks of code to be executed
 * 
 * 
 */

// 1. If statement
if (condition) {
    // block of code that will be executed if the condition is true
}

//Example
if (hour < 18) {
    greeting = "Good day";
}

// 2. Else statement
if (condition) {
    // block of code that will be executed if the condition is true
} else {
    // block of code that will be executed if the condition is false
}

//Example
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good everning";
}

//3. Else if statement
if (condition1) {
    // block of code that will be executed if condition1 is true
} else if (condition2) {
    // block of code that will be executed if condition1 is false and condition2 is true
} else {
    // block of code to be exeucted if both condition1 and condition2 are false
}

//Example
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


/* 4. Switch statement
* The switch statement is used to select one of many code blocks to be executed
*/
switch (expression) {
    case x:
    // code block
    break;
    case y:
    // code block
    break;
    default:
    // code block
}

//Example
var color = "Green";

switch (color) {
    case "Red":
    console.log("The color red");
    break;
    case "Green":
    console.log("The color green");
    break;
    case "Orange":
    console.log("The color orange"):
    break;
    default:
    console.log("No color")
}
// The console will print "The color green"