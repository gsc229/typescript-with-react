// when comparing values, typescript uses their shapes to verify if they are compatibile --> sometimes called duck typing or structural sub-typing
// Interfaces are used to describe the "shapes"
interface A {
  someProp: number;
}

interface B {
  someProp: number;
  anotherProp: number;
}

let a: A = { someProp: 1 };
let b: B = a; // throws error that 'anotherProp' is missing from b

interface Profile {
  readonly name: string,
  age?: number // ? makes the property optional
}

let profile: Profile = {
  name: 'John',
}

// profile.name = 'Steve' // Can change a property on the fly, but not if it is declared a readonly in the interface ↑.

// Index Signature
interface C {
  someProp: string;
  [key: string]: number | string;
}

const c: C = { someProp: 'some prop' }

// Call Signature
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b
sum.prop1 = 'some prop' // can continue adding properties in addition to the call signature.

// Extend Interface
interface Parent {
  x: string  
}

interface Parent2 {
  y: string
}

interface Parent3 {
  z: string
}

interface Child extends Parent, Parent2, Parent3 {}

let child: Child = { x: 'some prop', y: 'another', z: 'parent3 prop'}

  
