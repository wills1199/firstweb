/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name){
    for (let i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            return animals[i]
        }
    }return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    for (let i = 0; i < animals.length; i++){
        if (animals[i].name === name){
           return animals.splice(animals[i], 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
      for (let i = 0; i < animals.length; i++){
        if (animals[i].name === name){
           return animals.splice(animals[i], 1);
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*- Checks that the animal Object has a `name` property with a length > 0.
 *- Checks that the animal Object has a `species` property with a length > 0.
 *- Has a **unique** name, meaning no other animals have that name.
 *- Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
*/

function add(animals, animal){
    for (var i = 0; i < animals.length; i++){
        if ((animal.name.length > 0) && (animal.species.length > 0) && (animal.name !== animals[i].name)){
            return animals.push(animal);
        } else {
            return animals
        }
    }
}

        






/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
