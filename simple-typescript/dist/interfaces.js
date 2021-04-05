"use strict";
let a = { someProp: 1 };
let b = a; // throws error that 'anotherProp' is missing from b
let profile = {
    name: 'John',
};
const c = { someProp: 'some prop' };
const sum = (a, b) => a + b;
sum.prop1 = 'some prop'; // can continue adding properties in addition to the call signature.
let child = { x: 'some prop', y: 'another', z: 'parent3 prop' };
