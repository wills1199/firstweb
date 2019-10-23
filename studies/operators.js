/** 
 * 0. JavaScript operators are used to assign values, compare values, and perform arithmetic operations, as well as many otehr useful things.
 */

/*
 * 1. ASSIGNMENT OPERATORS
 * 
 * Assignment operators are used to assign values to JavaScript variables
 * 
 * = Basic assignment
 * += Addition assignment
 * -= Subtraction assignment
 * *= Multiplication assignment
 * /= Division assignment
 * %= Remainder assignment
 */

// Given that
x = 10, y = 6

x = y // results in x = 5
x += y // results in x = 15
x -= y // results in x = 5
x *= y // results in x = 50
// x /= y results in x = 2
x %= y // results in x = 0


/* 2. ARITHMETIC OPERATORS
* 
* Arithmetic operators are used to perform arithmetic between variables and/or values
*
* + Addition
* - Subtraction
* * Multiplication
* / Division
* % Modulus
* ++ Increment
* -- Decrement
*
*/

// Given that y = 5

x = y + 2 // y = 5, x = 7
x = y - 2 // y = 5, x = 3
x = y * 2 // y = 5, x = 10
x = y / 2 // y = 5, x = 2.5
x = y % 2 // y = 5, x = 1
x = ++y // y = 6, x = 6
x = y++ // y = 6, x = 5
x = --y // y = 4, x = 4
x = y-- // y = 4, x = 5


/* 3. COMPARISON OPERATORS
*
* Comparison operators are used in logical statements to determine equality or difference between variables or values
*
* == equal to
* === equal value and equal type
* != not equal
* !== not equal value or not equal type
* > greater than
* < less than
* >= greater than or equal to
* <= less than or equal to
*
*/

// Given that x = 5

x == 8 // false
x == 5 // true
x === "5" // false
x === 5 // true
x != 8 // true
x !== "5" // true
x !== 5 // false
x > 8 // false
x < 8 // true
x >= 8 // false
x <= 8 // true


/* 4. LOGICAL OEPRATORs
 * 
 * Logical operators are used to determine the logic between variables or values
 * 
 * && and
 * || or
 * ! not
 */

/* Given that 
 x = 6, y = 3

 (x < 10 && y > 1); // true
 (x === 5 || y === 5); // false
 !(x === y); // true
*/


/* 5. UNARY OPERATORS
 * 
 * A unary operation is an operation with only one operand. This operand will come either before or after the operator.
 * 
 * Unary plus (+) Tries to convert the operand into a number
 * Unary negation (-) Tries to convert the operand into a number and negates after
 * Logical Not (!) Converts to boolean value then negates it
 * Increment (++) Adds one to its oeprand
 * Decrement (--) Decrements by one from its operand
 * typeof Returns a string which is the type of the operand
 */

// Unary plus
+3 // returns 3 - Numbers will not be altered
+'-3' // returns -3
+true // returns 1 - true is converted to 1
+false // returns 0 - false is converted to 0

// Unary negation
-3 // returns -3
-'-3' // returns 3
-true // returns -1
-false // returns -0

// Logical Not(!)
!false // returns true
!true // returns false

// Increment (++)
x = 4 // x=4
y = x++ // y=4 and x=5
// y is set to the value before incrementing and adds 1 to x

x = 4 // x=4
y = ++x // y=5 and x=5
// y is set to the value after incrementing and adds 1 to x

// Decrement (--)
var a = 5 // a = 5
a = a-- // a = 5
// a is set to the value before incrementing

x = 4 // x = 4
y = x-- // y = 4 and x = 3
// sets y to the value before decrementing and it removes 1 from x

var a = 5 // a = 5
a = --a // a = 4
// a is set to the value after incrementing

x = 4 // x = 4
y = --x // y = 3 and x = 3
// sets y to the value after incrementing and it adds 1 to x


// typeof
typeof 2 // returns 'number'
typeof true // returns 'boolean'
typeof "Hello" // returns 'string'
typeof function(val){ return val} //returns 'function'


/* 6. TERNARY OPERATOR
* 
*    variablename = (condition) ? value1:value2
*
*    The ternary operator assigns a value to a variable based on a condition
*/

var age = 15

voteable = (age < 18) ? "Too young":"Old enough";
// The value of the variable "voteable" will be "Too young".