/** 
 * 0. LOOPS
 * 
 * Loops execute a block of code a number of times by running though the same code over and over again, each time with a different value
 * Loops are useful for iterating over collections of data like in an array.
 * By using loops with collections, we call pull out each value of the collection one by one to work with them.
 * 
 * for - loops through a block of code a number of times.
 * for/in - loops through the properties of an object.
 * while - loops through a block of code while a specified condition is true.
 */

/*1. FOR LOOP EXAMPLE
for (statement1, statement2; statement3){
    // code block to be executed
}

* Statement 1 is the starting condition and is executed one time before the code block is executed.
* Statement 2 is the stopping condition and defines when the code block will stop being executed.
* Statement 3 is the incrementor and is executed every time after the code block has been executed.
*/

//Looping forward example
for (i = 0; i < 10; i++){
    console.log(i) // prints to the console numbers 0-9
}
/* In the above example the first statement sets a variable before the loop starts.
*  The loop will start at 0
*
*  The second statement defines the condition for the loop to run.
*  The loop will only run if i is less than 10.
*
*  The third statement increases the value by one each time the code block in the loop has been executed.
*/

//Looping backward example
for (i = 10; i > 0; i--){
    console.log(i) // prints to the console numbers 10-1
}

//Looping over an array forward
var array = ["Hello", "my", "name", "is", "William"];

for (var i = 0; i < array.length; i++){
    console.log(array[i]) // Will print to the console "Hello", "my", "name", "is", "William"
}

//Looping over an array backward
var array = ["Hello", "my", "name", "is", "William"];

for (var i = array.length - 1; i >= 0; i--){
    console.log(array[i]) // Will print to the console "William", "is", "name", "my", "Hello"
}


//2. FOR-IN LOOPS
// for-in loops pull out all the keys of an object one by one
var object1 = {
    a: 1,
    b: 2,
    c: 3
    }

// The variable key is populated with the keys of whatever object we are accessing
// in object1 tells the loop that we want to iterate over the keys in the object named object1
for (var key in object1){ // tells the computer we want to iterate over the keys in the object named object1
    console.log(key); // prints to the console the key names
    console.log(object1[key]) // prints to the console the values of each key
    // Because the key variable is dynamically updated with the keys of the object we must use array syntax "object[key]".
}
// Will print out a, 1, b, 2, c, 3



/*3. WHILE LOOPS
while (condition) {
    // code block to be executed
}
*/

//Example
var i = 0; // This is the starting condition. Because i is equal to 0, 0 is our starting point.

while (i < 10){ // This is our stopping point. Because we made the stopping point to be less than 10, the loop will stop once i becomes equal to 10.
    console.log(i);
    i++; // This is our iterator. The starting condition will increase by one as long as i is less than 10.
}
// Will print to the console the numbers 0-9