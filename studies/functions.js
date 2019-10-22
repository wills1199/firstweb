/**
 * 0. FUNCTIONS
 * 
 * A javascript function is a block of code designed to perform a particular task.
 * A javascript function is executed when "something" invokes it.
 * A javascript function is defined with the function keyword, followed by a name, followed by parentheses ().
 */ 
  // Function syntax
  function name(parameter1, parameter2, parameter3) {
      // code to be executed
  }
 
  
 
 /* 1. PARAMETERS AND ARGUMENTS
  * Function parameters are listed inside the parentheses () in the function.
 * Function arguments are the values recieved by the function when it is invoked.
 * Inside the function, the arguments (the parameters) behave as local variables.
 */
// Example
function myFunction (a, b){ // a and b are the parameters
    return a * b;
}

// Example continued
myFunction (2, 4); // 2 and 4 are the arguments being recieved by the funciton as values


/*
 * 2. CLOSURES
 * 
 * Javascript variables can belong to local or global scope.
 * Global variables can be made local with closures.
 * 
 */

//Local vairbale example
function myFunction() {
    var a = 4; // a is a local variable
    return a * a;
}

//Global variable example
var a = 4; // a is a global variable
function myFunction() {
    return a * a;
}


/*
 * 3. FUNCTIONS USED AS VARIABLES
 * Functions can be used as variables
 */

var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";
//instead of using a variable to store the reurn value of a function...


var text = "The temperature is " + toCelsius(77) + " Celsius";
// You can simply use the function directly