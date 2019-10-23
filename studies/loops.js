/** 
 * 0. LOOPS
 * 
 * Loops execute a block of code a humber of times by running though the same code over and over again, each time with a different value
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


//2. FOR/IN LOOPS
var object1 = {
    a: 1,
    b: 2,
    c: 3
    }
    
for (var key in object1){
    console.log(key);
    console.log(object1[key])
}
// Will print out a, 1, b, 2, c, 3

/*3. WHILE LOOPS
while (condition) {
    // code block to be executed
}
*/

//Example
var i = 0;

while (i < 10){
    console.log(i);
    i++;
}
// Will print to the console the numbers 0-9