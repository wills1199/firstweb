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
*/

//Looping forward example
for (i = 0; i < 10; i++){
    console.log(i) // prints to the console numbers 0-9
}

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
var i = 0;

while (i < 10){ // Because i is equal to 0, 0 is our starting point. Because we made the stopping point to be less than 10, the loop will stop at 9 because it is the highest number lower than 10.
    console.log(i);
    i++;
}
// The while loop iterates as long as i is less than 10

// Will print to the console the numbers 0-9