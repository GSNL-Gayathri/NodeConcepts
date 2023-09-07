const multiObject = require("./exportingMultiple");

const {name:myName, age:myAge, role:myRole, scooty:scootySpecs, greet:greetOfTheDay} = multiObject;


console.log("I am",myName,",I am",myAge,"years young.","I am working as a",myRole);
console.log("I am " + myName + ", I am " + myAge + " years young." + " I am working as a " + myRole);

/*
Using commas instead of + will add leading spaces.
If we use +, we need to specify the spaces as well. Observe the above
*/

console.log(greetOfTheDay());
console.log("My dream scooty specifications are, ", scootySpecs);
