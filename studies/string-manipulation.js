/**
* 0. JAVASCRIPT STRINGS
*
*   Javascript strings store a series of characters inside double or single quotes like "Hello World"
*   String indexes are zero-based meaning that the first character is in position 0, the second is 1, and so on.
*   Strings like "Hello World!" cannot have properties or methods because they are not objects
* 
*/

/*
 * 1. Concatenation Operators
 * 
 * + Concatenation
 * += Concatenation assignment
 */

string1 = "Hello"
string2 = string1 + " World!" // returns "Hello World!"

string1 = "Hello"
string2 += " World!" // returns "Hello World!"

/*
 * 2. STRING PROPERTIES
 * 
 * length - returns the length of a string
 * 
 */

// The length property returns the length of a string (the number of characters it has)
// The length of an empty string is 0

var str = "Hello World!";
console.log(str.length); // Prints to the console 12

/*
 * 3. STRING METHODS
 * 
 * concat() - Joins two or more strings, and returns a new joined string
 * localeCompare() - Compares two strings in the current locale
 * slice() - Extracts a part of a string and returns a new string
 * split() - Splits a string into an array of substrings
 * toLowerCase() - Converts a string to lowercase letters
 * toUpperCase() - Converts a string to uppercase letters
 * 
 */

//concat()
str1 = "Hello"
str2 = "World"
str3 = str1.concat(str2) // str3 = ="HelloWorld"

//localeCompare()
var str1 = "ab";
var str2 = "cd";
var n = str1.localeCompare(str2); // n = -1

//slice()
var str = "Hello world!";
var res = str.slice(0, 5); // res = "Hello"

//split()
var str = "How are you doing today?";
var res = str.split(" "); // res = ["How", "are", "you", "doing", "today?"]

//toLowerCase()
var str = "Hello World!";
var res = str.toLowerCase(); // res = "hello world!"

//toUppercase()
var str = "hello world!";
var res = str.toUpperCase(); // res = "HELLO WORLD!"