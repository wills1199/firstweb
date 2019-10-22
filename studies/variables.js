/**
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 * LET:
 * 
 * 4. Let is similar to variables in that they are named identifiers that can point to values of a particular type.
 * However, let is different from variables because they allow you to declare variables that are limited to a scope of a block statement.
 * Variables that are declared by let have their scope in the block for which they are defineds, as well as any contained sub-blocks.
 */

/*
 * When let is used inside of a code block it is limits the scope of the variable to that block.
 */

var a = 5;
var b = 6;

if (a === 5) {
    var a = 55; // the scope is global
    let b = 66; // the scope is inside the if-block
    
    console.log(a); // 55
    console.log(b); // 22
}

console.log(a); // 55
console.log(b); // 6

/*
 * CONST:
 * 
 * 5.Constants are similar to let statements in that they are also block scoped. 
 * However, The difference between the two is that the value of a constant can't be changed through reassignment, and it can't be redeclared.
 */

const myAge = 23; // This defines myAge as a constant and gives it the value of 23

myAge = 24; // This will give an error because you can't assign a new variable to a constant

/*
 * HOISTING:
 * 
 * 6. When javascript compiles all of your code, all variable declarations are hoisted or lifted up to the top of their local or global scope with nor regard to where the actual declaration has been made.
 */

// A variable can be delcared after it has been used
x = 5; // Assigns 5 to x
//code
//code
//code
var x; // Declare x

// Javascript intializations are not hoisted
var x = 5; // Initialize x
//code
//code
//code
var y = 7; // Initialize y
// y would be undefined because only the declaration (var y), not the initialization (=7) is hoisted to the top.