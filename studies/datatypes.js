/** 
 * DATA TYPES:
 * 
 * 0. We call a type of value a data-type. There are simple data types like numbers, strings, booleans, NaN, undefined, and null.
 * And, there are also complex data types such as an array, object, or function.
 * 
 * 
 * 1. Simple or Primitive data types are simple because they do not hold, collect or aggregate other values, 
 * and operations on simple values return new simple values without altering the original value.
 * 
 * Number
 * String
 * Boolean
 * Null
 * Undefined
 * NaN
 * 
 * 2. Complex data types aggregate other values and are of indefinite size.
 *    Complex data types are used to collect other data.
 * 
 * Object
 * Array
 * Function
 */


// SIMPLE DATA TYPES

/*
 * 3. NUMBER
 * 
 * Number: Numeric data, 1, 2, 3
 * 
 */
 
 // Declaring and initializing a variable named 'age' with a value of a number
 var age = 23;
 
 // Other types of numbers
 var decimal = 1.11;
 
 var negative = -2;
 

/*
 * 4. STRING
 * 
 * String: Character data, "Hello world!"
 * 
 */
 
 // Declaring and initializing a variable named 'name' with a value of a string
 var name = 'William'; // Using single quotes
 
 // Other types of strings
 var doubleQuotes = "Mouse";
 
 var emptyString = " ";
 
 
 /*
 * 5. BOOLEAN
 * 
 * Boolean: true or false
 * 
 */
 
 // Declaring and initializing a variable named 'iAmMale' with a value of a boolean
 var iAmMale = true;
 
 // Decalring and initializing a variable named 'iAmFemale' with a value of a boolean
 var iAmFemale = false;

 /*
 * 6. NULL
 * 
 * null: no-value, nullified by a programmer
 * null represents "nothing" or "value unknown"
 */

let height = null; // The height is unknown or empty for some reason


 /*
 * 7. UNDEFINED
 * 
 * undefined: no-value, incept, uninitialized
 * undefind means that the value has not been assigned yet
 */
 
 let x; // shows "undefined" because the value has been declared but not assigned
 
 /*
 * 8. NaN
 *
 * NaN: Not a number (typeof NaN; // => 'number')
 * NaN represents a computational error and is the result of an incorrect or undefined mathematical operation
 */

console.log("William" / 2); // This will return NaN because a string cannot be divided by a number


 /*
 * 9. When assigning or passing, simple data types are copied from one variable to the next.
 */
 
  var a = 1;
  var b = a; // the value stored in a is copied into b
  
  b = 2; // changing the value at b doesn't effect what is stored in a
  // console.log(a) prints to the console 1
  
  
 /* 
 * 10. Complex data type aggregate other values and are of indefinite size.
 *    
 * Object, {key: "value"}
 * Array, [1, 2, 3]
 * Function, value => function => action
 */

// COMPLEX DATA TYPES


/*
 * 11. OBJECT
 * 
 * Object: An object is a collection of key-value pairs
 * Objects are similar to arrays except the values inside the object are not ordered and do not have an index
 */
 
 {}; // An empty literal object
 
 {name: "William"}; // An object with one 'key' that is 'name' and one 'value' that is 'William'
 
 var favFoodTypes = { // A literal object with three key-value pairs
  pizza: "pepperoni",
  iceCream: "chocolate",
  chips: "salt"
 };
 
 /**
 * Accessing objects:
 * 
 * Unlike an Array, values inside an Object are not ordered and do not have an index
 * You can access the values of the properties in an Object using either dot notation or bracket notation
 *
 */

var william = {name: "William", age: 23, favColor: "Orange"};

william.name; // Gives access the value of my name using dot notation
william["name"]; // Gives access to the value of my name using bracket notation



/**
 * Dot notation and bracket notation can also be used to add properties to our Objects
 */
 
var william = {name: "William", age: 23, favColor: "Orange"};

william.iceCream = "chocolate"; // Here I added a key of iceCream and the value of “Chocolate” to the Object william

william["gender"] = "male"; // Here I added the key of gender and the value of male to the Object william


 
/*
 * 12. ARRAY
 * 
 * Array: An array is a zero indexed list that allows us to store a list of values as one
 */

[]; // An empty literal array

[1]; // A literal array with one element, the number 1

[3, "William", true]; // A literal array with different data types


/*
 * Accessing arrays:
 * 
 * Because Array values are stored in a zero indexed list, you can access them using bracket notation
 * The first element in an Array has the index 0
 *
 */
 
var names = ["William", "John", "Sam"];
// If you want to access the first value, “William”, you would use the index 0 inside brackets like so // names[0];

/*
 * Removing values from arrays
 *
 */

// pop(); Removes an item from the end of an array
let num = [1, 2, 3]
num.pop() // [1, 2]

// shift(); Removes an item from the front of an Array
let numbers = [1, 2, 3]
numbers.shift() // This will result in the numbers array becoming [2, 3]

/*
 * Adding values to arrays
 *
 */

// push(); Adds an item to the end of an array
let nums = [1, 2, 3]
nums.push(4) // [1, 2, 3, 4]

// unshift(); Adds an item to the front of an Array
let numz = [1, 2, 3]
numz.unshift(0) // This will result in the numz array becoming [0, 1, 2, 3]


 
/*
 * 13. FUNCTION
 * 
 * In the first stage of making a function you create the action that you want the computer to perform.
 * Since we want this action to be able to be performed on multiple possible values we use placeholders that act as stand-ins.
 * These placeholders are called parameters.
 * The actual values that you would like to invoke the function on are called arguments
 */
 
 function add(num1, num2){
  return num1 + num2;
 }
 // In the above example "add" is the name of our function, "num1" and "num2" are our parameters, and "return num1 + num2" is our code block that will be executed.

 add(5, 10); // This will return 5 + 10 which equals 15
 

  
// 14. When assigning or passing, complex data-types are passed by reference.
 
  var a = {one: "ham"};
  
  var b = a;
  // The value stored in b is a reference to the value stored in a and they now both point to the same object
  
  b.one = "turkey";
  console.log(a.one) // will print to the console "turkey"
  // Changing the value at b effects all references because the value is referenced to the same object
 

 /* 15. Infinity and -Infinity
 *    Infinity is a numeric value that represents positive infinity.
 *    -Infinity is a numeric value that represents negative infinity
 *    Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.
 *    Infinity is displayed when a number exceeds the lower limit of the floating point numbers, which is -1.797693134862315E+308.
 */

console.log(Infinity) // Will return Infinity
console.log(Infinity + 1) // Will return Infinity
console.log(Math.pow(10, 1000)) // Will return Infinity

console.log(Math.log(0)) // Will return -Infinity