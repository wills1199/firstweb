/** 
 * DATA TYPES:
 * 
 * 0. We call a type of value a data-type. There are simple data types like numbers, strings, booleans, NaN, undefined, and null.
 * And, there are also complex data types such as an array, object, or function.
 * 
 * 
 * 1. Simple or Primitive data types are simple because they do not hold, collect or aggregate other values, and operations on simple values return new simple values without altering the original value.
 *
 * Number: Numeric data, 1, 2, 3
 * String: Character data, "Hello world!"
 * Boolean: true or false
 * NaN: Not a number (typeof NaN; // => 'number')
 * undefined: no-value, incept, uninitialized
 * null: no-value, nullified by a programmer
 */

 /* 
 * 2. When assigning or passing, simple data types are copied from one variable to the next.
 */
 
  var a = 1;
  var b = a; // the value stored in a is copied into b
  
  b = 2; // changing the value at b doesn't effect what is stored in a
  // console.log(a) prints to the console 1
  
 /* 
 * 3. Complex data type aggregate other values and are of indefinite size.
 *    
 * Object, {key: "value"}
 * Array, [1, 2, 3]
 * Function, value => function => action
 */

  
// 4. When assigning or passing, complex data-types are passed by reference.
 
  var a = {one: "ham"};
  
  var b = a;
  // The value stored in b is a reference to the value stored in a and they now both point to the same object
  
  b.one = "turkey";
  console.log(a.one) // will print to the console "turkey"
  // Changing the value at b effects all references because the value is referenced to the same object
 

 /* 5. Infinity and -Infinity
 *    Infinity is a numeric value that represents positive infinity.
 *    -Infinity is a numeric value that represents negative infinity
 *    Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.
 *    Infinity is displayed when a number exceeds the lower limit of the floating point numbers, which is -1.797693134862315E+308.
 *
 */
