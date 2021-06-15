function someFn(myArgument: number | string | boolean)  {
 // cant do: let x = myArgument.toUpperCase() <-- this is a string method, but how do we know arg is a string?
 // until you do:
  if(typeof myArgument === 'string'){
    let x = myArgument.toUpperCase() // <-- no error
  } else if(typeof myArgument === 'number') {
    myArgument.toFixed() // <-- ts will infer number and provide number methods
  } else {
    myArgument.valueOf() // <-- same as previous 
  }
}

// The above logic extends to the case below

interface Dog {
  bark(): void
  walk(): void
}

interface Cat {
  meow(): void
  walk(): void
}

// custom type guard
function isDog(someObj: Dog | Cat): someObj is Dog {
  return (<Dog>someObj).bark !== undefined
}

function callMyPet(pet: Dog | Cat){
  pet.walk() // shared - no problem

  // ugly way:
  if((<Dog>pet).bark){
    (<Dog>pet).bark // (<Dog>pet) is an assertion
  } else{
    (<Cat>pet).meow
  }
  // better this way...
  // using custom type guard:
  if(isDog(pet)){
    pet.bark()
  } else{
    pet.meow()
  }
  
}

class Foo {
  foo: number
  commonProp: string
}

class Bar {
  bar: number
  commonProp: string
}

function fooBarFunction(obj: Foo | Bar) {
  if(obj instanceof Foo){
    obj.foo
  } else {
    obj.bar
  }
}