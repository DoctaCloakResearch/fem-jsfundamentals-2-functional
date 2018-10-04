/*
  Overview
  1. Property Access
  2. Dot vs Bracket
  3. Destructuring
  4. Nesting + Loops
  5. Nesting + Destructuring
*/

// Object Literal
var person = {} 

// Dot assignment
person.name = "Mrs. White";

// Object Literal Notation
var person = {
  "name" : "Mr. White"
}

console.log(person);

// 2. Assignments with Dots
var person = {};

person.name = "Mrs. White";

// This won't actually change anything.
// The state will remain the same.
person.name; //??

console.log(person);

// var person = {
//   "name" : "Mrs. White";
// };
