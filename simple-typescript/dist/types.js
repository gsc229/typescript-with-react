"use strict";
// Boolean
let b = true;
// Number Ts supports: decimal..binary..octo..hexidecimal 
let num = 1 + 0b1 + 0o1 + 0x1;
// String
const hello = 'Hello';
const world = "World";
const hellowWorld = `${hello} ${world}`;
// Null and Undefined - two separate types
let n = null;
let u = undefined;
let someNumber = null; // not recommended "strictNullChecks": true (default is true) will allow linter to catch error - false error goes away
function uppercaseFirstLeter(str) {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
console.log(uppercaseFirstLeter('hello'));
console.log(uppercaseFirstLeter(null));
// Non Primitive types 
const myObjet = {}; // or [] or new Map() etc.
// can only assign non-primiite types to objects
// Void --> describes the abscense of a value. It is used for a return type for the functions that don't return a value. For example:
function log(message) {
    console.log(message); // --> no return
    return 'a string'; // --> Theres' and error here bc we are returning something with return type of 'void'
}
// Array --> two ways to declare and array:
let array1 = ['x', 'y'];
let array2 = array1;
// Tuple 
let tuple = ['str', 1];
// Enum --> a set of choices
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color["Green"] = "green str";
    Color[Color["Blue"] = 99] = "Blue";
})(Color || (Color = {}));
let myFavoriteColor = Color.Green;
console.log(Color.Red, Color.Green, Color.Blue); // 0 1 2...if you change the sequence ↑ (see note on Red) --> 2, 3, 4
// Enum assigns a number to each member in sequence ↑
// Look up value by number:
console.log(Color[99]); // Blue
console.log(Color['green str']); // but you can't to this.
// Any 
let ANY;
ANY = 'a string';
ANY = 11;
ANY = true;
// Type Assertion --> for when we know there is a more specific type for a value than typescript can check for..
// Example: Let's suppose we have an email input and we want to listen to its change event and log its value
const email = document.getElementById('email');
// type guard
if (email) {
    email.addEventListener('change', e => {
        // the assertion                 ↓
        const input = e.currentTarget;
    });
}
