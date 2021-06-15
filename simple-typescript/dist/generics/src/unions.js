"use strict";
function someFn(myArgument) {
    // cant do: let x = myArgument.toUpperCase() <-- this is a string method, but how do we know arg is a string?
    // until you do:
    if (typeof myArgument === 'string') {
        let x = myArgument.toUpperCase(); // <-- no error
    }
    else if (typeof myArgument === 'number') {
        myArgument.toFixed(); // <-- ts will infer number and provide number methods
    }
    else {
        myArgument.valueOf(); // <-- same as previous 
    }
}
// custom type guard
function isDog(someObj) {
    return someObj.bark !== undefined;
}
function callMyPet(pet) {
    pet.walk(); // shared - no problem
    // ugly way:
    if (pet.bark) {
        pet.bark; // (<Dog>pet) is an assertion
    }
    else {
        pet.meow;
    }
    // better this way...
    // using custom type guard:
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
class Foo {
}
class Bar {
}
function fooBarFunction(obj) {
    if (obj instanceof Foo) {
        obj.foo;
    }
    else {
        obj.bar;
    }
}
