// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
const _ = require('lodown-wills');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/*
var maleCount = function(array) {
    var malesArray = _.filter(array, function(element, i, array){
        return element.gender === "male";
    });
    return malesArray.length;
};


var maleCount = function(array) {
    var malesArray = array.filter((element) => {
        return element.gender === "male";
    });
    return malesArray.length;
};

*/


var maleCount = function(array) {
    var malesArray = array.filter(element => element.gender === "male");
    return malesArray.length;
}


var femaleCount = function(array) {
    
    var femaleCounter =  _.reduce(array, function(seed, element){
        if (element.gender === "female"){
            seed++;
        }
        return seed;
    }, 0);
    
    return femaleCounter;
    
};


var oldestCustomer = function(array) {
    
    var oldestAge = {age: 0};
    
    _.each(array, function(e, i, a) {
        if(oldestAge.age < e.age){
            oldestAge = e;
        }
        
    })

    return oldestAge.name;
};


var youngestCustomer = function(array) {
    
    var youngestAge = {age: 100};
    
    _.each(array, function(e, i, a){
        
        if(youngestAge.age > e.age){
            youngestAge = e;
        }
    })
    
    return youngestAge.name;
};


var averageBalance = function(customers) {
    
    var count = 0;
    
    var total = _.reduce(customers, function(seed, element, index, array) {
       
        count++;
       
        return seed + Number(element.balance.replace("$", "").replace(",", ""));
           
        }, 0);
        
        return total / count;
        
};


var firstLetterCount = function(array, letter){
    
    var count = 0
    
    _.each(array, function(e, i ,a){
        if(e.name[0] === letter.toLowerCase()){
            count++;
        } else if (e.name[0] === letter.toUpperCase()){
            count++;
        }
    });
    
    return count;
    
};

// Find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = function(array, customer, letter){
  
  var count = 0;
  
  _.each(array, function(e, i ,a){
      
      if(e.name === customer){
          
          _.each(e.friends, function(e, i ,a){
              
              if(e.name[0] === letter.toUpperCase()){
                  count++;
                  
              } else if (e.name[0] === letter.toLowerCase()){
                  count++;
              }
          })
      }
  })
  
  return count;
    
};



// Find the customers' names that have a given customer's name in their friends list

// Nah you cant just start in the friends array. 
// The parameter 'array'  still refers to the customer's array. 
// Therefore you need to loop through that collection to access 
// each customer's friends array and another loop to iterate through each customer's friends list

let friendsCount = function(array, name) {
      let friends = []; // empty array to gather friends names from
  for (let k=0; k<array.length; k++){ //loop to go through array to get to obj element
      for(let j=0; j<array[k].friends.length; j++){ // loop to go through the friends array in each object within main array
      if(array[k].friends[j].name === name){ // test to see if friends array contains given name
          // console .log(array[k].friends[j].name);
          friends.push(array[k].name); // if statement true then push the obj element's name value into empty array
          // return friends; // return friends array back
      }
      }
  }
  // console.log(friends);
  return friends; // return friends array outside of loop (not sure if I need this)
};



var topThreeTags = function(array){

  var three = [];  
  
  var tags = [];
    
  var names = array.map(function(e, i ,a){

  return e.tags;

  });

  tags = tags.concat(...names);

  var frequent1 = tags.sort((a,b) =>

      tags.filter(v => v===a).length
    - tags.filter(v => v===b).length
  ).pop();

  tags = tags.filter(e => e !== frequent1);
  

  var frequent2 = tags.sort((a,b) =>

      tags.filter(v => v===a).length
    - tags.filter(v => v===b).length
  ).pop();

  tags = tags.filter(e => e !== frequent2);

  
  var frequent3 = tags.sort((a,b) =>

      tags.filter(v => v===a).length
    - tags.filter(v => v===b).length
  ).pop();

  three.push(frequent1, frequent2, frequent3);
  
  return three;
  
};

/**
let  topThreeTags = function(array) {
 //get array of tags
 let tags = _.pluck(array, "tags");
 tags = tags.join().split(",");
 // create counter object with each tag as a key with 0 value
 let counter = {};
  // create a key for each tag with a value matching its frequency
 _.filter(tags, function(element, i, array){
     if (counter.hasOwnProperty(element) === false){
         counter[element] = 0;
     }
     return counter[element]++ ;
 });
 // subtract 1 from all values, remove keys with 0 value
 while (Object.keys(counter).length > 3){
     for (let key in counter){
         counter[key] -- ;
             if (counter[key] < 1){
                 delete counter[key];
             }
     }
 }
//return the keys
return Object.keys(counter);
};
*/



var genderCount = function(array) {
    
    var genders = { male: 0, female: 0, ['non-binary']: 0 };
    
        var malesArray = array.filter(element => element.gender === "male");
        
        var femalesArray = array.filter(element => element.gender === "female");
        
        var nonBinary = array.filter(element => element.gender === "non-binary");
    
        genders.male = malesArray.length;
        
        genders.female = femalesArray.length;
        
        genders['non-binary'] = nonBinary.length;
        
        return genders;
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
