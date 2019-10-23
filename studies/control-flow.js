/**  
 * 0. CONDITIONAL STATEMENTS
 * 
 * Control flow is the order in which the computer executes statements in a script.
 * Code is run in order from the first line until the last line.
 * Control flow is seen in if statements.
 * 
 * If, else, else if and switch statements are used to perform actions based on different conditions
 * 
 * If allows you to specify a block of code to be executed, if a specific condition is true.
 * Else allows to to specify a block of code to be executed, if the same condition is false.
 * Else if allows you to specify a new condition to test, if the first condition is false.
 * Switch allows you to specify many alternative blocks of code to be executed.
 * 
 * 
 */

/* 1. If statement syntax
if (condition) {
    // block of code that will be executed if the condition is true
}
*/

//Example
var hour = 15;

if (hour < 18) {
    greeting = console.log("Good day"); // This will print to the console "Good day"
}


/* 2. Else statement syntax
if (condition) {
    // block of code that will be executed if the condition is true
} else {
    // block of code that will be executed if the condition is false
}
*/

//Example
if (hour < 18) {
    console.log("Good day");
} else {
    console.log("Good everning");
}

/*3. Else if statement syntax
if (condition1) {
    // block of code that will be executed if condition1 is true
} else if (condition2) {
    // block of code that will be executed if condition1 is false and condition2 is true
} else {
    // block of code to be exeucted if both condition1 and condition2 are false
}
*/

//Example
var time = 5;

if (time < 10) {
    console.log("Good morning"); // The console will print out "Good morning"
} else if (time < 20) {
    console.log("Good day");
} else {
    console.log("Good evening");
}


/* 4. Switch statement syntax
* The switch statement is used to select one of many code blocks to be executed

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
*/

//Example
var color = "Green";

switch (color) {
    case "Red":
    console.log("The color red");
    break;
    case "Green":
    console.log("The color green"); // The console will print "The color green"
    break;
    case "Orange":
    console.log("The color orange");
    break;
    default:
    console.log("No color");
}