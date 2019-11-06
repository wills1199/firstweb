/** 
 * 0. FUNCTIONS
 * 
 * A javascript function is a block of code designed to perform a particular task.
 * A javascript function is executed when "something" invokes it.
 * A javascript function declaration is defined with the function keyword, followed by a name, followed by parentheses ().
 */ 
  // Function syntax
  function name(parameter1, parameter2, parameter3) {
      return //code to be executed - return optional
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

// Parameters and arguments are optional
function greeting(){
    console.log("Hello, how are you?")
}

// Function parameters can be set and still be optional

function myFunc(a,b) {
  b = b || 0;
  // b will be set either to b or to 0.
}


/*
 * 2. CLOSURES
 * 
 * A closure gives you access to an outer function's scope from an inner function
 */

function myName() {
  var name = 'William'; // name is a local variable created by myName
  
  function displayName() { // displayName() is the inner function, a closure
  
    console.log(name); // uses variable declared in the parent function
    
  }
  
  displayName();
};


/*
 * 3. FUNCTIONS USED AS VARIABLES
 * Functions can be used as variables
 */

function toCelsius(f) {
  return (5/9) * (f-32);
}

var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";
//instead of using a variable to store the reurn value of a function...


var text = "The temperature is " + toCelsius(77) + " Celsius";
// You can simply use the function directly

/*
 * 4. FUNCTION SCOPE
 *
 * Functions can see and modify varibales in parent or global scope. The inverse is not true.
 *
 * Variables declared withing a javascript function become local to the function.
 *
 */
 

// Local variables
 
// code here can not use myName

function myFunction() {
  var myName = "William";

  // code here can use myName

}

// Global variables

var myName = "William"; // code here can use myName

function myFunction() {

  // code here can also use myName

}